import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";
import data from "../../data";

import Correct from "./Results/Correct";
import Wrong from "./Results/Wrong";

function Lesson() {
    const navigate = useNavigate();
    const [progressValue, setProgressValue] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState(data.getQuestions());
    const [question, setQuestion] = useState(questions[questionIndex]);
    const [selectedAnswer, setSelectedAnswer] = useState("");

    /*
        0 = none
        1 = correct
        2 = wrong
    */
    const [answerState, setAnswerState] = useState(0);
    const {
        value,
        answer,
        choices,
    } = question;
    const onContinue = () => {
        setAnswerState(selectedAnswer === answer ? 1 : 2);
    };

    const onNextQuestion = () => {
        if ((questionIndex + 1) >= questions.length) {
            navigate("/lesson/results/verified");
            return;
        }
        console.log(progressValue,(questions.length / 100), progressValue + (questions.length / 100));
        setAnswerState(0);
        setProgressValue(progressValue + (100 / questions.length));
        setQuestion(questions[questionIndex + 1]);
        setQuestionIndex(questionIndex + 1);
    };

    const onAnswerSelected = (choice) => {
        setSelectedAnswer(choice);
    };

    return (
        <div className="lesson">
            <div className="progress-bar">
                <div className="progress-bar-start">
                    <img src="/assets/img/cross.png" alt="close" />
                </div>
                <progress className="progress-bar-progresss" value={`${progressValue}`} max="100"> 32% </progress>
                <div className="progress-bar-end">
                    <img src="/assets/img/dollar.png" alt="dollar" />
                </div>
            </div>
            <div className="choice-app">
                <div className="choice-body">
                    <div className="prompt-question">
                        Translate this sentence
                    </div>
                    <div className="prompt-value">
                        {value}
                    </div>

                    <div className="multiple-choice">
                        <div
                            className={`answer ${selectedAnswer === choices[0] ? "answer-selected" : ""}`}
                            onClick={() => onAnswerSelected(choices[0])}>
                            <span>{choices[0]}</span>
                        </div>
                        <div
                            className={`answer ${selectedAnswer === choices[1] ? "answer-selected" : ""}`}
                            onClick={() => onAnswerSelected(choices[1])}>
                            <span>{choices[1]}</span>
                        </div>
                        <div
                            className={`answer ${selectedAnswer === choices[2] ? "answer-selected" : ""}`}
                            onClick={() => onAnswerSelected(choices[2])}>
                            <span>{choices[2]}</span>
                        </div>
                    </div>

                    <div className="continue">
                        <button onClick={onContinue}>CONTINUE</button>
                    </div>
                </div>
            </div>
            
            { answerState === 2 && <Wrong onNextQuestion={onNextQuestion} /> }
            { answerState === 1 && <Correct onNextQuestion={onNextQuestion} /> }
        </div>
    )
}

export default Lesson;