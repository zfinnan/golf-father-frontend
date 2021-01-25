import React, { useState, useEffect }  from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const useStyles = makeStyles({
  table: {
    width: 400,
  },
  tablerow: {
    height: 20,
  }
});

const EditRound = (props) => {

  const [round, setRound] = useState([]);

  const [course, setCourse] = useState("");
  const [roundDay, setRoundDay] = useState("");
  const [roundMonth, setRoundMonth] = useState("");
  const [roundYear, setRoundYear] = useState("");
  const [frontNineYardage, setFrontNineYardage] = useState("");
  const [backNineYardage, setBackNineYardage] = useState("");
  const [totalYardage, setTotalYardage] = useState("");
  const [holeOneYardage, setHoleOneYardage] = useState("");
  const [holeTwoYardage, setHoleTwoYardage] = useState("");
  const [holeThreeYardage, setHoleThreeYardage] = useState("");
  const [holeFourYardage, setHoleFourYardage] = useState("");
  const [holeFiveYardage, setHoleFiveYardage] = useState("");
  const [holeSixYardage, setHoleSixYardage] = useState("");
  const [holeSevenYardage, setHoleSevenYardage] = useState("");
  const [holeEightYardage, setHoleEightYardage] = useState("");
  const [holeNineYardage, setHoleNineYardage] = useState("");
  const [holeTenYardage, setHoleTenYardage] = useState("");
  const [holeElevenYardage, setHoleElevenYardage] = useState("");
  const [holeTwelveYardage, setHoleTwelveYardage] = useState("");
  const [holeThirteenYardage, setHoleThirteenYardage] = useState("");
  const [holeFourteenYardage, setHoleFourteenYardage] = useState("");
  const [holeFifteenYardage, setHoleFifteenYardage] = useState("");
  const [holeSixteenYardage, setHoleSixteenYardage] = useState("");
  const [holeSeventeenYardage, setHoleSeventeenYardage] = useState("");
  const [holeEighteenYardage, setHoleEighteenYardage] = useState("");
  const [frontNinePar, setFrontNinePar] = useState("");
  const [backNinePar, setBackNinePar] = useState("");
  const [totalPar, setTotalPar] = useState("");
  const [holeOnePar, setHoleOnePar] = useState("");
  const [holeTwoPar, setHoleTwoPar] = useState("");
  const [holeThreePar, setHoleThreePar] = useState("");
  const [holeFourPar, setHoleFourPar] = useState("");
  const [holeFivePar, setHoleFivePar] = useState("");
  const [holeSixPar, setHoleSixPar] = useState("");
  const [holeSevenPar, setHoleSevenPar] = useState("");
  const [holeEightPar, setHoleEightPar] = useState("");
  const [holeNinePar, setHoleNinePar] = useState("");
  const [holeTenPar, setHoleTenPar] = useState("");
  const [holeElevenPar, setHoleElevenPar] = useState("");
  const [holeTwelvePar, setHoleTwelvePar] = useState("");
  const [holeThirteenPar, setHoleThirteenPar] = useState("");
  const [holeFourteenPar, setHoleFourteenPar] = useState("");
  const [holeFifteenPar, setHoleFifteenPar] = useState("");
  const [holeSixteenPar, setHoleSixteenPar] = useState("");
  const [holeSeventeenPar, setHoleSeventeenPar] = useState("");
  const [holeEighteenPar, setHoleEighteenPar] = useState("");
  const [frontNineScore, setFrontNineScore] = useState("");
  const [backNineScore, setBackNineScore] = useState("");
  const [totalScore, setTotalScore] = useState("");
  const [holeOneScore, setHoleOneScore] = useState("");
  const [holeTwoScore, setHoleTwoScore] = useState("");
  const [holeThreeScore, setHoleThreeScore] = useState("");
  const [holeFourScore, setHoleFourScore] = useState("");
  const [holeFiveScore, setHoleFiveScore] = useState("");
  const [holeSixScore, setHoleSixScore] = useState("");
  const [holeSevenScore, setHoleSevenScore] = useState("");
  const [holeEightScore, setHoleEightScore] = useState("");
  const [holeNineScore, setHoleNineScore] = useState("");
  const [holeTenScore, setHoleTenScore] = useState("");
  const [holeElevenScore, setHoleElevenScore] = useState("");
  const [holeTwelveScore, setHoleTwelveScore] = useState("");
  const [holeThirteenScore, setHoleThirteenScore] = useState("");
  const [holeFourteenScore, setHoleFourteenScore] = useState("");
  const [holeFifteenScore, setHoleFifteenScore] = useState("");
  const [holeSixteenScore, setHoleSixteenScore] = useState("");
  const [holeSeventeenScore, setHoleSeventeenScore] = useState("");
  const [holeEighteenScore, setHoleEighteenScore] = useState("");
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [playerThree, setPlayerThree] = useState("");
  const [playerFour, setPlayerFour] = useState("");

  const handleCourse = (e) => {
    setCourse(e.target.value);
  }
  const handleRoundDay = (e) => {
    setRoundDay(e.target.value);
  }
  const handleRoundMonth = (e) => {
    setRoundMonth(e.target.value);
  }
  const handleRoundYear = (e) => {
    setRoundYear(e.target.value);
  }
  const handleFrontNineYardage = (e) => {
    setFrontNineYardage(e.target.value);
  }
  const handleBackNineYardage = (e) => {
    setBackNineYardage(e.target.value);
  }
  const handleTotalYardage = (e) => {
    setTotalYardage(e.target.value);
  }
  const handleHoleOneYardage = (e) => {
    setHoleOneYardage(e.target.value);
  }
  const handleHoleTwoYardage = (e) => {
    setHoleTwoYardage(e.target.value);
  }
  const handleHoleThreeYardage = (e) => {
    setHoleThreeYardage(e.target.value);
  }
  const handleHoleFourYardage = (e) => {
    setHoleFourYardage(e.target.value);
  }
  const handleHoleFiveYardage = (e) => {
    setHoleFiveYardage(e.target.value);
  }
  const handleHoleSixYardage = (e) => {
    setHoleSixYardage(e.target.value);
  }
  const handleHoleSevenYardage = (e) => {
    setHoleSevenYardage(e.target.value);
  }
  const handleHoleEightYardage = (e) => {
    setHoleEightYardage(e.target.value);
  }
  const handleHoleNineYardage = (e) => {
    setHoleNineYardage(e.target.value);
  }
  const handleHoleTenYardage = (e) => {
    setHoleTenYardage(e.target.value);
  }
  const handleHoleElevenYardage = (e) => {
    setHoleElevenYardage(e.target.value);
  }
  const handleHoleTwelveYardage = (e) => {
    setHoleTwelveYardage(e.target.value);
  }
  const handleHoleThirteenYardage = (e) => {
    setHoleThirteenYardage(e.target.value);
  }
  const handleHoleFourteenYardage = (e) => {
    setHoleFourteenYardage(e.target.value);
  }
  const handleHoleFifteenYardage = (e) => {
    setHoleFifteenYardage(e.target.value);
  }
  const handleHoleSixteenYardage = (e) => {
    setHoleSixteenYardage(e.target.value);
  }
  const handleHoleSeventeenYardage = (e) => {
    setHoleSeventeenYardage(e.target.value);
  }
  const handleHoleEighteenYardage = (e) => {
    setHoleEighteenYardage(e.target.value);
  }
  const handleFrontNinePar = (e) => {
    setFrontNinePar(e.target.value);
  }
  const handleBackNinePar = (e) => {
    setBackNinePar(e.target.value);
  }
  const handleTotalPar = (e) => {
    setTotalPar(e.target.value);
  }
  const handleHoleOnePar = (e) => {
    setHoleOnePar(e.target.value);
  }
  const handleHoleTwoPar = (e) => {
    setHoleTwoPar(e.target.value);
  }
  const handleHoleThreePar = (e) => {
    setHoleThreePar(e.target.value);
  }
  const handleHoleFourPar = (e) => {
    setHoleFourPar(e.target.value);
  }
  const handleHoleFivePar = (e) => {
    setHoleFivePar(e.target.value);
  }
  const handleHoleSixPar = (e) => {
    setHoleSixPar(e.target.value);
  }
  const handleHoleSevenPar = (e) => {
    setHoleSevenPar(e.target.value);
  }
  const handleHoleEightPar = (e) => {
    setHoleEightPar(e.target.value);
  }
  const handleHoleNinePar = (e) => {
    setHoleNinePar(e.target.value);
  }
  const handleHoleTenPar = (e) => {
    setHoleTenPar(e.target.value);
  }
  const handleHoleElevenPar = (e) => {
    setHoleElevenPar(e.target.value);
  }
  const handleHoleTwelvePar = (e) => {
    setHoleTwelvePar(e.target.value);
  }
  const handleHoleThirteenPar = (e) => {
    setHoleThirteenPar(e.target.value);
  }
  const handleHoleFourteenPar = (e) => {
    setHoleFourteenPar(e.target.value);
  }
  const handleHoleFifteenPar = (e) => {
    setHoleFifteenPar(e.target.value);
  }
  const handleHoleSixteenPar = (e) => {
    setHoleSixteenPar(e.target.value);
  }
  const handleHoleSeventeenPar = (e) => {
    setHoleSeventeenPar(e.target.value);
  }
  const handleHoleEighteenPar = (e) => {
    setHoleEighteenPar(e.target.value);
  }
  const handleFrontNineScore = (e) => {
    setFrontNineScore(e.target.value);
  }
  const handleBackNineScore = (e) => {
    setBackNineScore(e.target.value);
  }
  const handleTotalScore = (e) => {
    setTotalScore(e.target.value);
  }
  const handleHoleOneScore = (e) => {
    setHoleOneScore(e.target.value);
  }
  const handleHoleTwoScore = (e) => {
    setHoleTwoScore(e.target.value);
  }
  const handleHoleThreeScore = (e) => {
    setHoleThreeScore(e.target.value);
  }
  const handleHoleFourScore = (e) => {
    setHoleFourScore(e.target.value);
  }
  const handleHoleFiveScore = (e) => {
    setHoleFiveScore(e.target.value);
  }
  const handleHoleSixScore = (e) => {
    setHoleSixScore(e.target.value);
  }
  const handleHoleSevenScore = (e) => {
    setHoleSevenScore(e.target.value);
  }
  const handleHoleEightScore = (e) => {
    setHoleEightScore(e.target.value);
  }
  const handleHoleNineScore = (e) => {
    setHoleNineScore(e.target.value);
  }
  const handleHoleTenScore = (e) => {
    setHoleTenScore(e.target.value);
  }
  const handleHoleElevenScore = (e) => {
    setHoleElevenScore(e.target.value);
  }
  const handleHoleTwelveScore = (e) => {
    setHoleTwelveScore(e.target.value);
  }
  const handleHoleThirteenScore = (e) => {
    setHoleThirteenScore(e.target.value);
  }
  const handleHoleFourteenScore = (e) => {
    setHoleFourteenScore(e.target.value);
  }
  const handleHoleFifteenScore = (e) => {
    setHoleFifteenScore(e.target.value);
  }
  const handleHoleSixteenScore = (e) => {
    setHoleSixteenScore(e.target.value);
  }
  const handleHoleSeventeenScore = (e) => {
    setHoleSeventeenScore(e.target.value);
  }
  const handleHoleEighteenScore = (e) => {
    setHoleEighteenScore(e.target.value);
  }
  const handlePlayerOne = (e) => {
    setPlayerOne(e.target.value);
  }
  const handlePlayerTwo = (e) => {
    setPlayerTwo(e.target.value);
  }
  const handlePlayerThree = (e) => {
    setPlayerThree(e.target.value);
  }
  const handlePlayerFour = (e) => {
    setPlayerFour(e.target.value);
  }
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("test");
    const data = {
      day: roundDay,
      month: roundMonth,
      year: roundYear,
      course: course,
      frontNineTotalYardage: frontNineYardage,
      backNineTotalYardage: backNineYardage,
      totalYardage: totalYardage,
      holeOneYardage: holeOneYardage,
      holeTwoYardage: holeTwoYardage,
      holeThreeYardage: holeThreeYardage,
      holeFourYardage: holeFourYardage,
      holeFiveYardage: holeFiveYardage,
      holeSixYardage: holeSixYardage,
      holeSevenYardage: holeSevenYardage,
      holeEightYardage: holeEightYardage,
      holeNineYardage: holeNineYardage,
      holeTenYardage: holeTenYardage,
      holeElevenYardage: holeElevenYardage,
      holeTwelveYardage: holeTwelveYardage,
      holeThirteenYardage: holeThirteenYardage,
      holeFourteenYardage: holeFourteenYardage,
      holeFifteenYardage: holeFifteenYardage,
      holeSixteenYardage: holeSixteenYardage,
      holeSeventeenYardage: holeSeventeenYardage,
      holeEighteenYardage: holeEighteenYardage,
      frontNinePar: frontNinePar,
      backNinePar: backNinePar,
      totalPar: totalPar,
      holeOnePar: holeOnePar,
      holeTwoPar: holeTwoPar,
      holeThreePar: holeThreePar,
      holeFourPar: holeFourPar,
      holeFivePar: holeFivePar,
      holeSixPar: holeSixPar,
      holeSevenPar: holeSevenPar,
      holeEightPar: holeEightPar,
      holeNinePar: holeNinePar,
      holeTenPar: holeTenPar,
      holeElevenPar: holeElevenPar,
      holeTwelvePar: holeTwelvePar,
      holeThirteenPar: holeThirteenPar,
      holeFourteenPar: holeFourteenPar,
      holeFifteenPar: holeFifteenPar,
      holeSixteenPar: holeSixteenPar,
      holeSeventeenPar: holeSeventeenPar,
      holeEighteenPar: holeEighteenPar,
      frontNineScore: frontNineScore,
      backNineScore: backNineScore,
      totalScore: totalScore,
      holeOneScore: holeOneScore,
      holeTwoScore: holeTwoScore,
      holeThreeScore: holeThreeScore,
      holeFourScore: holeFourScore,
      holeFiveScore: holeFiveScore,
      holeSixScore: holeSixScore,
      holeSevenScore: holeSevenScore,
      holeEightScore: holeEightScore,
      holeNineScore: holeNineScore,
      holeTenScore: holeTenScore,
      holeElevenScore: holeElevenScore,
      holeTwelveScore: holeTwelveScore,
      holeThirteenScore: holeThirteenScore,
      holeFourteenScore: holeFourteenScore,
      holeFifteenScore: holeFifteenScore,
      holeSixteenScore: holeSixteenScore,
      holeSeventeenScore: holeSeventeenScore,
      holeEighteenScore: holeEighteenScore,
      playerOne: playerOne,
      playerTwo: playerTwo,
      playerThree: playerThree,
      playerFour: playerFour
    };
    console.log(data)
    axios
      .put(`${REACT_APP_SERVER_URL}/api/rounds/${props.match.params.id}`, {
        data,
      })
      .then((res) => {
        console.log(res.data);
        setRedirect(true);
      });
  };

  useEffect(() => {
    axios.get(`${REACT_APP_SERVER_URL}/api/rounds/${props.match.params.id}`)
        .then(res => {
            setRound(res.data);
            setCourse(res.data.foundRound.course)
            setRoundDay(res.data.foundRound.day)
            setRoundMonth(res.data.foundRound.month)
            setRoundYear(res.data.foundRound.year)
            setFrontNineYardage(res.data.foundRound.frontNineTotalYardage)
            setBackNineYardage(res.data.foundRound.backNineTotalYardage)
            setTotalYardage(res.data.foundRound.totalYardage)
            setHoleOneYardage(res.data.foundRound.holeOneYardage)
            setHoleTwoYardage(res.data.foundRound.holeTwoYardage)
            setHoleThreeYardage(res.data.foundRound.holeThreeYardage)
            setHoleFourYardage(res.data.foundRound.holeFourYardage)
            setHoleFiveYardage(res.data.foundRound.holeFiveYardage)
            setHoleSixYardage(res.data.foundRound.holeSixYardage)
            setHoleSevenYardage(res.data.foundRound.holeSevenYardage)
            setHoleEightYardage(res.data.foundRound.holeEightYardage)
            setHoleNineYardage(res.data.foundRound.holeNineYardage)
            setHoleTenYardage(res.data.foundRound.holeTenYardage)
            setHoleElevenYardage(res.data.foundRound.holeElevenYardage)
            setHoleTwelveYardage(res.data.foundRound.holeTwelveYardage)
            setHoleThirteenYardage(res.data.foundRound.holeThirteenYardage)
            setHoleFourteenYardage(res.data.foundRound.holeFourteenYardage)
            setHoleFifteenYardage(res.data.foundRound.holeFifteenYardage)
            setHoleSixteenYardage(res.data.foundRound.holeSixteenYardage)
            setHoleSeventeenYardage(res.data.foundRound.holeSeventeenYardage)
            setHoleEighteenYardage(res.data.foundRound.holeEighteenYardage)
            setFrontNinePar(res.data.foundRound.frontNinePar)
            setBackNinePar(res.data.foundRound.backNinePar)
            setTotalPar(res.data.foundRound.totalPar)
            setHoleOnePar(res.data.foundRound.holeOnePar)
            setHoleTwoPar(res.data.foundRound.holeTwoPar)
            setHoleThreePar(res.data.foundRound.holeThreePar)
            setHoleFourPar(res.data.foundRound.holeFourPar)
            setHoleFivePar(res.data.foundRound.holeFivePar)
            setHoleSixPar(res.data.foundRound.holeSixPar)
            setHoleSevenPar(res.data.foundRound.holeSevenPar)
            setHoleEightPar(res.data.foundRound.holeEightPar)
            setHoleNinePar(res.data.foundRound.holeNinePar)
            setHoleTenPar(res.data.foundRound.holeTenPar)
            setHoleElevenPar(res.data.foundRound.holeElevenPar)
            setHoleTwelvePar(res.data.foundRound.holeTwelvePar)
            setHoleThirteenPar(res.data.foundRound.holeThirteenPar)
            setHoleFourteenPar(res.data.foundRound.holeFourteenPar)
            setHoleFifteenPar(res.data.foundRound.holeFifteenPar)
            setHoleSixteenPar(res.data.foundRound.holeSixteenPar)
            setHoleSeventeenPar(res.data.foundRound.holeSeventeenPar)
            setHoleEighteenPar(res.data.foundRound.holeEighteenPar)
            setFrontNineScore(res.data.foundRound.frontNineScore)
            setBackNineScore(res.data.foundRound.backNineScore)
            setTotalScore(res.data.foundRound.totalScore)
            setHoleOneScore(res.data.foundRound.holeOneScore)
            setHoleTwoScore(res.data.foundRound.holeTwoScore)
            setHoleThreeScore(res.data.foundRound.holeThreeScore)
            setHoleFourScore(res.data.foundRound.holeFourScore)
            setHoleFiveScore(res.data.foundRound.holeFiveScore)
            setHoleSixScore(res.data.foundRound.holeSixScore)
            setHoleSevenScore(res.data.foundRound.holeSevenScore)
            setHoleEightScore(res.data.foundRound.holeEightScore)
            setHoleNineScore(res.data.foundRound.holeNineScore)
            setHoleTenScore(res.data.foundRound.holeTenScore)
            setHoleElevenScore(res.data.foundRound.holeElevenScore)
            setHoleTwelveScore(res.data.foundRound.holeTwelveScore)
            setHoleThirteenScore(res.data.foundRound.holeThirteenScore)
            setHoleFourteenScore(res.data.foundRound.holeFourteenScore)
            setHoleFifteenScore(res.data.foundRound.holeFifteenScore)
            setHoleSixteenScore(res.data.foundRound.holeSixteenScore)
            setHoleSeventeenScore(res.data.foundRound.holeSeventeenScore)
            setHoleEighteenScore(res.data.foundRound.holeEighteenScore)
            setPlayerOne(res.data.foundRound.playerOne)
            setPlayerTwo(res.data.foundRound.playerTwo)
            setPlayerThree(res.data.foundRound.playerThree)
            setPlayerFour(res.data.foundRound.playerFour)
        });
    }, []);

  
  const classes = useStyles();

  if (redirect) {
    return ( 
        <Redirect to="/profile" />
    )
  } 

  return (
    
    <div id="scoreCard">
      <h1 id="scoreCardHeader">Edit Round</h1>
      <form>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><input id="courseNameInput" placeholder={course} onChange={handleCourse}></input></TableCell>
            <TableCell align="right"><input id="roundDay" placeholder={roundDay} onChange={handleRoundDay}></input></TableCell>
            <TableCell><input id="roundMonth" placeholder={roundMonth} onChange={handleRoundMonth}></input></TableCell>
            <TableCell><input id="roundYear" placeholder={roundYear} onChange={handleRoundYear}></input></TableCell>
          </TableRow>
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
            <TableCell align="right"><input id="roundInputCell" placeholder={holeOneYardage} onChange={handleHoleOneYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeTwoYardage} onChange={handleHoleTwoYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeThreeYardage} onChange={handleHoleThreeYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeFourYardage} onChange={handleHoleFourYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeFiveYardage} onChange={handleHoleFiveYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeSixYardage} onChange={handleHoleSixYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeSevenYardage} onChange={handleHoleSevenYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeEightYardage} onChange={handleHoleEightYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeNineYardage} onChange={handleHoleNineYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell" placeholder={frontNineYardage} onChange={handleFrontNineYardage}></input>  &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeTenYardage} onChange={handleHoleTenYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeElevenYardage} onChange={handleHoleElevenYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeTwelveYardage} onChange={handleHoleTwelveYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeThirteenYardage} onChange={handleHoleThirteenYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeFourteenYardage} onChange={handleHoleFourteenYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeFifteenYardage} onChange={handleHoleFifteenYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeSixteenYardage} onChange={handleHoleSixteenYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeSeventeenYardage} onChange={handleHoleSeventeenYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeEighteenYardage} onChange={handleHoleEighteenYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell" placeholder={backNineYardage} onChange={handleBackNineYardage}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell" placeholder={totalYardage} onChange={handleTotalYardage}></input> &nbsp;</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Par</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeOnePar} onChange={handleHoleOnePar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeTwoPar} onChange={handleHoleTwoPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeThreePar} onChange={handleHoleThreePar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeFourPar} onChange={handleHoleFourPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeFivePar} onChange={handleHoleFivePar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeSixPar} onChange={handleHoleSixPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeSevenPar} onChange={handleHoleSevenPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeEightPar} onChange={handleHoleEightPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeNinePar} onChange={handleHoleNinePar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell" placeholder={frontNinePar} onChange={handleFrontNinePar}></input>  &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeTenPar} onChange={handleHoleTenPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeElevenPar} onChange={handleHoleElevenPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeTwelvePar} onChange={handleHoleTwelvePar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeThirteenPar} onChange={handleHoleThirteenPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeFourteenPar} onChange={handleHoleFourteenPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeFifteenPar} onChange={handleHoleFifteenPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeSixteenPar} onChange={handleHoleSixteenPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeSeventeenPar} onChange={handleHoleSeventeenPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeEighteenPar} onChange={handleHoleEighteenPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell" placeholder={backNinePar} onChange={handleBackNinePar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell" placeholder={totalPar} onChange={handleTotalPar}></input> &nbsp;</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><input id="playerNameInput1" value={props.user.name} onChange={handlePlayerOne}></input></TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeOneScore} onChange={handleHoleOneScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeTwoScore}  onChange={handleHoleTwoScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeThreeScore}  onChange={handleHoleThreeScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeFourScore}  onChange={handleHoleFourScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeFiveScore}  onChange={handleHoleFiveScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeSixScore}  onChange={handleHoleSixScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeSevenScore}  onChange={handleHoleSevenScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeEightScore}  onChange={handleHoleEightScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeNineScore}  onChange={handleHoleNineScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell" placeholder={frontNineScore} onChange={handleFrontNineScore}></input>  &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeTenScore}  onChange={handleHoleTenScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeElevenScore}  onChange={handleHoleElevenScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeTwelveScore}  onChange={handleHoleTwelveScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeThirteenScore}  onChange={handleHoleThirteenScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeFourteenScore}  onChange={handleHoleFourteenScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeFifteenScore}  onChange={handleHoleFifteenScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeSixteenScore}  onChange={handleHoleSixteenScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeSeventeenScore}  onChange={handleHoleSeventeenScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeEighteenScore}  onChange={handleHoleEighteenScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell" placeholder={backNineScore} onChange={handleBackNineScore}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell" placeholder={totalScore} onChange={handleTotalScore}></input> &nbsp;</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><input id="playerNameInput" placeholder={playerTwo} onChange={handlePlayerTwo}></input></TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell"></input>  &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell"></input> &nbsp;</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><input id="playerNameInput" placeholder={playerThree} onChange={handlePlayerThree}></input></TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell"></input>  &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell"></input> &nbsp;</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><input id="playerNameInput" placeholder={playerFour} onChange={handlePlayerFour}></input></TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell"></input>  &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell"></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell"></input> &nbsp;</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Par</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeOnePar} onChange={handleHoleOnePar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeTwoPar} onChange={handleHoleTwoPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeThreePar} onChange={handleHoleThreePar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeFourPar} onChange={handleHoleFourPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeFivePar} onChange={handleHoleFivePar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeSixPar} onChange={handleHoleSixPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeSevenPar} onChange={handleHoleSevenPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeEightPar} onChange={handleHoleEightPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeNinePar} onChange={handleHoleNinePar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell" placeholder={frontNinePar} onChange={handleFrontNinePar}></input>  &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeTenPar} onChange={handleHoleTenPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeElevenPar} onChange={handleHoleElevenPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeTwelvePar} onChange={handleHoleTwelvePar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeThirteenPar} onChange={handleHoleThirteenPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeFourteenPar} onChange={handleHoleFourteenPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeFifteenPar} onChange={handleHoleFifteenPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeSixteenPar} onChange={handleHoleSixteenPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeSeventeenPar} onChange={handleHoleSeventeenPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundInputCell" placeholder={holeEighteenPar} onChange={handleHoleEighteenPar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell" placeholder={backNinePar} onChange={handleBackNinePar}></input> &nbsp;</TableCell>
            <TableCell align="right"><input id="roundTotalInputCell" placeholder={totalPar} onChange={handleTotalPar}></input> &nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        </TableBody>
      </Table>
      </TableContainer>
      </form>
      <button type="submit" id="saveRoundButton" value="Save Round" onClick={handleSubmit}>Save Edit</button>
    </div>
  );
};

   
export default EditRound;