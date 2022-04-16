// Only change code below this line
class Thermostat {
  constructor(F) {
    this.F = F;
  }
  set temperature(C) {
    let F = (C * 9.0) / 5 + 32;
    this.F = F;
  }
  get temperature() {
    return (5 / 9) * (this.F - 32);
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
