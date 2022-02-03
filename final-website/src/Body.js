import React, {useState} from "react";

function Body() {
    const [name, setName] = useState(0);
    

    return <div>
        <input value = {name} onInput={e=> setName(e.target.value)}/>
        Name is set to: {name}</div>;
}

export default Body;