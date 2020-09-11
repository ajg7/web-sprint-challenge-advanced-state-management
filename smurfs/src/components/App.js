import React, { useEffect } from "react";
import "./App.css";
import { fetchSmurfs } from "../store/actions/smurfActions"
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import { connect } from "react-redux";

const App = props => {

  const {fetchSmurfs, loadingSmurfs, errorMessage} = props;

    useEffect(() => {
      fetchSmurfs();
    }, [fetchSmurfs])


    return (
      <div className="App">
        <h1>Smurf Village</h1>
        {!loadingSmurfs ? <SmurfList /> : <div>...Fetching Smurfs</div>}
        {errorMessage !== "" ? <div>{errorMessage}</div> : null}
        <SmurfForm />
      </div>
    );
}

function mapStateToProps(state) {
  return {
    loadingSmurfs: state.loadingSmurfs,
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
