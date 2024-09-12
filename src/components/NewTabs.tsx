import React from 'react'
import YouTube from '../assets/youtube.svg'
import TED from '../assets/ted.svg'
import Quizlet from '../assets/quizlet.svg'

const NewTabs = () => {
  return (
    <div>
        <div className="h-10 bg-tabs flex">
        <div className="border-r-2 border-border-blue w-1/3 h-full flex items-center justify-center">
          <img src={YouTube} alt="youtube logo" className='w-28' />
        </div>
        <div className="border-r-2 border-border-blue w-1/3 h-full flex items-center justify-center">
          <img src={TED} alt="youtube logo"/>
        </div>
        <div className="border-r-2 border-border-blue w-1/3 h-full flex items-center justify-center">
          <img src={Quizlet} alt="youtube logo"  />
        </div>
        
      </div>
    </div>
  )
}

export default NewTabs