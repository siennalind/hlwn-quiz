import Questions from '../../Questions'
import { useState } from 'react'

function Question ({ handleFinish }) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [isCorrect, setIsCorrect] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [feedback, setFeedback] = useState('')

    const questions = Questions

    const handleSubmit = (e) => {
        e.preventDefault()
        let newScore = 0

        if (isCorrect) {
            newScore = score + 1
            setScore(newScore)
            setFeedback('You got it right, you just might make it through the night!')
        } else {
            setFeedback(`Oh no, you got it wrong! Careful or the creepy crawlies will come for you...`)
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
        <>
        <p 
        className="question-no">Question {currentQuestion + 1} of {Questions.length + 1}</p>
        <p className="question">{questions[currentQuestion].questionText}</p>
        <form key={questions[currentQuestion].questionText}>
        {questions[currentQuestion].options.map((option) => (
            <span class="radio-span">
            <input 
            className="radio-input"
            type="radio" 
            name={questions[currentQuestion]} 
            value={option.text} 
            onClick={() => {handleSelect(option)}} 
            />
            <label className="radio-label">{option.text}</label>
            </span>
        ))}
        </form>
        <button 
        onClick={handleSubmit} 
        disabled={submitted}>Submit</button>
        <p>{feedback}</p>
        <button onClick={handleNext}>Next</button>
        </>
    )
}

export default Question