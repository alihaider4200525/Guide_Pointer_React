import { useNavigate } from "react-router-dom";
import ActivityRaya from '../../assets/images/activity-raya.jpg';
import './AllDetails.css'

function AllDetails() {

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-4 text-center">
                    <div className="row mb-4 heading">
                        <div className="col-12">
                            <span className="ps-2 h3">
                                <i className="fa fa-edit"></i>
                                Guest Information
                            </span>
                        </div>
                    </div>

                    <div class="bg-white shadow p-5 mb-5 rounded guest-box new-guest-info-div">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label pull-left">Name</label>
                                <input disabled="disabled" value="testing" type="text" name="client[first_name]" id="client_first_name" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <input disabled="disabled" value="testing" type="text" name="client[last_name]" id="client_last_name" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <label class="form-label pull-left">Phone</label>
                                <input disabled="disabled" value="(704) 581-2547" type="text" name="client[mobile_phone]" id="client_mobile_phone" />
                            </div>
                            <div class="col-6">
                                <label class="form-label pull-left">Email</label>
                                <input disabled="disabled" value="testing@gmail.com" type="text" name="client[email]" id="client_email" />
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-12">
                                <label class="form-label pull-left">Card Number</label>
                                <input disabled="disabled" type="card_number" class="form-control" value="**** **** **** 4242" />
                            </div>
                        </div>
                        <div class="row my-5">
                            <div class="col-md-6 mb-3">
                                <label class="form-label pull-left">Expiry Date</label>
                                <input disabled="disabled" type="expiry_date" class="form-control" value="4/2026" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label pull-left">Zip Code</label>
                                <input disabled="disabled" type="zip_code" class="form-control" value="67765" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-4 text-center">
                    <div className="row mb-4 heading">
                        <div className="col-12">
                            <span className="h3">
                                <i className="fa-regular fa-thumbs-up me-2"></i>
                                My Trips
                            </span>
                        </div>
                    </div>
                    <div className="bg-white shadow p-5 mb-5 rounded cart-box">
                        <div className="row bg-round">
                            <div className="col-12 float-start title py-3 rounded-4">
                                <span className="ps-4 h3">Trip Name &amp; Details</span>
                            </div>
                        </div>

                        <div id="scroll-container">
                            <div className="row mt-4 p-4 bg-round trip-cart-box">
                                <div className="summary-date float-start">
                                    <div className="float-start river-info">
                                        <div className="summary-photo-tab">
                                            <div className="summary-photo">
                                                <img src={ActivityRaya} alt='Activity Raya' />
                                            </div>
                                            <div className="photo-caption mt-2">
                                                DHA Phase-6 | Rayaa DHA
                                                <div className="new-cost-div">
                                                    <span className="Date">02-11-2026</span>
                                                    <span className="section-cost">$0.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="people info float-start">
                                    <div className="float-start selected-people">
                                        <i className="fa fa-user"></i>
                                        <span id="Text">
                                            2
                                            <span> People | </span>
                                            Full Day | A.J. Sanders
                                        </span>
                                    </div>
                                    <div className="float-end d-flex align-items-center">
                                        <button type="button" id="edit-trip-btn">Edit Trip</button>
                                        <button type="button" id="delete-trip-btn" className='btn btn-danger'>Edit Trip</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-4 cart-btn-row">
                            <div class="col-12">
                                <button type="button" id="another-btn" onClick={() => navigate("/make-payment")}>Book another trip <i className="fa-solid fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllDetails