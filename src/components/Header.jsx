import React from 'react'
import CurrentQuestion from './CurrentQuestion'
import QuizDifficulty from './QuizDifficulty'
import QuizCategory from './QuizCategory'



const Header = ({index=0, length ,category="", difficulty="easy"}) => {
    return (
        <div>
            <CurrentQuestion index={index} length={length}/>
            <QuizCategory category={category} index={index}/>
            <QuizDifficulty difficulty={difficulty} index={index}/>
        </div>
    )
}

export default Header
