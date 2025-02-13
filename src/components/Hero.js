import React from "react";

const Hero = () => {
    return (
        <section id="hero" className="bg-dark text-white text-center py-3">
            <h1 className="display-3">Phearak Both Bunna</h1>
            <p className="lead">Technical Support Specialist | Web Developer | Data Analyst</p>
            <a
                href="/PhearakBoth_Bunna_Resume.pdf"
                className="btn btn-outline-light btn-lg mt-4 resume-download"
                target="_blank"
            >
                View Resume <i className="bi bi-box-arrow-up-right" style={{ fontSize: "0.9em" }}></i>
            </a>
        </section>
    );
};

export default Hero;