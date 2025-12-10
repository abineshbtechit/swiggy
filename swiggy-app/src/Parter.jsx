import React from 'react'
import "./App.css"
import { useState, useEffect } from 'react';

function Parter() {
    const texts = ["Welcome!", "Hello World!", "React Rocks!", "Let's Code!"];
    const [index, setIndex] = useState(0);
    const [howuse, setHowuse] = useState([]);


    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/howuse")
            .then((res) => res.json())
            .then((data) => setHowuse(data))
    }, []);

    return (
        <div>
            <div className="position-relative text-center">
                <img
                    src="https://vendor-media-assets.swiggy.com/static-assets/images/PartnerBG.png"
                    alt=""
                    className="w-100"
                    style={{ height: "400px", objectFit: "cover" }}
                />
                <h2
                    className="position-absolute top-50  translate-middle fw-bold text-white"
                    style={{
                        fontSize: "2rem"
                        , left: "20%"
                    }}
                >
                    {texts[index]}
                </h2>

                <form
                    className="position-absolute top-50 start-50 translate-middle bg-light p-4 rounded shadow"
                    style={{ width: "500px", opacity: "0.9", height: "300px" }}
                >
                    <span className="fw-bold d-block mb-2">Subscribe to our newsletter</span>
                    <p className="small text-muted mb-3">
                        Get updates, offers, and more.
                    </p>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="form-control mb-2"
                    />
                    <button type="submit" className="btn btn-primary w-100">
                        Subscribe
                    </button>
                </form>
            </div>

            <div>
                <div className='position-relative'
                    style={{ left: "40px" }}
                >
                    just 3 easy steps
                    Get your restaurant delivery-ready in 24hrs!
                </div>
                <div style={{ display: "flex", gap: "70px" }} className='mt-4 '>
                    {
                        howuse.map((item) => (
                            <div key={item.id} style={{ width: "300px", height: "280px", border: "2px solid black", backgroundColor: "#766966" }} className='ms-4'>
                                <h3>{item.step}</h3>
                                <p>{item.cont}</p>
                            </div>
                        ))
                    }
                </div>


            </div>


        </div>
    )
}

export default Parter
