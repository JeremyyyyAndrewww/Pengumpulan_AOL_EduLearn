import React from "react";
import "./Exercise.css";

const exercises = [
    {
        question: "He ____ to the store yesterday.",
        options: ["goes", "went", "gone", "going"],
        answer: "went"
    },
    {
        question: "They ____ a movie last night.",
        options: ["watch", "watched", "watching", "watches"],
        answer: "watched"
    },
    {
        question: "She ____ a letter to her friend.",
        options: ["write", "writes", "wrote", "written"],
        answer: "wrote"
    },
    {
        question: "I ____ my homework before dinner.",
        options: ["do", "did", "done", "doing"],
        answer: "did"
    },
    {
        question: "We ____ to the park on Saturday.",
        options: ["go", "went", "gone", "going"],
        answer: "went"
    }
];

function EnglishExercise() {
    return (
        <>
            <div className="exerciseContainer">
                <div className="exerciseHeading">
                    <h2>Past Tense Exercise</h2>
                </div>

                <div className="exercises">
                    {exercises.map((exercise, index) => (
                        <div key={index} className="exercise">
                            <p className="question">{exercise.question}</p>
                            <div className="options">
                                {exercise.options.map((option, i) => (
                                    <label key={i}>
                                        <input type="radio" name={`question-${index}`} value={option} />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default EnglishExercise;
