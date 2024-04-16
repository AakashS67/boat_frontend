import {Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Earphone from '../components/Earphone';
import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPassword";
import SignUp from "../pages/SignUp";

const AllRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/forget-password" element={<ForgetPassword/>}/>
                <Route path="/sign-up" element={<SignUp />}/>
                <Route path="/categories/earphone" element={<Earphone />} />
            </Routes>

        </>
    )
}

export default AllRoute