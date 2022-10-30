function ScorePage ({ handleRestart }) {

    return (
        <>
            <p>You made it through, well done! Maybe you'd like to haver another try?</p>
            <button onClick={handleRestart}>Back to Start</button>
            <p>I hope to see you here again next year for a new challenge...</p>
        </>
    )
}

export default ScorePage