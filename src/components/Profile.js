import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

// import ExpenseEdit from "./components/ExpenseEdit";

const Profile = (props) => {

    return (
        <div className="row">
            <div className="col-md-4">
                <h1>{props.user.name}</h1>
                <p>{props.user.email}</p>
            </div>
            <div>
                <h1 id="profileHeader">Rounds</h1>
            </div>
        </div>
    )


}

export default Profile;