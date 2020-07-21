import React, { useState, useEffect } from 'react'
import PauseRefreshComponent from "./PauseRefreshComponent"
import SpeedComponent from './SpeedComponent'
import InputComponent from './InputComponent';

const TimerComponent = () => {

  const [time, updateTime] = useState(0);
  const [boolTime, updateBool] = useState(false);
  const [display, updateDisplay] = useState(null)
  const [pause, updatePause] = useState(null)
  const [currentTime, updateTimes] = useState(null)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [increase, setSpeed] = useState(1000);
  const [textBool, messageText] = useState(null)
  const [blink, textBlink] = useState(null)
  const [color, updateColor] = useState(null)




  useEffect(() => {
    if (boolTime) {
      updateTimes(time)
      updateBool(false)
    }
    if (currentTime > -1) {
      const interval = setInterval(() => {
        let minutes = Math.floor(currentTime / 60);
        let seconds = currentTime % 60;
        if (pause) {
          return
        }
        updateTimes(minutes => minutes - 1);
        setMin(minutes)
        setSec(seconds)
        displayUpdate()
      }, increase);
      return () => clearInterval(interval);
    }
  });



  const displayUpdate = () => {
    console.log(color)
    if (currentTime === 0) {
      messageText(false)
    }
    if (currentTime === 10) {
      textBlink(true)
    }
    if (currentTime === 20) {
      updateColor(true)
    }
    if (currentTime === Math.floor(time / 2)) {
      messageText(true)
      updateDisplay(true)
    }

  }

  const minSec = () => {
    if (display && textBool) {
      return <>
        <h2>More than halfway there!</h2>
      </>
    }
    if (display && !textBool) {
      return (
        <h2>
          Time’s up!
        </h2>
      )
    }
  }


  return (
    <div className="container">
      <div className="input-Conatiner">
        <InputComponent update={updateTime} boolMethod={updateBool} />
      </div>
      <div className="counter-Container">

        <div className="outer-Pause-Container">
          {minSec()}
          <PauseRefreshComponent
            pauseMethod={updatePause}
            pauseState={pause}
            blink={blink} color={color}
            min={min}
            sec={sec} />
        </div>
      </div>
      <div className="speed-Container">
        <SpeedComponent increaseMethod={setSpeed} increaseState={increase} />
      </div>
    </div >
  )
}

export default TimerComponent
