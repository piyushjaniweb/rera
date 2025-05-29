import React, { useEffect } from "react";

import PharmretailHero from "./components/PharmretailHero";
import Enhance from "./components/Enhance";
import Redefine from "./components/Redefine";
import Map from "./components/Map";
// import Team from "./components/Team";

function Contact(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <PharmretailHero {...props} />
            <Enhance {...props} />
            <Redefine {...props} />
            <Map {...props} />
            {/* <PharmaOrder {...props} />
            <Maximize {...props} />
            <InfiniteGrowth {...props} />
            <Enhance {...props} />
            <Platform {...props} /> */}
            {/* <Team {...props} /> */}
        </div>
    );
}

export default Contact;
