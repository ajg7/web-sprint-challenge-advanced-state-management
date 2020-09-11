import React from "react";
import { connect } from "react-redux";
import Smurfs from "./Smurfs";

const SmurfList = props => {
    return (
        <>
            {props.smurfs.map(smurf => {
                return <Smurfs name={smurf.name} age={smurf.age} height={smurf.height} />
            })}
        </>
    )
}


function mapStateToProps(state) {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(SmurfList);