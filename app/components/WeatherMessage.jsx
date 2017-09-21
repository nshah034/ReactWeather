import React from 'react'

const WeatherMessage = (props) => {
  const { location, temp } = props
  return (
    <h3>It is { temp } in { location }</h3>
  )
}

module.exports = WeatherMessage
