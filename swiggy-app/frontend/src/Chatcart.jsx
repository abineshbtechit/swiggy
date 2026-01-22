import React from 'react'
import './App.css';

function Chatcart() {
    return (
        <>
            <nav class="navbar bg-body-tertiary fixed-top shadow p-3 mb-5 bg-white rounded ms-0">
                <div class="container-fluid ms-5">
                    <a class="navbar-brand">Navbar</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className='chatcart mt-5 pt-5 justify-content-center align-items-center d-flex'>
                <h1>About US</h1>
            </div>
            <div>
                <div className="d-flex flex-column justify-content-center align-items-center text-center mt-1 pt-5 fade-up">
                    <h2>first organization offering an easy-to-use convenience platform, .</h2>
                    <h3>accessible through a unified app</h3>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3 mt-5 mb-5">
                    <img src="https://www.swiggy.com/corporate/wp-content/uploads/2025/10/Scenes-new-icon.png" alt="" />
                    <img src="https://www.swiggy.com/corporate/wp-content/uploads/2025/10/banner-Instamart.png" alt="" />
                </div>

                <div
                    className="d-flex justify-content-center align-items-center mb-5 fade-up"
                    style={{ gap: "150px" }}
                >
                    <img
                        src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/dineout-282x300.webp"
                        alt=""
                    />
                    <img
                        src="https://www.swiggy.com/corporate/wp-content/uploads/2025/10/Scenes-new-icon.png"
                        alt=""
                    />
                </div>


            </div>
            <h3 className="scroll-text text-center mb-5">
                IPO Delivered - November 2024
            </h3>
            <video width="400" autoPlay loop muted className="d-flex mx-auto mb-5 w-50 rounded-3 shadow-lg">
                <source src="https://www.swiggy.com/corporate/wp-content/uploads/2024/11/WhatsApp-Video-2024-11-18-at-15.49.51.mp4" type="video/mp4" />
            </video>


            <div className='chatcart mb-5 pb-5 justify-content-center align-items-center d-flex'>
                <h1>get to know us</h1>
            </div>

            <div className='d-flex  gap-5 mb-5 pb-5 ms-4'>
                <div>
                    <h2>Vision</h2>
                    <h2>Mission</h2>
                    <h2>Value</h2>
                </div>

            </div>

        </>
    )
}

export default Chatcart
