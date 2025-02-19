import React from "react";
import { motion } from "framer-motion"

const projects = [
    {
        image: "images/emotionDetect.png",
        title: "Real-Time Emotion Detection",
        text: "A machine learning application that analyzes live webcam footage to identify user emotions with over 65% accuracy.",
        link: "https://github.com/Phearakbothbunna/EmotionDetection"
    },
    {
        image: "images/livingatlas2.png",
        title: "LivingAtlas Web App",
        text: "An interactive web app for visualizing geographical data with features like polygon filtering and secure user logins.",
        link: "https://github.com/Phearakbothbunna/LivingAtlas"
    },
    {
        image: "images/ytAnalyzer.png",
        title: "YouTube Video Analyzer",
        text: "A scalable application analyzing 647,000+ YouTube videos using Apache Spark and MongoDB for faster processing.",
        link: "https://github.com/Phearakbothbunna/YoutubeAnalyzer"
    }
];

const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: index * 0.3,
            duration: 0.6,
            ease: "easeOut"
        }
    })
};

const Projects = () => (
    <section id="projects" className="py-5">
        <div className="container text-center">
            <h2 className="fw-bold mb-4">Projects</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="col-md-4 mb-4"
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.2 }}
                        variants={cardVariants}
                    >
                        <div className="card h-100">
                            <img src={project.image} className="card-img-top project-image" alt={project.title} />
                            <div className="card-body d-flex flex-column">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-text">{project.text}</p>
                                <div className="mt-auto">
                                    <a href={project.link} className="btn btn-primary rounded-pill btn-lg">
                                        <i className="bi bi-github"></i> Explore Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
        <hr className="my-4" style={{ width: "80%", margin: "auto" }} />
    </section>
);

export default Projects;