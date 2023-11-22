import React from 'react'

type StepCircleProps = {
    stepNumber: number,
    text: string,
    status: 'complete' | 'inprogress' | 'incomplete',
}

const StepCircle = (props:StepCircleProps) => {
  return (
    <>
        {props.status &&
        <div className='h-36 w-56 flex items-center'>
            <div className='w-16 h-16 border-2 border-slate-400 rounded-full'>
            </div>
            <div className='h-full w-40 border flex flex-col justify-center'>
                <p className='text-xs text-slate-500'>Step {props.stepNumber}</p>
                <h1>{props.text}</h1>
            </div>
        </div>
        }
    </>
  )
}

export default StepCircle