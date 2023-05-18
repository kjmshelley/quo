function Wrong({onNextQuestion}) {
    return (
        <div className="answer-results answer-results-wrong">
            <div className="answer-results-left">
                <div className="answer-results-left-img">
                    <img src="/assets/img/close.png" alt="Incorrect" />
                </div>
                <div className="answer-results-wrong-msg">Incorrect</div>
            </div>
            <div className="answer-results-right">
                <button onClick={onNextQuestion}>Continue</button>
            </div>
        </div>
    );
}

export default Wrong;