function ScorePage ({ handleRestart }) {

    return (
        <div>
            <p>You finished the quiz, well done!</p>
            <button onClick={handleRestart}>Back to Start</button>
        </div>
    )
}

export default ScorePage