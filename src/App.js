import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./questions.json";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import OptionList from "./components/OptionList";
import Question from "./components/Question";
import Header from "./components/Header";
import { Button } from "@material-ui/core";
import ProgressBar from "./components/ProgressBar";
import ScoreBar from "./components/ScoreBar";
import Result from "./components/Result";

function App() {
  const [modifiedData, setModifiedData] = useState({});
  const [index, setIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [minPercentage, setMinPercentage] = useState(0);
  const [maxPercentage, setMaxPercentage] = useState(0);
  const [AreDisabled, setAreDisabled] = useState(false);
  const [btnStyle, setBtnStyle] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const getData = () => {
    let category = [];
    let questions = [];
    let correctAnswers = [];
    let incorrectAnswers = [];
    let type = [];
    let difficulty = [];
    let options = [];

    data.map((item) => {
      category.push(getString(item.category));
      questions.push(getString(item.question));
      correctAnswers.push(getString(item.correct_answer));
      incorrectAnswers.push(
        item.incorrect_answers.map((incAns) => getString(incAns))
      );
      type.push(getString(item.type));
      difficulty.push(getString(item.difficulty));
    });

    incorrectAnswers.map((item, index) =>
      options.push(getOptions([...item], correctAnswers[index]))
    );

    setModifiedData({
      category,
      questions,
      incorrectAnswers,
      correctAnswers,
      type,
      difficulty,
      options,
    });
  };

  const getOptions = (arr, val) => {
    let index = Math.floor(Math.random() * arr.length);
    arr.splice(index, 0, val);
    return arr;
  };

  const getString = (str) => {
    let newStr = str
      .replace(/%20/g, " ")
      .replace(/%22/g, `"`)
      .replace(/%3A/g, ":")
      .replace(/%27/g, `'`)
      .replace(/%26/g, "-")
      .replace(/%2C/g, ",")
      .replace(/%3F/g, "?")
      .replace(/%24/g, "$");
    return newStr;
  };

  const checkAnswer = (val, e) => {
    let ans, style;

    if (val === correctAnswers[index]) {
      ans = true;
      style = { variant: "contained", color: "primary" };
    } else {
      ans = false;
      style = { variant: "contained", color: "secondary" };
    }
    setCurrentAnswer(ans);
    setBtnStyle(style);
    setAreDisabled(true);
    if (ans) {
      setCurrentScore(currentScore + 1);
    }
    if (index == 19) {
      setIsCompleted(true);
    }
  };

  const calculatePercentage = () => {
    let curPercentage = (currentScore / 20) * 100;
    let totalAnswered = index + 1;
    let remaining = 20 - totalAnswered;
    // let wrongAnswer = totalAnswered -currentScore;

    let maxPercentage = ((remaining + currentScore) / 20) * 100;
    let minPercentage = (currentScore / totalAnswered) * 100;
    // let minPercentage = ((wrongAnswer + remaining)/totalAnswered)*100;
    setCurrentPercentage(curPercentage);
    setMinPercentage(minPercentage);
    setMaxPercentage(maxPercentage);
  };

  const nextQuestion = () => {
    setIndex(index + 1);
    setCurrentAnswer(null);
    setAreDisabled(false);
    setBtnStyle(null);
    calculatePercentage();
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  const {
    category,
    questions,
    options,
    correctAnswers,
    incorrectAnswers,
    type,
    difficulty,
  } = modifiedData;

  const toHome = () => {
    setIsCompleted(false);
    setIndex(0);
    setCurrentAnswer(null);
    setCurrentScore(0);
    setCurrentPercentage(0);
    setMinPercentage(0);
    setMaxPercentage(0);
    setAreDisabled(false);
    setBtnStyle(null);
  };

  if (isCompleted) {
    return (
      <Result
        currentPercentage={currentPercentage}
        currentScore={currentScore}
        toHome={toHome}
      />
    );
  }
  return (
    <div>
      <ProgressBar progress={(index + 1) * 5} />

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid
          item
          xs={12}
          sm={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Header
            index={index}
            length={!!questions ? questions.length : 20}
            category={category}
            difficulty={difficulty}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Question questions={questions} index={index} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <OptionList
            options={options}
            index={index}
            check={checkAnswer}
            disableBtns={AreDisabled}
            btnStyle={btnStyle}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {!(currentAnswer === null) && (
            <Typography variant="h6" component="h6">
              {currentAnswer ? "Correct!" : "Sorry!"}
            </Typography>
          )}
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {!(currentAnswer === null) && questions[index + 1] && (
            <Button variant="contained" onClick={nextQuestion}>
              Next Question
            </Button>
          )}
        </Grid>

        <ScoreBar
          currentPercentage={currentPercentage}
          maxPercentage={maxPercentage}
          minPercentage={minPercentage}
        />
      </Grid>
    </div>
  );
}

export default App;
