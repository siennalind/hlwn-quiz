import DUMMY_DATA from '../../DUMMY_DATA'
import { useState } from 'react'

function Question () {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [isCorrect, setIsCorrect] = useState(false)

    const questions = DUMMY_DATA

    const handleNext = () => {
        const nextIndex = currentQuestion + 1
        setCurrentQuestion(nextIndex)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let newScore = 0

        console.log(isCorrect)

        if (isCorrect) {
            newScore = score + 1
            setScore(newScore)
        }

        console.log(score)
    }

    const handleSelect = (answer) => {
        setIsCorrect(answer.isTrue)
    }

    return (
        <div>
        <p>{questions[currentQuestion].questionText}</p>
        <form key={questions[currentQuestion].questionText}>
        {questions[currentQuestion].options.map((option) => (
            <>
            <input 
            type="radio" 
            name={questions[currentQuestion]} 
            value={option.text} 
            onClick={() => {handleSelect(option)}} />
            <label>{option.text}</label>
            </>
        ))}
        <input 
        onClick={handleSubmit} 
        type="submit" 
        value="Submit" />
        </form>
        <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Question