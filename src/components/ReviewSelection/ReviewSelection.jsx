import ActivityRaya from '../../assets/images/activity-raya.jpg';
import './ReviewSelection.css';

function ReviewSelection() {
    return(
        <>
            <div className="review-activity">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center mt-4 mb-4">
                            <h3 className="activity-title">
                                <i className="fa fa-edit"></i> Review Selection
                            </h3>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-5 left-information-section guest-info bg-white shadow p-5 mb-5 rounded">
                            <div className="activity-photo-tab">
                                <img src={ActivityRaya} alt='Activity Raya' />
                            </div>
                            <div className='assignments-information'>
                                <div className="summary-box guest-page p-4">
                                    <div className="summary-date float-start">
                                        <div className="float-start river-info">
                                        DHA Phase-6 | Rayaa DHA 
                                        </div>
                                        <span className="float-end selected-date">
                                        02-11-2026
                                        </span>
                                    </div>
                                    <div className="people info float-start">
                                        <div className="float-start selected-people col-9">
                                        <i className="fa-regular fa-user"></i>
                                        <span id="Text">
                                            2
                                            <span> People | </span>
                                            Full Day | A.J. Sanders
                                        </span>
                                        </div>
                                        <span className="selected-price float-end col-2">$0.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewSelection