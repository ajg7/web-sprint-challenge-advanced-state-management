import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addSmurfs } from "../store/actions/smurfActions";
import { fetchSmurfs } from "../store/actions/smurfActions";

const SmurfForm = props => {
    useEffect(() => {
        props.fetchSmurfs()
    }, [])

    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleChanges = event => {
        console.log(event.target.value)
    }

    const submit = event => {
        event.preventDefault()
        props.addSmurfs(newSmurf)
    }

    return(
        <div className="smurf-form">
            <form onSubmit={submit}>
                <input 
                    name="name"
                    type="text"
                    placeholder="Name Here"
                    onChange={handleChanges}
                />
                <br />
                <input 
                    name="age"
                    type="text"
                    placeholder="Age Here"
                    onChange={handleChanges}
                />
                <br />
                <input 
                    name="height"
                    type="text"
                    placeholder="Height Here"
                    onChange={handleChanges}
                />
                <br />
                <button>Make New Smurf</button>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        name: state.name,
        age: state.age,
        height: state.height
    }
}

export default connect(mapStateToProps, {addSmurfs, fetchSmurfs})(SmurfForm)