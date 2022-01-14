import React from 'react'
import "./AboutUs.scss";

export default function AboutUs() {
    return (
        <>
            <div className="aboutus-head">About Us</div>
            <div className="aboutus">
            <img src="https://raw.githubusercontent.com/devstrons/artwork/master/Stock%20assets/GIF/Waving-Devstrons-GIF.gif" width="480" height="360" alt="Devstrons GIF" />
                <div className="aboutus-text">
                    <p>
                        BUGTRONS began with a mindset of encouraging community folks and make them aware of the Ed-tech industry by putting emphasis on problem-solving, code efficiency, code optimization, and logic-based programming. We empower hackers to get influenced by developing software, enhancing skills, solving bugs & producing opportunities.
                    </p>
                    <br />
                    <p>
                    The community encourages Inclusion & Diversity as its core and has various events and happenings around the same as well to keep coders engages in a meaningful way. All in all, we want coders to not just participte but experience a contest in a true sense.
                    </p>
                </div>
            </div>
        </>
    )
}
