import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

const App = () => {
  return (
    <div className='relative bg-zinc-800 h-screen w-full '>
      <Background/>
      <Foreground/>
      <h1>58</h1>
    </div>
  )
}

export default App