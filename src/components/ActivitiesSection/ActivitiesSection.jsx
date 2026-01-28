import group_icon from '../../assets/images/group_icon.png';
import './ActivitiesSection.css'

function ActivitiesSection() {
    return (
        <div className="activity-section">
            <div className="container">
                <div className="row">
                    <div class="col-2"></div>
                    <div className="col-8 trip-heading justify-content-center align-items-center mt-4">
                        <img src={group_icon} alt='Group Icon' />
                        <span class="network_name">Request a trip with WorldCast Anglers</span>
                    </div>
                    <div class="col-2"></div>
                </div>

                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-8 main-page'>
                        <div className='bg-white shadow home p-5 mb-5 client-request'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivitiesSection