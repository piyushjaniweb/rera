import React, { useEffect } from "react";

import PharmretailHero from "./components/PharmretailHero";
import Redefine from "./components/Redefine";
import Team from "./components/Team";
import Values from "./components/Values";

function About(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <PharmretailHero {...props} />
            <Redefine {...props} />
            <Team {...props} />
            <Values {...props}/>
            
            {/* <PharmaOrder {...props} />
            <Maximize {...props} />
            <InfiniteGrowth {...props} />
            <Enhance {...props} />
            <Platform {...props} /> */}
            {/* <Team {...props} /> */}
        </div>
    );
}

export default About;
