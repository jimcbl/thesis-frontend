import React from 'react';

const AboutUs = () => {
    return (
        <section className="hero is-fullheight-with-navbar" id="about-us">
            <div className="hero-body">
                <div className="container">
                    <div className="profiles">
                        <div className="profile">
                            <div className="avatar">
                                <img className="image" src="./ava_thu.jpg" alt="" />
                            </div>
                            <p className="name">Thu Tran</p>
                            <p className="content">
                                My dream since childhood is to change the world. Now, as a wannabe
                                adult, I'm trying to learn and improve myself as much as I can.
                                Because baby steps count, right?
                            </p>
                        </div>
                        <div className="profile">
                            <div className="avatar">
                                <img className="image" src="./ava_jim.jpg" alt="" />
                            </div>
                            <p className="name">Thinh Tran</p>
                            <p className="content">
                                A fourth year student majoring in Computer Science. Logical but
                                creative thinker. Have the ability to adapt, adjust, and advance in
                                various environments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
