import React from "react";
import "../assets/css/Aboutus.css"
import Yassen from "../assets/images/yassen.jpeg"
import Othman from "../assets/images/othman.jpeg"
import Fo2sh from "../assets/images/FO2SH.jpeg"
import Zeyad from "../assets/images/Zeyad.jpeg"
import Basmala from "../assets/images/Basmala.png"


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
                            <b>we are here for your happy</b>
                            
                            <br />
                            <span className="text-secondary"><span className="text-danger">!</span> The linkedin link in the Photo <span className="text-danger">!</span></span>
                        </p>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">

                            <a href="https://eg.linkedin.com/in/ahmed-ali-othman-5b503324a">
                                <img className="team-img" src={Othman} alt="" />
                            </a>

                            <h3>Ahmed</h3>

                            <div className="team-info">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nesciunt iure esse culpa suscipit minus earum neque, veritatis doloribus rem unde ex praesentium architecto ad vel vitae aut magni facere!</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">

                            <a href="https://www.linkedin.com/in/yassenmohamedrashad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                <img className="team-img" src={Yassen} alt="" />
                            </a>

                            <h3>Yassen</h3>

                            <div className="team-info">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nesciunt iure esse culpa suscipit minus earum neque, veritatis doloribus rem unde ex praesentium architecto ad vel vitae aut magni facere!</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">

                            <a href="https://www.linkedin.com/in/yousef-ahmed-fouad-abdullatif-95b7ba288/">
                                <img className="team-img" src={Fo2sh} alt="" />
                            </a>

                            <h3>Yousef</h3>

                            <div className="team-info">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nesciunt iure esse culpa suscipit minus earum neque, veritatis doloribus rem unde ex praesentium architecto ad vel vitae aut magni facere!</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">

                            <a href="http://www.linkedin.com/in/zeyad-hyman-227746297">
                                <img className="team-img" src={Zeyad} alt="" />
                            </a>

                            <h3>Zeyad</h3>

                            <div className="team-info">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nesciunt iure esse culpa suscipit minus earum neque, veritatis doloribus rem unde ex praesentium architecto ad vel vitae aut magni facere!</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="team-item">

                            <a href="https://www.linkedin.com/in/yassenmohamedrashad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                                <img className="team-img" src={Basmala} alt="" />
                            </a>

                            <h3>Basmala</h3>

                            <div className="team-info">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nesciunt iure esse culpa suscipit minus earum neque, veritatis doloribus rem unde ex praesentium architecto ad vel vitae aut magni facere!</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
}

export default Aboutus;