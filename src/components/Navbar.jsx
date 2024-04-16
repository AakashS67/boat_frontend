import { Link, NavLink } from "react-router-dom"
import style from "../Styles/navbar.module.css"
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser, FaShoppingBag } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div className="container-fluid shadow-sm">
            <div className="row">
                <div className="col bg-light p-2 text-center" style={{ fontFamily: "monospace", fontSize: "12px" }}>
                    Playback: 150 Hrs | Sound: Sublime | Price: ₹1199 ₹1499 | Shop Rockerz Trinity using: TAKE300
                </div>
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid ">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenav"><span className="navbar-toggler-icon"></span></button>
                           <Link to="/"><Logo w={100} h={60} /></Link>
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

                                <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md">
                                    <input type="text" className={`w-full flex rounded-l-full bg-light outline-none h-8 pl-2`} placeholder="Search.." />
                                    <div className="text-lg bg-black flex min-w-[30px] h-8 items-center justify-center text-white rounded-r-full">
                                        <IoSearchOutline />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 ms-4">
                                    <div className="text-xl text-dark cursor-pointer">
                                        <FaRegUser  />
                                </div>
                                <div className="text-xl relative">
                                    <Link to="/cart" className="text-dark">
                                        <span><FaShoppingBag className="hover:shadow-md" /></span>
                                    </Link>

                                    <div className="bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center absolute -top-1 -right-2">
                                        <p className="text-sm pt-3">0</p>
                                    </div>
                                </div>
                                <div>
                                    <Link to="/login">
                                        <button className="btn btn-dark"> Login</button>
                                    </Link>
                                </div>
                            </div>
                    </div>
                </nav>
            </div>
        </div>
            </div >
        </div >
    )
}

export default Navbar