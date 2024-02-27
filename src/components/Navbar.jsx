import { Link, NavLink } from "react-router-dom"
import style from "../Styles/navbar.module.css"
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="section">
            <div className="row">
                <div className="col bg-light p-2" style={{ fontFamily: "monospace", fontSize: "12px" }}>
                    Playback: 150 Hrs | Sound: Sublime | Price: ₹1199 ₹1499 | Shop Rockerz Trinity using: TAKE300
                </div>
                <div className="row">
                    <div className="col p-2">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenav"><span className="navbar-toggler-icon"></span></button>
                     
                                <Link to="/"><img className="w-50" src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434" alt="boat" /></Link>
                               
                                <div className="collapse navbar-collapse" id="collapsenav">
                                    <ul className="navbar-nav"> 
                                        <li className="nav-item dropdown"><NavLink className="dropdown-toggle nav-link ms-5" role="button" to="/categories" data-bs-toggle="dropdown">Categories</NavLink>
                                        <ul className="dropdown-menu">
                                        <li className="dropdown-item"><Link className="nav-link" to="/categories/neckbands">NeckBands</Link></li>
                                        <li className="dropdown-item"><Link className="nav-link" to="/categories/smart-watches">Smart Watches</Link></li>
                                        <li className="dropdown-item"><Link className="nav-link" to="/categories/wired-headphones">Wired Headphones</Link></li>
                                        </ul>
                                        </li>
                                       </ul>
                                </div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="input-group">
                                        <button className={` bg-light rounded-5 border-end-0 d-flex align-items-center border-0`}>
                                            <IoSearchOutline />
                                        <input type="text" className={`ms-2 border-start-0 bg-light rounded-end-5 ${style.search}`} placeholder="Search.."/>
                                        </button> 
                                       </div>  
                                       <button type="button" className="btn border-0" ><Link to="/login" className="text-dark"><FaRegUser className="mb-2" /></Link></button> 
                                       <button type="button" className="btn border-0" ><Link to="/cart" className="text-dark"><FaShoppingBag className="mb-2" /></Link></button> 
                                    </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar