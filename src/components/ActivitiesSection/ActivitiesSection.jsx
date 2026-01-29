import ActivityCard from './ActivityCard';
import GroupIcon from '../../assets/images/group-icon.png';
import TrontoImg from '../../assets/images/tronto.jpg';
import FiltersRow from '../FiltersRow/FiltersRow';

const activities = [
    { title: 'Canada | Tronto', img: TrontoImg},
    { title: 'Canada | Tronto', img: TrontoImg},
    { title: 'Canada | Tronto', img: ""},
    { title: 'Canada | Tronto', img: TrontoImg},
    { title: 'Canada | Tronto', img: ""},
    { title: 'Canada | Tronto', img: TrontoImg},
    { title: 'Canada | Tronto', img: TrontoImg},
    { title: 'Canada | Tronto', img: ""},
]

function ActivitiesSection() {
    return (
        <div className="activity-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 trip-heading justify-content-center align-items-center mt-4">
                        <img src={GroupIcon} alt='Group Icon' />
                        <span className="network_name">Request a trip with WorldCast Anglers</span>
                    </div>
                </div>

                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-8 main-page'>
                        <div className='bg-white shadow home p-5 mb-5 client-request'>
                            <div className='col justify-content-between'>
                                <FiltersRow />
                            </div>
                            <p className="mb-3">Please select an activity:</p>
                            <div className='col-md-12'>
                                <div className='row activity-grid photo-tab-row scrollable-container'>
                                    {activities.map((activity, index) => (
                                        <div className='col-md-2 d-flex flex-column align-items-center mb-4 clickable-photo'>
                                            <ActivityCard key={index} title={activity.title} image={activity.img} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivitiesSection