import React from 'react';
import GenerateRandom from "./GenerateRandom";

import Countdown from "./Time";

function TimingMode()
{
    return(
        <div>
            <GenerateRandom></GenerateRandom>
            <Countdown seconds={5}/>
        </div>
    );
}
export default TimingMode;
