import './ActivitiesSection.css'

function ActivityCard({ title, image }) {
    return (
        <div className="activity-card">
            <div className="activity-img">
                { image? (
                    <img src={image} alt={title} />
                ) : (
                    <div className="placeholder" />
                )}
            </div>
            <div className="activity-info text-center mt-2">
                {title}
            </div>
        </div>
    )
}

export default ActivityCard