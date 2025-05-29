import React, { useEffect } from "react";

import PharmretailHero from "./components/PharmretailHero";
import Redefine from "./components/Redefine";
import PharmaOrder from "./components/PharmaOrder";
import Maximize from "./components/Maximize";
import InfiniteGrowth from "./components/InfiniteGrowth";
import Engagements from "./components/Engagements";
import Platform from "./components/Platform";
// import Team from "./components/Team";

function Health(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <PharmretailHero {...props} />
            <Redefine {...props} />
            <PharmaOrder {...props} />
            <Maximize {...props} />
            <InfiniteGrowth {...props} />
            <Engagements {...props} />
            {/* <Platform {...props} /> */}
            {/* <Team {...props} /> */}
        </div>
    );
}

export default Health;
