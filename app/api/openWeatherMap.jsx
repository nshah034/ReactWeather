import axios from 'axios'

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=6c718a23ea7277b29ddbb78aad1ce653&units=metric'
module.exports = {
  getTemp: function(location){
    const encodedLocation = encodeURIComponent(location)
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`
    return axios.get(requestUrl).then(function(res){
      console.log(res)
      if(res.data.cod && res.data.message) {
        console.log('hello')
          throw new Error(res.data.message)
      } else {
        return res.data.main.temp
      }
    }, function(err){

      throw new Error(err.response.data.message)
    })
  }
}
