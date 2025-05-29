import React, { useEffect } from "react";

import PharmretailHero from "./components/PharmretailHero";
import Team from "./components/Media";
// import Team from "./components/Team";

function Media(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <PharmretailHero {...props} />
            <Team {...props} />
            {/* <PharmaOrder {...props} />
            <Maximize {...props} />
            <InfiniteGrowth {...props} />
            <Enhance {...props} />
            <Platform {...props} /> */}
            {/* <Team {...props} /> */}
        </div>
    );
}

export default Media;
