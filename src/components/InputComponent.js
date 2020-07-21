import React, { useState } from 'react'

const InputComponent = ({ update, boolMethod }) => {
  const [time, setInput] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    update(time * 60)
    boolMethod(true)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span style={{ fontSize: 20 }}>CountDown: </span><input
          type="number"
          value={time}
          className="inputBox"
          onChange={e => setInput(e.target.value)}
        />
        <input type="submit" value="Submit" className="input-Submit-Count" />
      </form>
    </div>
  )

}


export default InputComponent