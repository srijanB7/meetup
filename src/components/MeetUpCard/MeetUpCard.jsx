import { Link } from "react-router-dom";
import "./MeetUpCard.css";

export const MeetUpCard = ({
    id,
    title,
    eventThumbnail,
    eventStartTime,
    eventType,
}) => {
    return (
        <Link to={`/meetup/${id}`} className="card-container">
            
                <img src={eventThumbnail} alt="event" />
                <p className="event-type">{eventType}</p>
                <p className="meeetup-time">{eventStartTime}</p>
                <p className="meetup-title">{title}</p>
            
        </Link>
    );
};
