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
import { StylesProvider } from "@material-ui/core/styles";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;



const Profile = (props) => {

    const [rounds, setRounds] = useState([]);
    const [shouldReload, setShouldReload] = useState(false);
    
    const useStyles = makeStyles({
      root: {
        width: 30
      }
    })
    
    const classes = useStyles();

    useEffect(() => {
        const id = localStorage.getItem("jwtToken");
        axios.get(`${REACT_APP_SERVER_URL}/api/rounds/${id}/myRounds`)
            .then(res => {
                setRounds(res.data);
                setShouldReload(false);
            });
    }, [shouldReload]);

    useEffect(() => {
      console.log(props.course)
    }, [props.course])

    const handleDelete = (id) => {
        debugger
        axios.delete(`${REACT_APP_SERVER_URL}/api/rounds/${id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
            setShouldReload(true);
          })
      }
      const worstRound = Math.max(...rounds.map(o => o.totalScore));
      const bestRound = Math.min(...rounds.map(o => o.totalScore));

    return (
        <div className="row">
            <div className="col-md-4">
                <h1>{props.user.name}</h1>
                <p>{props.user.email}</p>
            </div>
            <div>
                <h1 id="profileHeader">My Rounds</h1>
                <div id="bestAndWorstRoundsOverall">
                  <h2>Best Round Overall: {bestRound}</h2>
                  <h2>Worst Round Overall: {worstRound}</h2>
                </div>
                <div className="profileRounds">
                    
                    {rounds.map((round, index) =>
                    <StylesProvider injectFirst>
                    <TableContainer component={Paper}>
                    <Table fixedHeader={false} style={{ width: "auto", tableLayout: "auto" }} aria-label="simple table">
                      <TableHead>
                        <div id="scoreCardHeader">
                          <h4 id="courseName">{round.course}</h4>
                          <h6 id="roundDayDisplay">{round.day}/{round.month}/{round.year}</h6>
                          <Link to={`/editround/${round._id}`} id="editButton">✎</Link>
                          <button className="btn btn-primary btn-lg btn-block" id="deleteButton" type="submit" onClick={() => handleDelete(round._id)}>X</button>
                        </div>
                      </TableHead>
                      <TableHead>
                        <TableRow>
                          <TableCell>Hole</TableCell>
                          <TableCell align="right">1</TableCell>
                          <TableCell align="right">2&nbsp;</TableCell>
                          <TableCell align="right">3&nbsp;</TableCell>
                          <TableCell align="right">4&nbsp;</TableCell>
                          <TableCell align="right">5&nbsp;</TableCell>
                          <TableCell align="right">6&nbsp;</TableCell>
                          <TableCell align="right">7&nbsp;</TableCell>
                          <TableCell align="right">8&nbsp;</TableCell>
                          <TableCell align="right">9&nbsp;</TableCell>
                          <TableCell align="right">OUT&nbsp;</TableCell>
                          <TableCell align="right">10&nbsp;</TableCell>
                          <TableCell align="right">11&nbsp;</TableCell>
                          <TableCell align="right">12&nbsp;</TableCell>
                          <TableCell align="right">13&nbsp;</TableCell>
                          <TableCell align="right">14&nbsp;</TableCell>
                          <TableCell align="right">15&nbsp;</TableCell>
                          <TableCell align="right">16&nbsp;</TableCell>
                          <TableCell align="right">17&nbsp;</TableCell>
                          <TableCell align="right">18&nbsp;</TableCell>
                          <TableCell align="right">OUT&nbsp;</TableCell>
                          <TableCell align="right">TOT&nbsp;</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Yardage</TableCell>
                          <TableCell align="right">{round.holeOneYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeTwoYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeThreeYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeFourYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeFiveYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeSixYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeSevenYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeEightYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeNineYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.frontNineTotalYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeTenYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeElevenYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeTwelveYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeThirteenYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeFourteenYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeFifteenYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeSixteenYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeSeventeenYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeEighteenYardage} &nbsp;</TableCell>
                          <TableCell align="right">{round.backNineTotalYardage}&nbsp;</TableCell>
                          <TableCell align="right">{round.totalYardage} &nbsp;</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Par</TableCell>
                          <TableCell align="right">{round.holeOnePar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeTwoPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeThreePar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeFourPar}&nbsp;</TableCell>
                          <TableCell align="right">{round.holeFivePar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeSixPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeSevenPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeEightPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeNinePar} &nbsp;</TableCell>
                          <TableCell align="right">{round.frontNinePar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeTenPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeElevenPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeTwelvePar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeThirteenPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeFourteenPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeFifteenPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeSixteenPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeSeventeenPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeEighteenPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.backNinePar}&nbsp;</TableCell>
                          <TableCell align="right">{round.totalPar}&nbsp;</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{round.playerOne}</TableCell>
                          <TableCell align="right">{round.holeOneScore}  &nbsp;</TableCell>
                          <TableCell align="right">{round.holeTwoScore} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeThreeScore} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeFourScore} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeFiveScore} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeSixScore} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeSevenScore} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeEightScore} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeNineScore} &nbsp;</TableCell>
                          <TableCell align="right">{round.frontNineScore}  &nbsp;</TableCell>
                          <TableCell align="right">{round.holeTenScore} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeElevenScore} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeTwelveScore} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeThirteenScore} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeFourteenScore} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeFifteenScore} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeSixteenScore} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeSeventeenScore} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeEighteenScore} &nbsp;</TableCell>
                          <TableCell align="right">{round.backNineScore}  &nbsp;</TableCell>
                          <TableCell align="right">{round.totalScore}  &nbsp;</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{round.playerTwo}</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{round.playerThree}</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                          <TableCell align="right">&nbsp;</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>{round.playerFour}</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                          <TableCell align="right"> &nbsp;</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Par</TableCell>
                          <TableCell align="right">{round.holeOnePar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeTwoPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeThreePar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeFourPar}&nbsp;</TableCell>
                          <TableCell align="right">{round.holeFivePar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeSixPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeSevenPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeEightPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeNinePar} &nbsp;</TableCell>
                          <TableCell align="right">{round.frontNinePar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeTenPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeElevenPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeTwelvePar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeThirteenPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeFourteenPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeFifteenPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeSixteenPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeSeventeenPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.holeEighteenPar} &nbsp;</TableCell>
                          <TableCell align="right">{round.backNinePar}&nbsp;</TableCell>
                          <TableCell align="right">{round.totalPar}&nbsp;</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                      </TableBody>
                    
                    <div id="cardSpacing"><br></br></div>
                    </Table>
                    </TableContainer>
                    </StylesProvider>
                )}
                <br></br>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default Profile;