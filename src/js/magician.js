import MathTotal from './math';

export default class Magician extends MathTotal {
  constructor(name, attack) {
    super(name, 'Magician', attack);
    this.distanse = 1;
  }
}
