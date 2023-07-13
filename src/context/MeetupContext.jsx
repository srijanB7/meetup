import { createContext, useContext, useState } from "react";
import { meetupData } from "../data/meetupdata";

export const MeetupContext = createContext();

export const UseMeetUp = () => useContext(MeetupContext);

export const MeetupProvider = ( {children} ) => {
    const [meetups, setMeetUps ] = useState(meetupData.meetups);

    return (
        <MeetupContext.Provider value={{meetups}}>
            {children}
        </MeetupContext.Provider>
    )
}