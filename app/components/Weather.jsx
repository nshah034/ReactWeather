import React from 'react'
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'
import openWeatherMap from '../api/openWeatherMap'

const Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    debugger; 
    const that = this
    this.setState({
      isLoading: true
    })
    openWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location,
        temp,
        isLoading: false
      })
    }, function(errorMessage) {
      that.setState({
        isLoading: false
      })
      alert(errorMessage)
    })
  },

  render: function () {
    const { isLoading, location, temp } = this.state
    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching Weather Info ...</h3>

      } else if(temp && location) {
        return <WeatherMessage location={location} temp={temp}/>
      }

    }
    return (
      <div>
      <h3>WEATHER COMPONENT</h3>
      <WeatherForm onSearch={this.handleSearch}/>
      { renderMessage() }
    </div>
    )
  }
})

module.exports = Weather
