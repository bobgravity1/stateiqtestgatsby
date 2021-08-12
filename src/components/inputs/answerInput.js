import React from 'react'

const AnswerInput = ({text}) => {
    return (
        <div className="answerInput">
        <div className='form'>
            <input type='text' placeholder=" " name='name' autocomplete='off' />
            <label for='name' className='label-name'>
                <span className='answerInput-contentname'>{text}</span>
            </label>
        </div>
        </div>
    )
}

export default AnswerInput
