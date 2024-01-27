import React from "react";
import "../assets/css/Aboutus.css";
import Yassen from "../assets/images/yassen.jpeg";
import Othman from "../assets/images/othman.jpeg";
import Fo2sh from "../assets/images/FO2SH.jpeg";
import Zeyad from "../assets/images/Zeyad.jpeg";
import Basmala from "../assets/images/Basmala.jpg";
import { Link } from "react-router-dom";

function Aboutus() {
    return (
        <section className="section-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="section-title">
                            <b>About US </b>
                        </h2>

                        <p className="section-subtitle">
                            <b className="text-capitalize">
                                we are here for your happiness
                            </b>
                        </p>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <Link
                            className="a"
                            target="_blank"
                            to="https://eg.linkedin.com/in/ahmed-ali-othman-5b503324a">
                            <div className="team-item ho">
                                <img className="team-img" src={Othman} />

                                <h3>Othman</h3>
                                <br />

                                <div className="team-info">
                                    <p className="text-start">
                                        backend developer with foundation in PHP
                                        (Laravel), Node (Express), HTML, CSS,
                                        JavaScript, Python, data structure,
                                        algorithms, React (Jōtai), MySQL,
                                        Bootstrap, Git & Github. Looking to
                                        apply my knowledge in a challenging
                                        environment.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <Link
                            className="a"
                            target="_blank"
                            to="https://www.linkedin.com/in/yassenmohamedrashad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <div className="team-item ho">
                                <img className="team-img" src={Yassen} />

                                <h3>Yassen</h3>
                                <h6>Team Leader</h6>

                                <div className="team-info">
                                    <p className="text-start">
                                        a student at We School for Applied
                                        Technology. My major is web development,
                                        and I love to share my experience with
                                        others.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <Link
                            className="a"
                            target="_blank"
                            to="https://www.linkedin.com/in/yousef-ahmed-fouad-abdullatif-95b7ba288/">
                            <div className="team-item ho">
                                <img className="team-img" src={Fo2sh} />

                                <h3>Yousef</h3>
                                <br />

                                <div className="team-info">
                                    <p className="text-start">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Quia nesciunt iure
                                        esse culpa suscipit minus earum neque,
                                        veritatis doloribus rem unde ex
                                        praesentium architecto ad vel vitae aut
                                        magni facere!
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2"></div>

                    <div className="col-sm-6 col-md-4">
                        <Link
                            className="a"
                            target="_blank"
                            to="http://www.linkedin.com/in/zeyad-hyman-227746297">
                            <div className="team-item ho">
                                <img className="team-img" src={Zeyad} />

                                <h3>Zeyad</h3>
                                <br />

                                <div className="team-info">
                                    <p className="text-start">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Quia nesciunt iure
                                        esse culpa suscipit minus earum neque,
                                        veritatis doloribus rem unde ex
                                        praesentium architecto ad vel vitae aut
                                        magni facere!
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <Link
                            className="a"
                            target="_blank"
                            to="https://www.linkedin.com/in/basmala-magdy-993869230">
                            <div className="team-item ho">
                                <img className="team-img" src={Basmala} />

                                <h3>Basmala</h3>
                                <br />

                                <div className="team-info">
                                    <p className="text-start">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Quia nesciunt iure
                                        esse culpa suscipit minus earum neque,
                                        veritatis doloribus rem unde ex
                                        praesentium architecto ad vel vitae aut
                                        magni facere!
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aboutus;
