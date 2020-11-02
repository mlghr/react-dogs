import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Dog.css"


function Dog({dog}) {

    if (!dog) return <Redirect to="/dogs"/>

    return (
        <div className="container">
            <h1>Hello, my name is {dog.name}</h1>
            <img src={dog.src} alt={dog.name}/>
            <h2>Here are some facts about me:</h2>
            <ul>
            {dog.facts.map((fact, i) => (
                <span key={i}>{fact} </span>
            ))}
            </ul>
            <Link to="/dogs">Go Back</Link>
        </div>
    )
}

export default Dog;
