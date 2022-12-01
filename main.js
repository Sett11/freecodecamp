// Only change code below this line

// Only change code above this line

class Thermostat {
  constructor(farengeit){
    this._tempInCelcius = ((5/9) * (farengeit-32))
  }
  get temperature(){
    return this._tempInCelcius
  }
  set temperature(newTemp){
    return this._tempInCelcius = newTemp
  }
}


const thermos = new Thermostat(76); // Setting in Fahrenheit scale
; // 24.44 in Celsius

console.log(thermos.setTemperature())