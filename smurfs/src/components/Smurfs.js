import React from "react";

const Smurfs = ({ name, age, height }) => {

    return (
        <div className="surfs">
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{height}</h3>
        </div>
    )
}

export default Smurfs;