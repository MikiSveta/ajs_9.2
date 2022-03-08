import MathTotal from './math';

export default class Daemon extends MathTotal {
  constructor(name, attack) {
    super(name, 'Daemon', attack);
    this.distanse = 1;
  }
}
