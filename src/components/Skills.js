import React from "react";

const Skills = () => {
    return (

        <section id="skills">
            <div className="container p-5">
                <h2 className="text-center mb-4">Skills</h2>
                <div className="row gy-4 text-center">
                    {/* <!-- Programming Languages --> */}
                    <div className="col-md-6">
                        <div className="container custom-container border border-dark p-4 h-100">
                            <h3 className="fw-bold">Programming Languages</h3>
                            <ul className="list-unstyled fw-bold">
                                <li><i className="bi bi-code-slash"></i> Python</li>
                                <li><i className="bi bi-database"></i> SQL</li>
                                <li><i className="bi bi-braces"></i> JavaScript</li>
                                <li><i className="bi bi-filetype-html"></i> HTML</li>
                                <li><i className="bi bi-filetype-css"></i> CSS</li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Technical Skills --> */}
                    <div className="col-md-6 ">
                        <div className="container custom-container border border-dark p-4 h-100">

                            <h3 className="fw-bold">Technical skills</h3>
                            <ul className="list-unstyled fw-bold">
                                <li> <i className="bi bi-tools"></i> Technical Support & Troubleshooting</li>
                                <li><i className="bi bi-pc-display"></i> Helpdesk Operations</li>
                                <li><i className="bi bi-graph-up-arrow"></i> Data Analytics</li>
                                <li><i className="bi bi-globe"></i> Web/Mobile App Development</li>
                            </ul>

                        </div>
                    </div>

                    {/* <!-- Frameworks and Tools --> */}
                    <div className="col-md-6 mb-2">
                        <div className="container custom-container border border-dark p-4 h-100">

                            <h3 className="fw-bold">Tools & Technologies</h3>
                            <ul className="list-unstyled fw-bold">
                                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React"
                                    width="30" /> React</li>
                                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure"
                                    width="30" /> Azure</li>
                                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Jira"
                                    width="30" /> Jira</li>
                            </ul>

                        </div>
                    </div>

                    {/* <!-- Certifications --> */}
                    <div className="col-md-6 mb-2">
                        <div className="container custom-container border border-dark p-4 h-100">
                            <h3 className="fw-bold">Certifications</h3>
                            <ul className="list-unstyled fw-bold">
                                <li><i className="bi bi-patch-check-fill fs-3"></i> Google Cloud Essentials</li>
                                <li><i className="bi  bi-patch-check fs-3"></i> CompTIA A+ (In-progress)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;