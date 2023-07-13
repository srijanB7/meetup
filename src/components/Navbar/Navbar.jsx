import { useState } from "react";
import { UseMeetUp } from "../../context/MeetupContext";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    const { meetups } = UseMeetUp();
    const [searchText, setSearchText] = useState("");
    const handleChange = (event) => {
        setSearchText(event.target.value.toLowerCase());
    };

    let displaySearchResults = meetups.filter((meetup) =>
        meetup.title.toLowerCase().includes(searchText)
    );
    //console.log(displaySearchResults);
    if (searchText === "") displaySearchResults = [];
    return (
        <nav>
            <h1>MeetUp</h1>
            <div>
                <input
                    type="text"
                    placeholder="search by title and tags"
                    value={searchText}
                    onChange={handleChange}
                />
                <div className="search-results">
                    {displaySearchResults.length > 0 ? (
                        displaySearchResults.map((result) => (
                            <Link className="search-item" key={result.id} to={`/meetup/${result.id}`}>
                                <img src={result.eventThumbnail} />
                                <p>{result.title}</p>
                            </Link>
                        ))
                    ) : searchText !== "" ? (
                        <p>No Results</p>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </nav>
    );
};
