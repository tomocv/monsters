import React from "react";

export const Card = (props) => (
    <div>
    <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster" />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
);