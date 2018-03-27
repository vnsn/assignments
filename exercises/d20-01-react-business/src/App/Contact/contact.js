import React from "react";

import goomba from "../../images/goomba.png";
import bobomb from "../../images/bob-omb.jpg";
import cheep from "../../images/cheep-cheep.jpg";

function Contact() {
    return (
        <section className="content contact">
            <h2>Please (Do Not) Contact Us</h2>

            <p>Email: mario@vschool.io</p>
            <p>Website: http://vschool.io/</p>
            <p>150 S State Street, Salt Lake City, UT 84111</p>

            <div className="baddie-row">
                <img src={goomba} alt="goomba" className="baddie" />
                <img src={bobomb} alt="bob-omb" className="baddie" />
                <img src={cheep} alt="cheep-cheep" className="baddie" />
            </div>

            <p className="disclaimer">Text and photos borrowed from a Salt Lake City company called Bug Bully. Visit them at <a href="http://mybugbully.com">www.mybugbully.com</a> for actual pest control services. This is just a class assignment. :-)</p>
        </section>
    )
}


export default Contact;
