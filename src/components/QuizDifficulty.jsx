import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import StarOutlineIcon from "@material-ui/icons/StarOutline";

const QuizDifficulty = ({ difficulty = [], index = 0 }) => {
  const [stars, setStars] = useState([]);
  const level = difficulty[index];

  const getStars = () => {
    let outlined, filled;
    let arr = [];
    let difficulty = getDifficulty();

    for (let i = 0; i < 5; i++) {
      if (i < difficulty) {
        filled = <StarIcon key={i} variant="default" />;
        arr.push(filled);
      }
      if (i >= difficulty) {
        outlined = <StarOutlineIcon key={i} variant="default" />;
        arr.push(outlined);
      }
    }
    console.log("stars", arr);
    setStars(arr);
  };

  const getDifficulty = () => {
    if (level === "easy") return 1;
    if (level === "medium") return 2;
    if (level === "hard") return 3;
  };

  useEffect(() => {
    getStars();
    return () => {};
  }, [index]);

  return (
    <IconButton aria-label="star">
      {stars.map((star) => star)}
    </IconButton>
  );
};

export default QuizDifficulty;
