import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addSmurfs } from "../store/actions/smurfActions";
import { fetchSmurfs } from "../store/actions/smurfActions";

const SmurfForm = props => {
    useEffect(() => {
        props.fetchSmurfs()
    }, [props])

    const [newSmurf, setNewSmurf] = useState(props.newSmurfs);
    const [smurfName, setSmurfName] = useState("");
    const [smurfAge, setSmurfAge] = useState("");
    const [smurfHeight, setSmurfHeight] = useState("");

    const submit = event => {
        setNewSmurf({
            name: smurfName,
            age: smurfAge,
            height: smurfHeight
        })
    }

    const submitHandler = event => {
        props.addSmurfs(newSmurf);
    }

    return(
        <div className="smurf-form">
            <form onSubmit={submitHandler}>
                <input 
                    name="name"
                    type="text"
                    placeholder="Name Here"
                    onChange={event => setSmurfName(event.target.value)}
                />
                <br />
                <input 
                    name="age"
                    type="text"
                    placeholder="Age Here"
                    onChange={event => setSmurfAge(event.target.value)}
                />
                <br />
                <input 
                    name="height"
                    type="text"
                    placeholder="Height Here"
                    onChange={event => setSmurfHeight(event.target.value)}
                />
                <br />
                <button onClick={submit}>Make New Smurf</button>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        newSmurfs: state.newSmurfs
    }
}

export default connect(mapStateToProps, {addSmurfs, fetchSmurfs})(SmurfForm)