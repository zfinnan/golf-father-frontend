# Steps to install on local computer

Fork and clone both front end and back end repos to local machine from my github: github.com/zfinnan.

https://github.com/zfinnan/golf-father-backend
https://github.com/zfinnan/golf-father-frontend

cd into both folders and run npm i to install packages and add a .env
Once everything is done installing, run rpm start on the front end repo & node server.js on the back end.

# Address

golf-father-tracker.herokuapp.com

# Overview of the stack used 

This project was a full stack using MERN (MongoDB, Express.js, React, and Node.js) and is intended for golfers to log their scorecards into a database in order to recall their rounds later.

The golfers can additionally see the holes they parred, birdied, or bogeyed as well as information about the course.

Material UI was used for creating the tables.

logic wireframe: https://lucid.app/lucidchart/53dc11c9-093c-4023-9ee3-8312cbe43660/view?page=0_0#?folder_id=home&browser=icon

# Code Snippets

One example of a piece of this code that was particularly challenging was dealing with pymongo and converting objectid's to strings.

I had to create a get route for individual rounds as shown below: 

```
router.get("/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    console.log(req.user)
    models.User.findOne({ _id: req.user.id })
      .then((user) => {
        let roundsAsStrings = user.rounds.map((round) => {return round.toString()})
        if (roundsAsStrings.includes(req.params.id)) {
          models.Round.findOne({ _id: req.params.id }).then(
            (foundRound) => {
              console.log(foundRound)
              res.status(200).json({ foundRound });
            }
          );
        } else {
          res.send({ msg: "User did not play that round!" });
        }
      })
      .catch((error) => res.send({ error }));
});
```

On the front end, it was taxing to work with such a great amount of state in my axios calls as well as creating a large table with many input fields.

```
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
      .post(`${REACT_APP_SERVER_URL}/api/rounds/new`, {
        data,
      })
      .then((res) => {
        console.log(res.data);
        setRedirect(true);
      });
  };
```