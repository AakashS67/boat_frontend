import { Link } from "react-router-dom";
import Banner from "./Banner"
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {


    const clip = document.querySelectorAll(".hover-to-play");

    for (let i = 0; i < clip.length; i++) {
        clip[i].addEventListener("mouseenter", function (e) {
            clip[i].play();
        });
        clip[i].addEventListener("mouseout", function (e) {
            clip[i].pause();
        });
    }



    const [earphonedata, setData] = useState([])


 const getEarphone = async () => {
        await axios.get('https://boat-backend-wim9.onrender.com/getearphone')
        // .then((res)=>console.log(res))
            .then((res) => setData(res.data))
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        getEarphone()
    },[])

    return (
        <>
            <Banner />
            <div className="container-fluid">
                <h4 className="mt-2 text-start ms-3">Categories</h4>
                <div className="d-flex justify-content-center">
                    <div className="row gap-4 my-2">
                        <div className="col">
                            <Link to='/categories/earphone'>
                                <div className="card rounded-5" style={{ width: "320px", height: "320px" }}>
                                    <video className="img-fluid hover-to-play rounded-5" src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_Bejc8URjU1NSXdhabLCmD.mp4" alt="" loop autoPlay></video>
                                </div>
                            </Link>
                            <h6>Earphone</h6>
                        </div>
                        <div className="col">
                            <Link to='/categories/neckbands'>
                                <div className="card rounded-5" style={{ width: "320px", height: "320px" }}>
                                    <video className="img-fluid hover-to-play rounded-5" src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_OyJHanx4QSdUN3OVGTO7C.mp4" alt="" loop autoPlay />
                                </div>
                            </Link>
                            <h6>Neckbands</h6>
                        </div>
                        <div className="col">
                            <Link to='/categories/wired-headphones'>
                                <div className="card rounded-5" style={{ width: "320px", height: "320px" }}>
                                    <video className="img-fluid hover-to-play rounded-5" src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_CpsRIdJWtpXyFN3enwbXd.mp4" alt="" loop autoPlay />
                                </div>
                            </Link>
                            <h6>Wired headphones</h6>
                        </div>
                    </div>
                </div>
                <div className="row bg-light mb-3">
                    <div className="col">
                        <h4 className="d-flex align-items-center mt-2 text-start ms-3">Today's Offers</h4>
                    </div>
                    <div className="col">
                        <Link className="d-flex align-items-center justify-content-end nav-link text-primary"><h6>View All</h6></Link>
                    </div>

                </div>
                <div className="row">
                    <div className="col-3">
                        <Link className="nav-link" to='/categories/smartwatches/smartwatch-1'>
                            <div className="card rounded-3 relative">
                                <div className="position-relative d-flex">
                                    <img className="img-fluid rounded-top-3" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Ultima_Select.jpg?v=1707299725" alt="" style={{ width: "300px", height: "300px" }} />
                                    <badge className="position-absolute text-bg-dark text-start ps-2 mt-2" style={{ fontSize: "10px" }}><b>Engraving Available</b> </badge>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="text-start">Ultima Select</h6>
                                            <div className="row">
                                                <div className="col">
                                                    <span style={{ fontSize: "12px" }}><b>₹2,999</b> </span><strike className="bg-light" style={{ fontSize: "10px" }}>₹12,999</strike><span className="text-success" style={{ fontSize: "10px" }}> <b>77% off</b></span>
                                                </div>
                                                <div className="col">
                                                    <button className="btn btn-dark btn-sm">Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
{/*         
                {
                earphonedata.map((item,key) => (
                    <div key={key}>
                       <h1> {item._id} </h1>
                       <p> {item.price} </p>
                       <img className="img-fluid" src={item.product_image} alt="" style={{width:"200px",height:"250px"}}/>
                    </div>
                ))
            } */}
            </div>
        
        </>
    )
}

export default Home