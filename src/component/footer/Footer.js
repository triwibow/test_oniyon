const Footer = () => {
    return (
        <>
            <div className="container-fluid p-4" style={{backgroundColor:"#bfecf5"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h6 className="fw-bold">Lorem Ipsum</h6>
                            <p style={{fontSize:"12px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                            <p style={{fontSize:"12px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-4" style={{backgroundColor:"#428af5"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className="text-white">More Pages</h4>
                            <ul className="footer-link">
                                <li>Dentist Schedule</li>
                                <li>About Us</li>
                                <li>Promo</li>
                                <li>Our Clinic</li>
                                <li>Career</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="text-white" style={{visibility:"hidden"}}>More Pages</h4>
                            <ul className="footer-link">
                                <li>Testimonial</li>
                                <li>Blog</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="text-white">DENTAL TREATMENTS</h4>
                            <ul className="footer-link">
                                <li>Orthodontics</li>
                                <li>Invisalign</li>
                                <li>Implant</li>
                                <li>Kids Destrinty</li>
                                <li>Prosthodontics</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4 className="text-white">OPENING</h4>
                            <ul className="footer-link">
                                <li>Monday to Friday</li>
                                <li>Saturday : Close</li>
                            </ul>
                            <ul className="footer-link">
                                <li>Hari Minggu sampai Jumat</li>
                                <li>Sabtu : Tutup</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <hr style={{color:"rgba(255,255,255,0.5)"}}></hr>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h6 className="text-white mt-0 mb-0">@ Opal Dental 2020</h6>
                        </div>
                        <div className="col-md-6">
                            <h6 style={{textAlign:"right"}} className="text-white mt-0 mb-0">Developed By Onion</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;