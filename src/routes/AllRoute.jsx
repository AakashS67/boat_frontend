import {Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Earphone from '../components/Earphone';

const AllRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories/earphone" element={<Earphone />} />
            </Routes>

        </>
    )
}

export default AllRoute