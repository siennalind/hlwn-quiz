import DUMMY_DATA from '../../DUMMY_DATA'
import { useState } from 'react'

function Question () {
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const questions = DUMMY_DATA

    const handleNext = (e) => {
        e.preventDefault()
        const nextIndex = currentQuestion + 1
        setCurrentQuestion(nextIndex)
    }

    return (
        <div>
        <p>{questions[currentQuestion].questionText}</p>
        <form>
        {questions[currentQuestion].options.map((option) => (
            <>
            <input 
            type="radio" 
            name={questions[currentQuestion]} 
            value={option.text} />
            <label>{option.text}</label>
            </>
        ))}
        <input type="submit" onClick={handleNext} value="Next" />
        </form>
        </div>
    )
}

export default Question