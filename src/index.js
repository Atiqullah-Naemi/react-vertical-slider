import React from 'react'
import styled from 'styled-components'

export const VerticalRangeSlider = (props) => {
  const { name, value, bgcolor, width, min, step, max, onChange } = props

  return (
    <Wrapper width={width}>
      <Range
        type='range'
        name={name}
        value={value}
        min={min}
        step={step}
        max={max}
        onChange={onChange}
        bgcolor={bgcolor}
      />
      <TextWrapper>
        <span> {name} </span>
      </TextWrapper>
      <Input
        type='text'
        name={name}
        value={!isNaN(value) ? value : ''}
        onChange={onChange}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  justify-content: center;
  align-items: center;
  position: relative;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 65px;

  span {
    font-size: 10px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    padding-bottom: 10px;
    font-size: 9px;
  }
`

const Input = styled.input`
  padding: 5px 10px;
  background: transparent;
  border: 1px solid 'brown';
  border-radius: 3px;
  height: 17px;
  width: 50px;
  text-align: center;
`

const Range = styled.input`
  -webkit-appearance: none;
  border: 1px solid lightgray;
  background: ${(props) =>
    props.bgcolor
      ? `linear-gradient(
    to right,
    ${props.bgcolor} 0%,
    ${props.bgcolor} ${(props.value / props.max) * 100}%,
    transparent ${(props.value / props.max) * 100}%,
    transparent 100%
  )`
      : 'green'};

  height: 10px;
  transform: rotate(270deg);
  z-index: 0;
  border-radius: 10px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #18b0b0;
    cursor: pointer;
    width: 21px;
    height: 21px;
    border: 1px solid #18b0b0;
    border-radius: 50%;
  }

  &:focus {
    outline: none;
  }
`
