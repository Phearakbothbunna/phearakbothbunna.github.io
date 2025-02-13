import React from "react";

const Projects = () => {
    return (
        // Pojects section
    
        <section id="projects" class="py-5">
            <div class="container text-center">
                <h2 class="fw-bold mb-4">Projects</h2>
                <div class="row">
                    {/* Project 1 */}
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <img src="images/emotionDetect.png" class="card-img-top project-image" alt="Real-Time Emotion Detection"/>
                                <div class="card-body d-flex flex-column">
                                    <h3 class="card-title">Real-Time Emotion Detection</h3>
                                    <p class="card-text">A machine learning application that analyzes live webcam footage to identify user
                                        emotions with over 65% accuracy.</p>
                                    <div class="mt-auto">
                                        <a href="https://github.com/Phearakbothbunna/EmotionDetection"
                                            class="btn btn-primary rounded-pill btn-lg">
                                            <i class="bi bi-github"></i> Explore Project
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <img src="images/livingatlas2.png" class="card-img-top project-image" alt="Real-Time Emotion Detection"/>
                                <div class="card-body d-flex flex-column">
                                    <h3 class="card-title">LivingAtlas Web App</h3>
                                    <p class="card-text">An interactive web app for visualizing geographical data with features like polygon
                                        filtering and secure user logins.</p>
                                    <div class="mt-auto">
                                        <a href="https://github.com/Phearakbothbunna/LivingAtlas" class="btn btn-primary rounded-pill btn-lg">
                                            <i class="bi bi-github"></i> Explore Project
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <img src="images/ytAnalyzer.png" class="card-img-top project-image" alt="Real-Time Emotion Detection"/>
                                <div class="card-body d-flex flex-column">
                                    <h3 class="card-title">YouTube Video Analyzer</h3>
                                    <p class="card-text">A scalable application analyzing 647,000+ YouTube videos using Apache Spark and
                                        MongoDB for faster processing.</p>
                                    <div class="mt-auto">
                                        <a href="https://github.com/Phearakbothbunna/YoutubeAnalyzer"
                                            class="btn btn-primary rounded-pill btn-lg">
                                            <i class="bi bi-github"></i> Explore Project
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        

        <hr className="my-4" style={{width: "80%", margin: "auto" }} />
        </section>
    );
};

export default Projects;