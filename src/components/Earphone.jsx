import axios from "axios"
import { useEffect, useState } from "react"
import { Badge } from "react-bootstrap"
import { FaCircle } from "react-icons/fa"

const Earphone = () => {

    const [earphonedata, setEarphoneData] = useState([])
    const [qty, setQty] = useState(0)

    const getData = () => {
        axios.get('http://localhost:8000/getearphone')
            .then((res) => setEarphoneData(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="container mt-5"></div>

            <div className="row m-1 gy-3">
                {
                    earphonedata.map((item, key) => (

                        <div className="col-3" key={key}>

                            <div className="card shadow-sm">
                                {/* <div className="card-body"> */}
                                <img className="img-fluid " src={item.product_image} alt="" style={{ width: "100%", height: "250px" }} />
                                {/* </div> */}
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col">
                                            <h6 className="text-start" style={{ fontSize: "14px" }}>{item.product_title}</h6>
                                        </div>

                                        <div className="col d-flex justify-content-center">
                                            <FaCircle className="position-relative"></FaCircle>
                                            <FaCircle className="position-absolute ms-3 text-warning"></FaCircle>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="row">
                                                <div className="col d-flex justidy-content-center align-items-center">
                                                    <p><b>{item.price} </b></p>
                                                    {/* <div className="col"> */}
                                                    <p className="ms-2" style={{ fontSize: "14px" }}> <strike>{item.price_2} </strike></p>
                                                    {/* </div> */}

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#addtocart">Add to Cart</button>
                                            <div className="offcanvas offcanvas-end" id="addtocart">
                                                <div className="offcanvas-header">
                                                    <h4 className="offcanvas-title">Add to Cart</h4>
                                                    <button className="btn-close" data-bs-dismiss="offcanvas"></button>
                                                </div>
                                                <div className="offcanvas-body">
                                                    <div className="row bg-light mb-3">
                                                        <div className="col-3">
                                                            <img className="img-fluid rounded-3" src={item.product_image} alt="" />
                                                        </div>
                                                        <div className="col text-start">
                                                        <h5 className="">{item.product_title}</h5>
                                                        <p>{item.price}</p>
                                                        <div className="row mb-2">
                                                            <div className="col ">
                                                            <badge className="bg-warning rounded">#Color</badge>
                                                            </div>
                                                            <div className="col d-flex input-group">
                                                                <button disabled={qty===1} className="btn btn-secondary btn-sm rounded-start-3 outline-end-none" onClick={()=>setQty(qty-1)}>-</button>
                                                                <input type="text" className="form-control  outline-start-none" value={qty} disabled style={{width:"20px"}}/>
                                                                <button className="btn btn-secondary btn-sm rounded-end-3 outline-start-none" onClick={()=>setQty(qty+1)}>+</button>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Earphone
