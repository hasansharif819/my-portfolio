import React from 'react';

const About = () => {
    return (
        <section className="site-section" id="section-about">
            <div className="container">
                <div className="row mb-5 align-items-center">
                    <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                        <img src="images/sharif.jpg" alt="Image placeholder" className="img-fluid" />
                    </div>
                    <div className="col-lg-5 pl-lg-5">
                        <div className="section-heading">
                            <h2>About <strong style={{ color: '#BCCA68' }}>Me</strong></h2>
                        </div>
                        <p className="lead">I'm <strong> Sharif Hasan</strong></p>
                        <p className="mb-5">
                            To be able to work for an encouraging and
                            stable company that will assist me in developing,
                            improving, and obtaining the necessary skills in
                            order to become the best developer possible.
              </p>
                        <p>
                            <a href="#section-contact" className="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;