import { useNavigate } from "react-router-dom";
import ActivityRaya from '../../assets/images/activity-raya.jpg';
import './MakePayment.css'

function MakePayment() {
    const navigate = useNavigate();
    return (
        <>
            <div className="make-payment">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center mt-4 mb-4">
                            <h3 className="activity-title">
                                <i className="fa fa-credit-card"></i> Enter Payment Information
                            </h3>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-4 bg-white shadow p-5 mb-5 rounded assignment-payment-box">
                            <div className="row mt-3">
                                <div className="col-12">
                                    <div id="Assignments_Information">
                                        <div id="Assignment_Activity_Row">
                                            <div id="Assignment_Activity">
                                                <div className="summary-photo-tab">
                                                    <div className="summary-photo">
                                                        <img src={ActivityRaya} alt='Activity Raya' />
                                                    </div>
                                                    <div className="photo-caption mt-2">
                                                        Canada | Tronto
                                                        <div className="new-cost-div">
                                                            <span className="Date">02-21-2026 |</span>
                                                            <span className="section-cost">$0.00</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="people info float-start">
                                                    <div className="float-start selected-people">
                                                        <i className="fa fa-user"></i>
                                                        <span id="Text">
                                                            3
                                                            <span> People | </span>
                                                            Full Day | Bill Happersett
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="total-price mt-4">
                                    <h4>Total Price: <span>$0.00</span></h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 bg-white shadow p-5 mb-5 rounded payment-box two-forms">
                            <div className="guest-information-form">
                                <h3 className="mb-4">Enter Guest Information</h3>
                                <div className="row guest_name">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label float-start">Name</label>
                                        <input className="form-control" placeholder="First Name" id="client_first_name" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input className="form-control" placeholder="Last Name" id="client_last_name" />
                                    </div>
                                </div>

                                <div className="row guest_phone">
                                    <div className="col-6">
                                        <label className="form-label float-start">Phone</label>
                                        <input className="form-control" placeholder="Phone" id="client_mobile_phone" />
                                    </div>
                                    <div className="col-6">
                                        <label className="form-label float-start">Email</label>
                                        <input className="form-control" placeholder="name@email.com" id="client_email" />
                                    </div>
                                </div>

                                <div class="row mt-3 guest_notes">
                                    <div class="col-12">
                                        <label class="form-label float-start">Notes</label>
                                        <textarea className="form-control" rows="3" placeholder="Add any notes for your trip here." id="client_notes" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div id='card-form'>
                                    <div className='row'>
                                        <h3 className="mb-3">Enter Payment Information</h3>
                                        <div className='col-md-12 mb-3 float-start'>
                                            <label class="form-label">Cardholder Name</label>
                                            <input className="form-control mb-3" placeholder="First M. Last" id="cardholder_name" />
                                        </div>
                                    </div>

                                    <div className='row mt-3'>
                                        <div className="col-12 float-start">
                                            <label class="form-label card-label">Card Number</label>
                                            <div className="fake-stripe-input">
                                                <input
                                                    type="text"
                                                    className="card-number-input"
                                                    placeholder="Card number"
                                                />

                                                <div className="card-meta">
                                                    <span>MM / YY</span>
                                                    <span>CVC</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-check mb-4">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label">
                                            I agree to Guide Pointer terms & conditions
                                        </label>
                                    </div>

                                    <div class="row mt-3 mb-5 mt-4">
                                        <div class="col-12 amount mb-3">
                                            <button type="button" id="pay-btn" onClick={() => navigate("/payment-confirmation")}>PAY $0.00 <i className="fa-solid fa-chevron-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default MakePayment