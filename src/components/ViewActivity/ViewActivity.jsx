import { useNavigate } from "react-router-dom";
import NetworkLogo from '../../assets/images/network-logo.png';
import ActivityRaya from '../../assets/images/activity-raya.jpg';
import './ViewActivity.css';

function ViewActivity() {
    const navigate = useNavigate();
    return (
        <div className="activity-section">
            <div className="container">

                {/* Title */}
                <div className="row">
                    <div className="col-12 text-center mt-4 mb-4">
                        <h3 className="activity-title">
                            <i className="fa fa-edit"></i> Activity Information
                        </h3>
                    </div>
                </div>

                <div className="row justify-content-center">

                    {/* LEFT SIDE – IMAGE */}
                    <div className="col-md-5">
                        <div className="bg-white shadow p-5 mb-5 rounded activity-left-card">
                            <div className='left-info-tab'>
                                <div className='activity-photo-tab'>
                                    <img src={ActivityRaya} alt='Activity Raya' />
                                </div>
                            </div>

                            <div class="nabar-tabs-section">
                                <ul class="nav nav-tabs mt-4" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="tab1-tab" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">Overview</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="tab2-tab" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false" tabindex="-1">Location</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="tab3-tab" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false" tabindex="-1">Details</button>
                                    </li>
                                </ul>


                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active p-3" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                                        <div class="network-logo-tab">
                                            <img src={NetworkLogo} alt='Network Logo' />
                                            <span>WorldCast Anglers</span>
                                        </div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy..</p>
                                    </div>
                                    <div class="tab-pane fade p-3" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                                        <p>DHA Rayaa</p>
                                    </div>
                                    <div class="tab-pane fade p-3" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE – PRICING DETAILS */}
                    <div className="col-md-3">
                        <div className="bg-white shadow activity-right-card">

                            <div className="pricing-details-section">
                                <div className="pricing-item mb-4">

                                    {/* Top Row */}
                                    <div className="activity-section-info d-flex">
                                        <img
                                            src="https://guidepointer.s3.amazonaws.com/uploads/photo/image/175/2023-12-23.jpg"
                                            alt="Photo"
                                            className="pricing-thumb me-3"
                                        />

                                        <div className="photo-detail-tab">
                                            <span className="section-name d-block">
                                                DHA Phase-6 | Rayaa DHA
                                            </span>
                                            <span className="section-price">$0.00</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Other Info */}
                                <div className="other-information">
                                    <div className="section-date d-flex justify-content-between">
                                        <span><b>Date:</b></span>
                                        <span>02-11-2026</span>
                                    </div>

                                    <div className="time-slot d-flex justify-content-between">
                                        <span><b>Time Slot:</b></span>
                                        <span>Full Day</span>
                                    </div>

                                    <div className="group-size d-flex justify-content-between">
                                        <span><b>Group Size:</b></span>
                                        <span>3</span>
                                    </div>
                                </div>

                            </div>

                            <div class="mt-4 add-cart-button">
                                <button onClick={() => navigate("/review-selection")}>Add to cart</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ViewActivity;
