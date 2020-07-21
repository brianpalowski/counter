import React from 'react'

const PauseRefreshComponent = ({ pauseMethod, pauseState, blink, color, min, sec }) => {
  return (
    <div className="counter-Pause-Refresh">
      <h1 id={blink ? 'blink-Count' : null} className={color ? 'h1-Counter' : null} > {`${min}:${sec}`}</h1>
      <button
        className="pause-Button"
        onClick={() => {
          pauseMethod(!pauseState)
        }}>Pause</button>
      <button className="pause-Button" onClick={() => window.location.reload(false)}>Refresh</button>
    </div>
  )
}

export default PauseRefreshComponent