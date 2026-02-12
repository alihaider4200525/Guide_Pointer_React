import { useNavigate } from "react-router-dom";
import './BottomNavigation.css'

function BottomNavigation() {
    const navigate = useNavigate();
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