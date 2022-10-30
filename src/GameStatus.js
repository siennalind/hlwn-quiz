import { useState } from 'react'
import StartPage from './StartPage'
import Question from './components/Question/Question'
import ScorePage from './ScorePage'

function GameStatus () {
    const [gameState, setGameState] = useState("start")
    const [finalScore, setFinalScore] = useState(0)

    const handleStart = () => {
        setGameState("questions")
    }
    const handleFinish = () => {
        setGameState("score")
    }
    const handleRestart = () => {
        setGameState("start")
    }

    return (
        <>
            {gameState === "start" && <StartPage handleStart={handleStart} />}
            {gameState === "questions" && <Question handleFinish={handleFinish} />}
            {gameState === "score" && <ScorePage handleRestart={handleRestart} />}
        </>
    )
}

export default GameStatus