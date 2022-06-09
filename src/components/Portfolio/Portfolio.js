import React from 'react';

const Portfolio = () => {
    return (
        <section className=" site-section " id="section-portfolio">
            <div className="container ">
                <div className="row">
                    <div className="section-heading text-center col-md-12">
                        <h2>Featured <strong style={{ color: '#BCCA68' }}>Portfolio</strong></h2>
                    </div>
                </div>
                <div className="container d-flex justify-content-center">
                    <div className="card-deck third-section ">
                        <div className="row port">
                            <div className="col-md-4 col-sm-6 mt-3">
                                <div className="card">
                                    <img src="images/creative agency.PNG" className="card-img-top" alt="image" />
                                    <div className="card-body ">
                                        <h5 className="card-title "><b>Bhuiyan Tools</b></h5>
                                        <p style={{ color: 'black' }} className="card-text mt-4"><b>A full-stack manufacturer app using React, Node.js, Mongodb, Daisiui, JWT, Heroku</b></p>
                                        <div className="card-footer d-flex justify-content-center  mt-5 pt-4">
                                            <a target="_blank" href="https://github.com/hasansharif819/bhuiyan_tools_clients"><button type="button" className="btn btn-outline-primary mx-2 py-2 btn-port"><b><span className="icon-github2" />
                              Client</b></button></a>
                                            <a target="_blank" href="https://bhuiyan-tools.web.app/"><button type="button" className="btn btn-outline-warning mx-2 py-2 btn-port"><b>Live</b></button></a>
                              <a target="_blank" href="https://github.com/hasansharif819/bhuiyan_tools_server"><button type="button" className="btn btn-outline-primary mx-2 py-2 btn-port"><b><span className="icon-github2" />
                              Server</b></button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mt-3">
                                <div className="card">
                                    <img src="images/student enrollment.PNG" className="card-img-top" alt="image" />
                                    <div className="card-body ">
                                        <h5 className="card-title"><b>Smart Zone</b></h5>
                                        <p style={{ color: 'black' }} className="card-text "><b>A full-stack E-commerce website using React, Node.js, Mongodb,
                        Bootstrap, firebase, Heroku</b></p>
                        <div className="card-footer d-flex justify-content-center  mt-5 pt-4">
                                            <a target="_blank" href="https://github.com/hasansharif819/warehouse_management_system_client"><button type="button" className="btn btn-outline-primary mx-2 py-2 btn-port"><b><span className="icon-github2" />
                              Client</b></button></a>
                                            <a target="_blank" href="https://smart-zone-819.web.app/"><button type="button" className="btn btn-outline-warning mx-2 py-2 btn-port"><b>Live</b></button></a>
                              <a target="_blank" href="https://github.com/hasansharif819/warehouse_management_system_server"><button type="button" className="btn btn-outline-primary mx-2 py-2 btn-port"><b><span className="icon-github2" />
                              Server</b></button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mt-3">
                                <div className="card">
                                    <img src="images/student enrollment.PNG" className="card-img-top" alt="image" />
                                    <div className="card-body ">
                                        <h5 className="card-title"><b>Smart Zone</b></h5>
                                        <p style={{ color: 'black' }} className="card-text "><b>A full-stack E-commerce website using React, Node.js, Mongodb,
                        Bootstrap, firebase, Heroku</b></p>
                        <div className="card-footer d-flex justify-content-center  mt-5 pt-4">
                                            <a target="_blank" href="https://github.com/hasansharif819/warehouse_management_system_client"><button type="button" className="btn btn-outline-primary mx-2 py-2 btn-port"><b><span className="icon-github2" />
                              Client</b></button></a>
                                            <a target="_blank" href="https://smart-zone-819.web.app/"><button type="button" className="btn btn-outline-warning mx-2 py-2 btn-port"><b>Live</b></button></a>
                              <a target="_blank" href="https://github.com/hasansharif819/warehouse_management_system_server"><button type="button" className="btn btn-outline-primary mx-2 py-2 btn-port"><b><span className="icon-github2" />
                              Server</b></button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mt-3">
                                <div className="card">
                                    <img src="images/creative agency.PNG" className="card-img-top" alt="image" />
                                    <div className="card-body">
                                        <h5 className="card-title"><b>Tanjum's Shop</b></h5>
                                        <p style={{ color: 'black' }} className="card-text mt-4"><b>A front-end app using React, Bootstrap,
                                        Netlify</b></p>
                                        <div className="card-footer d-flex justify-content-center  mt-5 pt-4">
                                            <a target="_blank" href="https://github.com/hasansharif819/tanjums-shop"><button type="button" className="btn btn-outline-primary mx-2 py-2 btn-port"><b><span className="icon-github2" />
                              Client</b></button></a>
                                            <a target="_blank" href="https://tanjums-shop.netlify.app/"><button type="button" className="btn btn-outline-warning mx-2 py-2 btn-port"><b>Live</b></button></a>
                              
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div></section>
    );
};

export default Portfolio;