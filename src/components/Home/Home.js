import React from 'react';

const Home = () => {
    return (
        <div>
            <section className="site-hero img-fluid" style={{ backgroundImage: 'url(images/sharif.jpg)' }} id="section-home" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row intro-text align-items-center justify-content-center">
                        <div className="col-md-10 text-center pt-5">
                            <h1 className="site-heading site-animate">
                                Hello, I'm <strong className="d-block">Sharif Hasan</strong>
                            </h1>
                            <strong className="d-block text-white text-uppercase letter-spacing">and I am a Jr. Web Developer</strong>
                            <br />
                            <a className="btn btn-primary px-4 py-2 btn-sm smoothscroll" target="_blank" href="https://drive.google.com/file/d/1S6ghGVVT67ZMNbqDfJewa2KsSay8SeAM/view?usp=sharing">My
                  Resume</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;