import DUMMY_DATA from '../../DUMMY_DATA'
import { useState } from 'react'

function Question () {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const questions = DUMMY_DATA

    const handleNext = () => {
        const nextIndex = currentQuestion + 1
        setCurrentQuestion(nextIndex)
    }

    return (
        <div>
        <p>{questions[currentQuestion].questionText}</p>
        {questions[currentQuestion].options.map((option) => (
            <button>
                {option.text}
            </button>
        ))}
        <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Question