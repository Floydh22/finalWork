import React, { useState } from "react";
import './block.css';

function Blocks() {
    const [lightColor, setColor] = useState("");
    const change_color = (color) =>{
        var insert = {"color" : color}
        fetch("http://localhost:8000/users/", 
            {
                method:"POST", 
                body: JSON.stringify(insert),
                headers: {
                  "Content-Type": "application/json",
                }
            })  
          .then(res => res.json())
          .then(data => console.log(data))
    }

    const buttonClick = (color) => {

        change_color(color);
        setColor(color);
    }



    return (
    <div className="container">
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
                <button onClick={() => buttonClick("Green")}className="button-green">Make Light Green</button>
                <button onClick={() => buttonClick("Yellow")} className="button-green">Make Light Yellow</button>
                <button onClick={() => buttonClick("Red")} className="button-red">Make Light Red</button>
            </div>
        </div>
    </div>
    )

}
export default Blocks;