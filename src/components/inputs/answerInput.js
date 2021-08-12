import React from 'react'

const AnswerInput = ({text}) => {
    return (
        <form action="/form/submit" method="get" autocomplete="off">
            <div className="answerInput">
            <div className='form'>
                <input placeholder=" " name='name' autocomplete='off' />
                <label for='name' className='label-name'>
                    <span className='answerInput-contentname'>{text}</span>
                </label>
            </div>
            </div>
        </form>
    )
}

export default AnswerInput
