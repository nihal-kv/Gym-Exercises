import ExerciseCard from "./ExerciseCard";
import "./Exercises.css";

import React, { useEffect, useState } from "react";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // console.log(exercises)

  const [currPage, setCurrPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const prevHandler = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    }
  };

  const nextHandler = () => {
    const count = Math.ceil(exercises.length / exercisesPerPage);
    if (currPage < count) {
      setCurrPage(currPage + 1);
    }
  };

  const url = 'https://exercisedb.p.rapidapi.com/exercises';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '48a4968fd0mshd43be65cb20f191p150dd5jsn81f51b96023f',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        const response = await fetch(url, options);
        exercisesData = await response.json();
      } else {
        const response2 = await fetch(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          options
        );
        exercisesData = await response2.json();
      }
      console.log(exercisesData);
      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <div className="exercises" id="exercises">
      <h3>Showing Results</h3>
      <div className="exercises__container">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <div className="exercises__pagination">
        <button className="exercises__paginationPrev" onClick={prevHandler}>
          Prev
        </button>
        <button className="exercises__paginationNext" onClick={nextHandler}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Exercises;
