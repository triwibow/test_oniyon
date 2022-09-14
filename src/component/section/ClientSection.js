import profile1 from "../../assets/img/profile1.jpg";

const ClientSection = () => {
    return (
        <div className="container mb-5">
            <div className="row mb-5">
                <div className="col-md-12">
                    <h1 className="text-center">WHAT OUR CLIENT SAY</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card p-3">
                        <p className="mb-3 mt-0">Lorem Ipsum is simply dummy text of the printing and typesetting into electronic typesetting, remaining essentially unchanged.</p>
                        <div className="client-profile d-flex">
                            <img
                                className="me-4 d-block"
                                style={{
                                    width:"80px",
                                    height:"80px",
                                    borderRadius:"50%",
                                    objectFit:"cover"
                                }} 
                                src={profile1} alt="img" />
                            <div>
                                <h4 className="text-primary">Gabriel Batistuta</h4>
                                <span className="text-warning">Pemain Sepak Bola</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-3">
                        <p className="mb-3 mt-0">Lorem Ipsum is simply dummy text of the printing and typesetting into electronic typesetting, remaining essentially unchanged.</p>
                        <div className="client-profile d-flex">
                            <img
                                className="me-4 d-block"
                                style={{
                                    width:"80px",
                                    height:"80px",
                                    borderRadius:"50%",
                                    objectFit:"cover"
                                }} 
                                src={profile1} alt="img" />
                            <div>
                                <h4 className="text-primary">Gabriel Batistuta</h4>
                                <span className="text-warning">Pemain Sepak Bola</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-3">
                        <p className="mb-3 mt-0">Lorem Ipsum is simply dummy text of the printing and typesetting into electronic typesetting, remaining essentially unchanged.</p>
                        <div className="client-profile d-flex">
                            <img
                                className="me-4 d-block"
                                style={{
                                    width:"80px",
                                    height:"80px",
                                    borderRadius:"50%",
                                    objectFit:"cover"
                                }} 
                                src={profile1} alt="img" />
                            <div>
                                <h4 className="text-primary">Gabriel Batistuta</h4>
                                <span className="text-warning">Pemain Sepak Bola</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-3">
                        <p className="mb-3 mt-0">Lorem Ipsum is simply dummy text of the printing and typesetting into electronic typesetting, remaining essentially unchanged.</p>
                        <div className="client-profile d-flex">
                            <img
                                className="me-4 d-block"
                                style={{
                                    width:"80px",
                                    height:"80px",
                                    borderRadius:"50%",
                                    objectFit:"cover"
                                }} 
                                src={profile1} alt="img" />
                            <div>
                                <h4 className="text-primary">Gabriel Batistuta</h4>
                                <span className="text-warning">Pemain Sepak Bola</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientSection;