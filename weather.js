class Weather {
  constructor(city, state) {
    this.apiKey = '0ecd180f3a93c691beaa402089ec7f44';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    //const response = await fetch(`https://api.openweathermap.org/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
    //const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=0ecd180f3a93c691beaa402089ec7f44`);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state}&appid=${this.apiKey}`);
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}