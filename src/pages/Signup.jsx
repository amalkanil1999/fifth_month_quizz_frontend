import React, { useState } from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
})

function Signup() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(null);

  function handleRegisterSubmit(e) {
    e.preventDefault();
    setLoading(true);

    client.post("/api/v1/auth/register/", { email, username, password })
      .then((res) => {
        console.log("Registration response:", res);

        client.post("/api/v1/auth/login/", { email, password })
          .then((res) => {
            console.log("Login response:", res);
            setCurrentUser(true);
          })
          .catch((error) => {
            console.error("Login error:", error);
            setError("Login failed. Please try again.");
          })
          .finally(() => setLoading(false));
      })
      .catch((error) => {
        console.error("Registration error:", error);
        setError("Registration failed. Please try again.");
        setLoading(false);
      });
  }
  function submitLogout(e) {
    e.preventDefault();
    client.post(
      "/api/logout/",
      {withCredentials: true}
    ).then(function(res) {
      setCurrentUser(false);
    });
  }
  if (currentUser) {
    return <Navigate to="/home" />
  }

  return (
    <SignupPageContainer>
      <SignupFormContainer>
        <h2 style={{ color: '#3494e6' }}>Signup</h2>
        <Form onSubmit={handleRegisterSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={e =>setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="username">UserName:</Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={e => setUserName(e.target.value)}
              required
            />
          </FormGroup>
          <SignupButton type="submit">Signup</SignupButton>
        </Form>
      </SignupFormContainer>
      <SignupButton type="submit" onClick={e => submitLogout(e)}>Log Out</SignupButton>
    </SignupPageContainer>
    
  );
}

const SignupPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #3494e6, #ec6ead);
`;

const SignupFormContainer = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  width: 400px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const SignupButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export default Signup;
