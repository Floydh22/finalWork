import React, { useState } from "react";
import './block.css';


function Blocks() {
    const [lightColor, setColor] = useState("Off");
    return <div className="container">
        <div className="block">
            <div className="blocks-text">
                  The light should be {lightColor}
            </div>
            <div className="blocks-pic"> 
                Stock Display
            </div>
        </div>
        <div className="block">
            <div className="blocks-buttons">
                <button onClick={() => setColor("Green")} className="button-green">Make Light Green</button>
                <button onClick={() => setColor("Off")} className="button-green">Turn Light Off</button>
                <button onClick={() => setColor("Red")} className="button-red">Make Light Red</button>
            </div>
        </div>
    </div>

}
export default Blocks;