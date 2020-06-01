import React, { useState } from 'react'

import { VerticalRangeSlider } from 'vertical-slider'

const dataarray = [
  { id: 'myinput1', bgcolor: '#ffd400', name: 'name1', data: 40 },
  { id: 'myinput2', bgcolor: '#ff004d', name: 'name2', data: 5 },
  { id: 'myinput3', bgcolor: '#47CF8E', name: 'name3', data: 10 }
]

const App = () => {
  const [data, setData] = useState(dataarray)

  const onChange = (e) => {
    let inputs = data.slice()
    for (let i in inputs) {
      if (inputs[i].name === e.target.name) {
        inputs[i].data = parseInt(e.target.value)

        e.target.style.background = `linear-gradient(to right, ${
          e.target.bgcolor
        } 0%, ${e.target.bgcolor} ${
          (e.target.value * 100) / e.target.max
        }%, transparent ${e.target.value}%, transparent 100%)`

        setData(inputs)
        break
      }
    }
  }

  return (
    <>
      {data.map((item, i) => {
        return (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '100px'
            }}
          >
            <VerticalRangeSlider
              name={item.name}
              value={item.data}
              width={20}
              min={0}
              minValue={10}
              step={item.data > item.min ? 1 : item.min}
              max={100}
              bgcolor={item.bgcolor}
              onChange={onChange}
            />
          </div>
        )
      })}
    </>
  )
}

export default App
