const Banner = () =>{
    return(
<>
<div className="carousel slide" id="banner" data-bs-ride="carousel">
<div className="carousel-indicators">
    <button type="button" data-bs-target="#banner" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#banner" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#banner" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#banner" data-bs-slide-to="3"></button>

</div>
<div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1000">
        <img src="https://www.boat-lifestyle.com/cdn/shop/files/LUNAR_Link_Banner_WEB_2_1440x.jpg?v=1707809481" alt="smart watch" />
    </div>
    <div className="carousel-item" data-bs-interval="1000">
    <img src="https://www.boat-lifestyle.com/cdn/shop/files/RS_Banner_WEB_2_1440x.png?v=1707810457" alt="" className="d-block w-100"/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
    <img src="https://www.boat-lifestyle.com/cdn/shop/files/RS_Banner_WEB_1_1440x.jpg?v=1706770352" alt="" className="d-block w-100"/>
    </div>
    <div className="carousel-item" data-bs-interval="1000">
    <img src="https://www.boat-lifestyle.com/cdn/shop/files/Ultima_Select_Banner_WEB_1440x.jpg?v=1707460925" alt="" className="d-block w-100"/>
    </div>
</div>
<button type="button" className="carousel-control-prev" data-bs-target="#banner" data-bs-slide="prev">
<span className="carousel-control-prev-icon"></span>
</button>
<button type="button" className="carousel-control-next" data-bs-target="#banner" data-bs-slide="next">
<span className="carousel-control-next-icon"></span>
</button>
</div>
</> 
    )
}

export default Banner