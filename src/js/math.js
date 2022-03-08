import Character from './character';

export default class MathTotal extends Character {
  constructor(name, attack, distanse) {
    super(name, attack, distanse);
    this.stoned = false;
  }

  set attack(value) {
    this.baseAttack = value;
  }

  get attack() {
    let attack = this.baseAttack - (this.distanse - 1) * 10;

    if (this.stoned) {
      attack -= Math.log2(this.distanse) * 5;
    }

    return attack > 0 ? Math.round(attack) : 0;
  }

  set stoned(value) {
    this.stonedTotal = value;
  }

  get stoned() {
    return this.stonedTotal;
  }
}
