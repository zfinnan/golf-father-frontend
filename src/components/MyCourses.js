import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { roundDependencies } from 'mathjs';
import { Redirect } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Profile from "./Profile"

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;



const MyCourses = (props) => {

    const [rounds, setRounds] = useState([]);
    const [shouldReload, setShouldReload] = useState(false);
    const [courses, setCourses] = useState([]); 

    useEffect(() => {
        const id = localStorage.getItem("jwtToken");
        axios.get(`${REACT_APP_SERVER_URL}/api/rounds/${id}/myRounds`)
            .then(res => {
                setRounds(res.data);
                setShouldReload(false);
            });
    }, [shouldReload]);

    const worstRound = Math.max(...rounds.map(o => o.totalScore));
    const bestRound = Math.min(...rounds.map(o => o.totalScore));

    const showCourse = (e) => {
        // const id = localStorage.getItem("jwtToken");
        // axios.get(`${REACT_APP_SERVER_URL}/api/rounds/${props.match.params.id}`)
        //     .then(res => {
        //         setCourses(res.data);
        //     });
        setCourses(e.target.value)
    };

    console.log(props)
    return (
        <div className="row">
            <div>
                <h1 id="myCoursesHeader">Courses I've played...</h1>
                <br></br>
            </div>
            <br></br>
                <div> 
                {rounds.map((round, index) =>    
                <div class="card">
                    <div class="cardContainer">
                    <h4><b>{round.course}</b></h4>
                    <p>Total Length: {round.totalYardage} yards</p>
                    <p>Par: {round.totalPar}</p>
                    <Link to="/">Log New Round</Link>
                    </div>
                </div>
                )}
                <br></br>
                </div>

        </div>
    )
}

export default MyCourses;