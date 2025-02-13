import React from "react";

const About = () => {
    return (
        <section id="about" class="text-center">
            <div className="container">
                <h2 className="mt-4 mb-4 fw-bold">About Me</h2>
                <img className="profile-pic animate-bounce" src="images/profile.jpeg" alt="Profile"/>

                <div className="mx-auto" style={{maxWidth: "900px"}}>
                    <p className="mt-3 fs-5">
                    I’m <strong>Phearak Both Bunna</strong>, a master’s student in Computer Science with a strong background in
                    <strong>technical support</strong>, <strong>web and app development</strong>, and <strong>data
                        analysis</strong>.
                    With expertise in <strong>Python</strong>, <strong>SQL</strong>, and <strong>React</strong>, I specialize in
                    delivering
                    innovative and scalable solutions to complex technical challenges. My experience spans developing
                    <strong>full-stack applications</strong>, optimizing IT workflows, and leveraging data-driven approaches to
                    solve real-world problems.
                    </p>
                </div>
            </div>

            {/* Social Media Links */}
            <div class="d-flex justify-content-center mt-4">
                <a href="https://www.linkedin.com/in/phearakbothbunna2222" class="mx-5">
                    <i class="bi bi-linkedin fs-2"></i>
                </a>
                <a href="https://github.com/PhearakBothBunna/" class="mx-5 text-dark">
                    <i class="bi bi-github fs-2"></i>
                </a>
                <a href="mailto:phearakboth022@gmail.com" class="mx-5 text-danger">
                    <i class="bi bi-envelope-fill fs-2"></i>
                </a>
            </div>

            {/* Divider */}
            <hr className="my-4" style={{borderTop: "2px solid #ff6600", width: "90%", margin: "auto"}}/>
            <div className="container text-center">
                <div className="row mt-3">
                    {/* Key Highlights */}
                    <div className="col-md-4">
                        <i className="bi bi-gear-wide-connected fs-1 text-primary"></i>
                        <h3 className="mt-2">Innovator</h3>
                        <p>Developed impactful projects like real-time emotion detection and Youtube Video Analyzer, showcasing
                            technical creativity and skills.</p>
                    </div>
                    <div className="col-md-4">
                        <i className="bi bi-star-fill fs-1 text-warning"></i>
                        <h3 className="mt-2">Problem Solver</h3>
                        <p>Delivered technical support to 20,000+ university users, resolving over 3,600 issues with a 4.9/5.0 satisfaction rating.</p>
                    </div>
                    <div className="col-md-4">
                        <i className="bi bi-laptop fs-1 text-success"></i>
                        <h3 className="mt-2">Team Leader</h3>
                        <p>Led teams to deliver high-impact full-stack projects like LivingAtlas and YouTube Video Analyzer, ensuring efficiency, collaboration and great results.</p>
                    </div>
                </div>
            </div>

            <hr className="my-4" style={{borderTop: "2px solid #ff6600", width: "80%", margin: "auto"}}/>

        </section>
    );
};


export default About;