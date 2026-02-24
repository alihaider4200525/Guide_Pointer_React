import { useNavigate } from "react-router-dom";
import ActivityRaya from '../../assets/images/activity-raya.jpg';
import './ListAssignments.css';

function ListAssignments() {
    const navigate = useNavigate();
    return (
        <>
            <div className="list-assignent">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center mt-4 mb-4">
                            <h3 className="activity-title">
                                <i className="fa fa-edit"></i> My Cart
                            </h3>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-4 bg-white shadow p-5 mb-5 rounded cart-box"> 
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
                                    <button type="button" id="payment-btn" onClick={() => navigate("/make-payment")}>Payment <i className="fa-solid fa-chevron-right"></i></button>
                                </div>
                            </div>
                        </div>

                        <div className="col-3 right-pricing-details-section cart-details bg-white shadow p-5 mb-5 rounded">
                            <div class="pricing-details-section">
                                <div class="price-heading">
                                    <h3>Pricing Details</h3>
                                </div>
                                <div class="pricing-items">
                                    <div class="pricing-item d-flex justify-content-between">
                                        <div class="section-info">
                                        <span class="section-name">DHA Phase-6 | Rayaa DHA</span>
                                        <span class="section-date">
                                            02-11-2026
                                        </span>
                                        </div>
                                        <span class="section-price">$0.00</span>
                                    </div>
                                </div>
                                <div class="total-price d-flex justify-content-between mt-3 border-top pt-3">
                                    <strong>Total</strong>
                                    <strong>$0.00</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListAssignments