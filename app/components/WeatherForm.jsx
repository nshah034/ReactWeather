import React from 'react'

const WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault()
    const location = this.refs.location.value
    if(location.length > 0) {
      this.refs.location.value = ''
      this.props.onSearch(location)
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type='text' ref='location'/>
        <button>Get Weather</button>
      </form>
    )
  }
})

module.exports = WeatherForm
