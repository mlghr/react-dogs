import React from "react";
import {Link} from "react-router-dom";

function DogList({dogs}) {
    return (
        <div className="DogList">
            {dogs.map(d => (
                <div> 
                    <img src={d.src} alt={d.name}/>
                    <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default DogList;