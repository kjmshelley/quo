function Correct({onNextQuestion}) {
    return (
        <div className="answer-results answer-results-correct">
            <div className="answer-results-left">
                <div className="answer-results-left-img">
                    <img src="/assets/img/accept.png" alt="Correct" />
                </div>
                <div className="answer-results-correct-msg">Correct!</div>
            </div>
            <div className="answer-results-right">
                <button onClick={onNextQuestion}>Continue</button>
            </div>
        </div>
    );
}

export default Correct;