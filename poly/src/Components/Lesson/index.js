import { useState } from "react";

import "./style.css";

import Correct from "./Results/Correct";
import Wrong from "./Results/Wrong";

function Lesson() {
    const [progressValue, setProgressValue] = useState(0);
    const onContinue = () => {
        setProgressValue(progressValue + 5);
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
                    <div className="prompt">
                        <div className="prompt-question">
                            Translate this sentence
                        </div>
                        <div className="prompt-value">
                            Soy un chico
                        </div>
                    </div>

                    <div className="multiple-choice">
                        <div className="answer">
                            <span>I am a girl</span>
                        </div>
                        <div className="answer">
                            <span>You are a girl</span>
                        </div>
                        <div className="answer">
                            <span>I am a boy</span>
                        </div>
                    </div>

                    <div className="continue">
                        <button onClick={onContinue}>CONTINUE</button>
                    </div>
                </div>
            </div>

            { /* <Correct /> */ }
            <Wrong />
        </div>
    )
}

export default Lesson;