import { useNavigate, useLocation } from "react-router-dom";
import './BottomNavigation.css'

function BottomNavigation() {
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname === "/view-activity" || location.pathname === "/list-assignments" || location.pathname === "/make-payment" || location.pathname === "/payment-confirmation" || location.pathname === "/all-details") {
        return null;
    }

    if (location.pathname === "/review-selection" ) {
        return (
            <div className="bottom-navigation container">
                <div className="row">
                    <div className="col-6 left-btn">
                    <button onClick={() => navigate("")}>Book Another Trip <i className="fa-solid fa-chevron-right"></i></button>
                    </div>
                    <div className="col-6 right-btn">
                        <button onClick={() => navigate("/list-assignments")}>
                            Checkout <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bottom-navigation container">
            <div className="row">
                <div className="col-6 left-btn">
                <button> Thu, January 22, 2026 </button>
                </div>
                <div className="col-6 right-btn">
                    <button onClick={() => navigate("/view-activity")}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BottomNavigation