import React from 'react'
const SpeedComponent = ({ increaseMethod }) => {

  return (
    <div className="speed-item">
      <button onClick={() => increaseMethod(1000)} >1x</button>
      <button onClick={() => increaseMethod(1500)}>1.5x</button>
      <button onClick={() => increaseMethod(2000)} >2x</button>
    </div>
  )
}


export default SpeedComponent