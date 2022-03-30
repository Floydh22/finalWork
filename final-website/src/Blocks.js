import React from "react";
import './block.css';

function Blocks() {
    return <div className="container">
        <div className="block">
            <div className="blocks-text">
                Basic Text for the stock            
            </div>
            <div className="blocks-pic"> 
                Stock Display
            </div>
        </div>
        <div className="block">
            <div className="blocks-buttons">
                <button className="button-green">Make Light Green</button>
                <button className="button-red">Make Light Red</button>
            </div>
        </div>
            
    </div>

}
export default Blocks;