import React from "react";

const Contact = () => {
    return (
        // Contact section
        <section id="contact">
            <div className="container d-flex justify-content-center align-items-center" style={{height: "300px"}}>
                <div className="text-center p-5">
                    <h2 className="fw-bold mb-3">Contact Me</h2>
                    <div className="border p-3">
                        {/* flex column on small screensize and flex row starting at medium screen size */}
                        <div className="d-flex flex-column flex-md-row gap-3">
                            <a href="mailto:phearakboth022@gmail.com" className="fw-bold text-decoration-none my-email">
                                <i className="bi bi-envelope"></i> phearakboth022@gmail.com
                            </a>
                            <a href="https://www.linkedin.com/in/phearakbothbunna2222" className="fw-bold text-decoration-none my-linkedin">
                                <i className="bi bi-linkedin my-linkedin"></i> Phearak Both Bunna
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;