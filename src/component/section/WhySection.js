import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";

const WhySection = () => {
    return (
        <div className="container mb-5">
            <div className="row mb-3">
                <div className="col-md-4">
                    <h2>WHY OPAL DENTAL</h2>
                    <p style={{
                        textAlign:"justify"
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="col-md-8">
                    <div style={{
                        width:"100%",
                        height: "400px",
                        overflow:"hidden",
                        position:"relative"
                    }}>
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit:"cover"
                            }} 
                            src={img1} alt="img" />
                        <h3
                            style={{
                                position:"absolute",
                                bottom: "10px",
                                left: "20px",
                                color: "#FFF"
                            }}
                            >Professional Doctor</h3>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4">
                    <div style={{
                        position:"relative",
                        width:"100%",
                        height: "300px",
                        overflow:"hidden"
                    }}>
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit:"cover"
                            }} 
                            src={img1} alt="img" />
                        <h3
                            style={{
                                position:"absolute",
                                bottom: "10px",
                                left: "20px",
                                color: "#FFF"
                            }}
                            >Best Price <br></br> and Promos</h3>
                    </div>
                </div>
                <div className="col-md-8">
                    <div style={{
                        width:"100%",
                        height: "300px",
                        overflow:"hidden",
                        position:"relative"
                    }}>
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit:"cover"
                            }} 
                            src={img2} alt="img" />
                        <h3
                            style={{
                                position:"absolute",
                                bottom: "10px",
                                left:"20px",
                                color:"#FFF"
                            }}
                        >Best Solution for <br></br> Dental Treatment</h3>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-8">
                    <div style={{
                        width:"100%",
                        height: "300px",
                        overflow:"hidden",
                        position:"relative"
                    }}>
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit:"cover"
                            }} 
                            src={img1} alt="img" />

                        <h3
                            style={{
                                position:"absolute",
                                bottom: "10px",
                                left:"20px",
                                color:"#FFF"
                            }}
                        >Modern <br></br> Equipment</h3>
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{
                        width:"100%",
                        height: "300px",
                        overflow:"hidden",
                        position:"relative"
                    }}>
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit:"cover"
                            }} 
                            src={img2} alt="img" />
                            <h3
                                style={{
                                    position:"absolute",
                                    bottom: "10px",
                                    left:"20px",
                                    color:"#FFF"
                                }}
                            >Cozy <br></br> Clinics</h3>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex align-items-center justify-content-between p-5" style={{backgroundColor:"#99f0ff"}}>
                        <h2 className="mb-0 mt-0">How can we help you ?</h2>
                        <select className="custom-select" style={{width:"50%"}}>
                            <option>Select Treatment</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhySection;