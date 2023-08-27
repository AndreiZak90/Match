export default class Main {
  constructor(type) {
    this.type = type;
    this.distance = 1;
    this.power = false;
  }

  set stoned(value) {
    this.power = value;
  }

  get stoned() {
    return this.power;
  }

  set attack(value) {
    this.powerValue = value;
  }

  get attack() {
    const attack = this.powerValue * (1 - (this.distance - 1) / 10);
    if (this.power) {
      return attack - Math.log2(this.distance) * 5;
    }
    return attack;
  }
}
