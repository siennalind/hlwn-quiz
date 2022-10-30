function StartPage ({ handleStart }) {
    
    return (
        <>
            <p className="welcome">Welcome to the Halloween Quiz!</p>
            <p>Are you ready to test your knowledge on all things spooky?</p>
            <p>Click the button below if you dare...</p>
            <button onClick={handleStart}>Start Quiz</button>
        </>
    )
}

export default StartPage