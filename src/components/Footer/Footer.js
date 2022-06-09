import React from 'react';

const Footer = () => {
    return (
        <div>
            <section className="site-section" id="section-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="section-heading text-center">
                                <h2>Get <strong style={{ color: '#BCCA68' }}>In Touch</strong></h2>
                            </div>
                        </div>
                        <div className="col-md-12 pl-md-12 d-flex justify-content-center">
                            {/* <ul className="site-contact-details">
                                <li>
                                    <span className="text-uppercase">Email </span>
                    hs.sharif819@gmail.com
                  </li>
                                <li>
                                    <span className="text-uppercase">Phone </span>
                    +880 164 091 1511
                  </li>
                                <li>
                                    <span className="text-uppercase">Address </span>
                    West Dhanmondi<br />
                    Dhaka<br />
                                </li>
                            </ul> */}
                            <form action="https://formsubmit.co/hs.sharif819@gmail.com" method='POST'>
                                <input type="text" name='name' placeholder='Your Name' required/> <br/> <br/>
                                <input type="email" name='email' placeholder='Your email' required/> <br/> <br/>
                                <textarea></textarea> <br/> <br/>
                                <button type='submit'>Send</button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
            <footer className="site-footer">
                <div className="container">
                    <div className="row mb-5">
                        <p className="col-12 text-center">
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © 2022 All rights reserved | Sharif Hasan
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </p>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-12 text-center">
                            <p>
                                <a target="_blank" href="https://www.facebook.com/profile.php?id=100012993934707" className="social-item"><span className="icon-facebook2" /></a>
                                <a target="_blank" href="https://github.com/hasansharif819" className="social-item"><span className="icon-github2" /></a>
                                <a target="_blank" href="https://www.linkedin.com/in/sharif-hasan-073a58218/" className="social-item"><span className="icon-linkedin2" /></a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;