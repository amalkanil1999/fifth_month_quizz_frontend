import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

function NotFound() {

   return <Navigate to="/login" />;
}

export default NotFound;

const NoMatchErrorText = styled.h1`
    font-size: 50px;
    text-align: center;
`;
