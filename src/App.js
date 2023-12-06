import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import Category from "./pages/Category";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Store from "./context/Store";


function App() {

    return (
        <>
            <Store>
                <Router>
                    <Routes>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/category" element={<Category />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup/" element={<Signup />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
            </Store>
        </>
    );
}

export default App;