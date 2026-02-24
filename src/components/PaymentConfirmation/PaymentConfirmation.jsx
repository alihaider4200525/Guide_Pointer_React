import { useNavigate } from "react-router-dom";
import './PaymentConfirmation.css';

function PaymentConfirmation() {
    const navigate = useNavigate();
    return (
        <>
            <div className="make-payment">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center mt-4 mb-4">
                            <h3 className="activity-title">
                                <i className="fa-regular fa-thumbs-up me-2"></i> Payment Confirmation
                            </h3>
                        </div>
                    </div>

                    <div className="row justify-content-center align-items-center">
                        <div className="col-4 info">
                            <div className="bg-white shadow p-5 mb-5 rounded confirmation-tab text-center">
                                <div id="Success_Your_trip_is_booked_Am" className="mt-5">
                                    <div className="success-icon">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <span className="fw-bold">Success! Your trip is booked.<br />Amount paid <b>$250.00</b> <br /><br />Thank you for booking with <br />WorldCast Anglers.<br /><br />Check your email for a confirmation.</span>
                                    <div>
                                        <div className="row">
                                            <div className="col-12 confirmation">
                                                <button type="button" id="view-bookings-btn" onClick={() => navigate("/all-details")}>View Bookings <i className="fa-solid fa-chevron-right"></i></button>
                                            </div>
                                        </div>
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

export default PaymentConfirmation