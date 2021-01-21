import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom"

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Scorecard = (props) => {
  
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
    // console.log(data)
    axios
      .post(`${REACT_APP_SERVER_URL}/api/expenses/new`, {
        data,
      })
      .then((res) => {
        console.log(res.data);
        setRedirect(true);
      });
  };

  return (
    <div>
      <h1>New Round</h1>
    

    </div>
  );
};
export default Scorecard;