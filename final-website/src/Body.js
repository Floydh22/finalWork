import React, {useState} from "react";

function Body() {
    const [name, setName] = useState(0);
    

    return <div>
        Search for stock:
        <input value = {name} onInput={e=> setName(e.target.value)}/>
        </div>;
}

export default Body;