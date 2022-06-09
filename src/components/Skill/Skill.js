import React from 'react';

const Skill = () => {
    return (
        <section className="site-section" id="section-skill">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <div className="section-heading text-center">
                            <h2>My <strong style={{ color: '#BCCA68' }}>Skills</strong></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="card">
                            <a href="#"><img src="images/reactjs.png" alt="Image placeholder" className="img-fluid" /></a>
                            <div className="blog-entry-text">
                                <h3 style={{ color: '#BAC964' }}>Front-end Web Development</h3>
                                <ul className=''>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>jQuery</li>
                                    <li>Bootstrap</li>
                                    <li>Tailwind CSS</li>
                                    <li>Daisiui</li>
                                    <li>JavaScript ES6</li>
                                    <li>Firebase</li>
                                    <li>Material UI</li>
                                    <li>React</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="card">
                            <a href="#"><img src="images/nodejs.png" alt="Image placeholder" className="img-fluid" /></a>
                            <div className="blog-entry-text">
                                <h3 style={{ color: '#BAC964' }}>Back-end Web Development</h3>
                                <ul>
                                    <li>Node JS</li>
                                    <li>Express JS</li>
                                    <li>Mongodb</li>
                                    <li>JWT token</li>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="card">
                            <a href="#"><img src="images/office.jpg" alt="Image placeholder" className="img-fluid" /></a>
                            <div className="blog-entry-text">
                                <h3 style={{ color: '#BAC964' }}>Basic Microsoft Office Work</h3>
                                <ul>
                                    <li>Microsoft Word</li>
                                    <li>Microsoft Exel</li>
                                    <li>Microsoft PowerPoint</li>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;