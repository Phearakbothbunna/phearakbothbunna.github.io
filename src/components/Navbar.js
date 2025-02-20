import React, { useState } from "react";

const Navbar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg bg-light sticky-top fs-5 custom-navbar">
            <a className="navbar-brand mx-3" href="#">
                <img src="/images/favicon.ico" alt="Logo" style={{ height: "40px" }} />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mx-3" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item fw-bold">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item fw-bold">
                        <a className="nav-link" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item fw-bold">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item fw-bold">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;