import { useParams } from "react-router-dom";
import { UseMeetUp } from "../context/MeetupContext";
import { Navbar } from "../components/Navbar/Navbar";
import "../App.css";
import { Chip, Modal } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export const MeetupDetail = () => {
    const { meetups } = UseMeetUp();
    const { id } = useParams();
    const meetUp = meetups.find((meetup) => meetup.id === id);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rsvp, setRsvp] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    function handleClick() {
        handleOpen();
    }
    function handleRsvp() {
        setRsvp(true);
        handleClose();
        setName("");
        setEmail("");
    }

    return (
        <>
            <Navbar />
            <Link to="/" className="back-link">{"<- Back"}</Link>
            <div className="meetupdetail-container">
                <div className="left">
                    <h1>{meetUp.title}</h1>
                    <p>Hosted By: </p>
                    <p>{meetUp.hostedBy}</p>
                    <img src={meetUp.eventThumbnail} alt="event" />
                    <h2>Details:</h2>
                    <p className="even-description">
                        {meetUp.eventDescription}
                    </p>
                    <h2>Additional Information</h2>
                    <p>
                        <strong>Dress Code: </strong>
                        {meetUp.additionalInformation.dressCode}
                    </p>
                    <p>
                        <strong>Age Restriction:</strong>
                        {meetUp.additionalInformation.ageRestrictions}
                    </p>
                    <h2>Event Tags:</h2>
                    <div>
                        {meetUp.eventTags.map((tag, ind) => (
                            <Chip key={ind} label={tag} className="chip" />
                        ))}
                    </div>
                </div>
                <div className="right">
                    <div className="event-details">
                        <div className="timing">
                            <h3>Timing</h3>
                            <p>{meetUp.eventStartTime}</p>
                            <p>{meetUp.eventEndTime}</p>
                        </div>
                        <div className="venue">
                            <h3>Location</h3>
                            <p>{meetUp.location}</p>
                            <p>{meetUp.address}</p>
                        </div>
                        <p>{meetUp.price}</p>
                    </div>
                    <div className="speaker-details">
                        <h2>Speakers: </h2>
                        <div className="speakers">
                            {meetUp.speakers.map((speaker, ind) => (
                                <div className="speaker" key={ind}>
                                    <img
                                        src={speaker.image}
                                        className="speaker-image"
                                    />
                                    <p>{speaker.name}</p>
                                    <p>{speaker.designation}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={handleClick} disabled={rsvp}>{
                        rsvp ? "Already RSVPed" : "RSVP"
                    }</button>
                </div>
            </div>
            <div>
                <Modal open={open} onClose={handleClose}>
                    <div style={style} className="modal-container">
                        <h3>Complete your RSVP</h3>
                        <p>Fill in your personal info</p>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p>
                            {meetUp.isPaid
                                ? "Already Paid"
                                : "You have to pay at the venue"}{" "}
                        </p>
                        <button onClick={handleRsvp}>RSVP</button>
                    </div>
                </Modal>
            </div>
        </>
    );
};
