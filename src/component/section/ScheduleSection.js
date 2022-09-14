const ScheduleSection = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-schedule shadow">
                        <h2 className="section-title mb-4">Find our dentist schedule according to your need</h2>
                        <hr></hr>
                        <div className="row">
                            <div className="col-md-3 border-right">
                                <span className="text-primary d-block mb-2">Choose Clinic</span>
                                <select className="custom-select">
                                    <option>Clinic 1</option>
                                    <option>Clinic 2</option>
                                    <option>Clinic 3</option>
                                </select>
                            </div>
                            <div className="col-md-9 d-flex align-items-center justify-content-between">
                                <div>
                                    <span className="text-primary d-block mb-2">Select date of visit</span>
                                    <input type="date" className="form-control"/>
                                </div>
                                <button className="btn btn-warning text-white">Find Schedule</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScheduleSection;