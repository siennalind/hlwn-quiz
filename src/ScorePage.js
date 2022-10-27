function ScorePage ({ handleRestart }) {

    return (
        <div>
            <p>Your score was x out of x</p>
            <button onClick={handleRestart}>Back to Start</button>
        </div>
    )
}

export default ScorePage