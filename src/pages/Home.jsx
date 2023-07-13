import { MeetUpCard } from "../components/MeetUpCard/MeetUpCard";
import { Navbar } from "../components/Navbar/Navbar";
import { UseMeetUp } from "../context/MeetupContext";
import "../App.css";

import { useState } from "react";

export const Home = () => {
    const { meetups } = UseMeetUp();

    const [selectedEvent, setSelectedEvent] = useState("Both");
    let displayMeetups = [...meetups];
    if (selectedEvent !== "Both")
        displayMeetups = meetups.filter(
            (meetup) => meetup.eventType === selectedEvent
        );

    function handleChange(event) {
        setSelectedEvent(event.target.value);
    }

    return (
        <>
            <Navbar />
            <div className="meetup-header">
                <h1>Meetup Events</h1>
                <select onChange={handleChange} value={selectedEvent}>
                    <option>Offline</option>
                    <option>Online</option>
                    <option>Both</option>
                </select>
            </div>
            <div className="meetups">
                {displayMeetups.map((meetup) => (
                    <MeetUpCard key={meetup.id} {...meetup} />
                ))}
            </div>
        </>
    );
};
