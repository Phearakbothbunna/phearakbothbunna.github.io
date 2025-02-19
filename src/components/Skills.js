import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./animation";

const Skills = () => {
    return (
        <motion.section
            id="skills"
            initial="hidden"
            whileInView="visible"
            // animation starts when 20% are in the viewport
            viewport={{ amount: 0.2 }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.1
                    }
                }
            }}>

            <div className="container p-5">
                <motion.h2 className="text-center mb-4" variants={fadeIn}>
                    Skills
                </motion.h2>
                <motion.div className="row gy-4 text-center" variants={fadeIn}>
                    {/* Programming Languages */}
                    <div className="col-md-6">
                        <motion.div className="container custom-container border border-dark p-4 h-100" variants={fadeIn}>
                            <h3 className="fw-bold">Programming Languages</h3>
                            <motion.ul variants={fadeIn} className="list-unstyled fw-bold">
                                <motion.li><i className="bi bi-code-slash"></i> Python</motion.li>
                                <motion.li><i className="bi bi-database"></i> SQL</motion.li>
                                <motion.li><i className="bi bi-braces"></i> JavaScript</motion.li>
                                <motion.li><i className="bi bi-filetype-html"></i> HTML</motion.li>
                                <motion.li><i className="bi bi-filetype-css"></i> CSS</motion.li>
                            </motion.ul>
                        </motion.div>
                    </div>

                    {/* Technical Skills */}
                    <div className="col-md-6">
                        <motion.div className="container custom-container border border-dark p-4 h-100" variants={fadeIn}>
                            <h3 className="fw-bold">Technical Skills</h3>
                            <motion.ul variants={fadeIn} className="list-unstyled fw-bold">
                                <motion.li><i className="bi bi-tools"></i> Technical Support & Troubleshooting</motion.li>
                                <motion.li><i className="bi bi-pc-display"></i> Helpdesk Operations</motion.li>
                                <motion.li><i className="bi bi-graph-up-arrow"></i> Data Analytics</motion.li>
                                <motion.li><i className="bi bi-globe"></i> Web/Mobile App Development</motion.li>
                            </motion.ul>
                        </motion.div>
                    </div>

                    {/* Frameworks and Tools */}
                    <div className="col-md-6 mb-2">
                        <motion.div className="container custom-container border border-dark p-4 h-100" variants={fadeIn}>
                            <h3 className="fw-bold">Tools & Technologies</h3>
                            <motion.ul variants={fadeIn} className="list-unstyled fw-bold">
                                <motion.li>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="30" /> React
                                </motion.li>
                                <motion.li>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" width="30" /> Azure
                                </motion.li>
                                <motion.li>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="Jira" width="30" /> Jira
                                </motion.li>
                            </motion.ul>
                        </motion.div>
                    </div>

                    {/* Certifications */}
                    <div className="col-md-6 mb-2">
                        <motion.div className="container custom-container border border-dark p-4 h-100" variants={fadeIn}>
                            <h3 className="fw-bold">Certifications</h3>
                            <motion.ul variants={fadeIn} className="list-unstyled fw-bold">
                                <motion.li><i className="bi bi-patch-check-fill fs-3"></i> Google Cloud Essentials</motion.li>
                                <motion.li><i className="bi bi-patch-check fs-3"></i> CompTIA A+ (In-progress)</motion.li>
                            </motion.ul>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Skills;
