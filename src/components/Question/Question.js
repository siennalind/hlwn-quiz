import DUMMY_DATA from '../../DUMMY_DATA'
import { useState } from 'react'

function Question ({ handleFinish }) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [isCorrect, setIsCorrect] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [feedback, setFeedback] = useState('')

    const questions = DUMMY_DATA

    const handleSubmit = (e) => {
        e.preventDefault()
        let newScore = 0

        if (isCorrect) {
            newScore = score + 1
            setScore(newScore)
            setFeedback('You were right!')
        } else {
            setFeedback(`You were incorrect`)
        }

        setSubmitted(true)
    }

    const handleNext = () => {
        const nextIndex = currentQuestion + 1

        if (nextIndex >= questions.length) {
            handleFinish()
        } else {
            setCurrentQuestion(nextIndex)
            setSubmitted(false)
            setFeedback('')
        }
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
            onClick={() => {handleSelect(option)}} 
            />
            <label>{option.text}</label>
            </>
        ))}
        <input 
        onClick={handleSubmit} 
        type="submit" 
        value="Submit" 
        disabled={submitted}
        />
        </form>
        <p>Your score is {score}</p>
        <p>{feedback}</p>
        <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Question