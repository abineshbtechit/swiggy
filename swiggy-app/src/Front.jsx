import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';

function Front() {

    const [image, setImage] = useState([]);
    const [chinese, setChinese] = useState([]);
    const [grocery, setGrocery] = useState([]);
    const [hotels, setHotels] = useState([]);

    useEffect(
        (res) => {
            fetch("http://localhost:3000/image")
                .then((res) => res.json())
                .then((data) => setImage(data))
        }
        , [])

    useEffect(
        (res) => {
            fetch("http://localhost:3000/chinese")
                .then((res) => res.json())
                .then((data) => setChinese(data))
        }
        , [])

    useEffect(
        (res) => {
            fetch("http://localhost:3000/grocery")
                .then((res) => res.json())
                .then((data) => setGrocery(data))

        }
    )
    useEffect(
        (res) => {
            fetch("http://localhost:3000/hotel")
                .then((res) => res.json())
                .then((data) => setHotels(data))

        }
    )


    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary px-5 py-3 ms-3">
                    <div className="container-fluid d-flex justify-content-between align-items-center w-100 ">



                        {/* Center Section - Nav Links */}
                        <ul className="navbar-nav d-flex flex-row align-items-center gap-5 mb-0 fs-5">
                            <li className="nav-item ms-4">
                                <a className="nav-link active" href="/partner">Partner</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/aboutchatcart">Aboutchartcart</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Restaurant
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">A-B</a></li>
                                    <li><a className="dropdown-item" href="#">Arafa</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Naruvi</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#getapp">getApp</a>
                            </li>
                        </ul>

                        {/* Right Section - Buttons + Search */}
                        <div className="d-flex align-items-center gap-4">
                            <a href="/signup" className="btn btn-secondary px-4">SIGNUP</a>
                            <a className="btn btn-success px-4" href="/signin">SIGNIN</a>
                            <Link className="btn btn-danger px-4">LOGOUT</Link>
                            <form className="d-flex align-items-center ms-2" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>
                    </div>
                </nav>


                <div className="d-flex p-2 justify-content-center align-items-center flex-column">
                    <h1>Order food & groceries.</h1>
                    <h1>Discover best restaurants. Swiggy it!</h1>
                    <div className="loader-wrapper">
                        <span className="loader-letter col">c</span>
                        <span className="loader-letter col">h</span>
                        <span className="loader-letter col">a</span>
                        <span className="loader-letter col">a</span>
                        <span className="loader-letter col">t</span>
                        <span className="loader-letter col">c</span>
                        <span className="loader-letter col">a</span>
                        <span className="loader-letter col">r</span>
                        <span className="loader-letter col">t</span>
                        <span className="loader-letter col">t</span>
                        <div className="loader"></div>
                    </div>

                </div>

                <div className='d-flex'>
                    {image.map(
                        (img) => {
                            return (
                                <div key={img.id} className="d-flex flex-row zoom-card" id='banner'>
                                    <img src={img.imgUrl} alt="banner" className="img-fluid w-100" />
                                </div>

                            )
                        }
                    )}
                </div>

                <div className='d-flex justify-content-center align-item-center mt-4 mb-4'
                    id='chinese'>
                    <h2 >Popular Chinese Restaurants Near You</h2>
                </div>
                <div
                    id="chineseCarousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    style={{ maxWidth: "90vw", margin: "auto" }}
                >
                    <div
                        className="d-flex"
                        style={{
                            gap: "20px",
                            overflowX: "auto",
                            overflowY: "hidden",
                            whiteSpace: "nowrap",
                            padding: "20px",
                            scrollBehavior: "smooth",
                            maxWidth: "90vw",
                            margin: "auto",
                        }}
                    >
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className="d-flex flex-row flex-wrap">
                                {chinese.map((chn) => (
                                    <div key={chn.id + '-' + i} className="text-center  zoom-card">
                                        <img
                                            src={chn.imgUrl}
                                            alt="chinese"
                                            className="food-img"
                                        />
                                        <p className="food-name">Biryani</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div
                        className="d-flex"
                        style={{
                            gap: "20px",
                            overflowX: "auto",
                            overflowY: "hidden",
                            whiteSpace: "nowrap",
                            padding: "20px",
                            scrollBehavior: "smooth",
                            maxWidth: "90vw",
                            margin: "auto",
                        }}
                    >
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className="d-flex flex-row">
                                {chinese.map((chn) => (
                                    <div key={chn.id + '-' + i} className="text-center zoom-card">
                                        <img
                                            src={chn.imgUrl}
                                            alt="chinese"
                                            style={{
                                                width: "200px",
                                                height: "300px",
                                                borderRadius: "10px",
                                                marginRight: "15px",
                                                objectFit: "cover",
                                            }}
                                        />
                                        <p style={{ fontWeight: "500", marginTop: "10px" }}>Biryani</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>

                <div className='d-flex align-items-center justify-content-center'>
                    <h1>Grocery</h1>
                </div>

                <div
                    className="scroll-container d-flex"
                    style={{
                        gap: "20px",
                        overflowX: "auto",
                        overflowY: "hidden",
                        whiteSpace: "nowrap",
                        padding: "20px",
                        scrollBehavior: "smooth",
                        maxWidth: "90vw",
                        margin: "auto",
                    }}
                >
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="d-flex flex-row">
                            {grocery.map((gro) => (
                                <div
                                    key={gro.id + '-' + i}
                                    className="text-center position-relative con"
                                    style={{
                                        width: "450px",
                                        height: "300px",
                                        borderRadius: "10px",
                                        marginRight: "15px",
                                        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${gro.imgUrl})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <p className="position-absolute top-50 start-50 text fs-3 fw-bold translate-middle text-white">
                                        {gro.veg}
                                    </p>
                                </div>

                            ))}
                        </div>
                    ))}
                </div>

                <div id='res'>
                    <h1>Discover best restaurants on Dineout</h1>
                </div>

                <div
                    className="scroll-container d-flex"
                    style={{
                        gap: "30px",
                        overflowX: "auto",
                        overflowY: "hidden",
                        whiteSpace: "nowrap",
                        padding: "20px",
                        scrollBehavior: "smooth",
                        maxWidth: "90vw",
                        margin: "auto",
                    }}
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="d-flex flex-row block">
                            {hotels.map((hot) => (
                                <div
                                    key={hot.id + '-' + i}
                                    className="d-flex justify-content-center align-items-center flex-column text-center card"
                                    style={{
                                        width: "300px",
                                        height: "200px",
                                        borderRadius: "10px",
                                        marginRight: "20px",
                                        padding: "20px",
                                        flexShrink: 0,
                                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                    }}
                                >
                                    <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{hot.name}</h2>
                                    <p style={{ color: "#6c757d" }}>Best Deals & Offers</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>


                {/*get the app */}
                <div>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt=""
                        style={{ width: "100%", marginTop: "40px" }}
                        id='getapp'
                    />
                </div>

                {/* Footer Section */}
                <footer className="footer-card text-center w-100">
                    <p className='' >© 2025 ChatChart — All Rights Reserved</p>
                </footer>


            </div>
        </>
    );

}
export default Front;
