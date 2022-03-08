import Magician from '../js/magician';
import Daemon from '../js/daemon';

describe('Magician()', () => {
  test('return attack with stoned', () => {
    const merlin = new Magician('Merlin');
    merlin.attack = 100;
    merlin.distanse = 2;
    merlin.stoned = true;
    const result = 85;
    expect(merlin.attack).toBe(result);
  });

  test('return attack without stoned', () => {
    const merlin = new Magician('Merlin');
    merlin.attack = 100;
    merlin.distanse = 2;
    merlin.stoned = false;
    const result = 90;
    expect(merlin.attack).toBe(result);
  });

  test('return attack 0', () => {
    const merlin = new Magician('Merlin');
    merlin.attack = 10;
    merlin.distanse = 2;
    merlin.stoned = true;
    const result = 0;
    expect(merlin.attack).toBe(result);
  });
});

describe('Daemon()', () => {
  test('return attack with stoned', () => {
    const merlin = new Daemon('Merlin');
    merlin.attack = 100;
    merlin.distanse = 3;
    merlin.stoned = true;
    const result = 72;
    expect(merlin.attack).toBe(result);
  });

  test('return attack without stoned', () => {
    const merlin = new Daemon('Merlin');
    merlin.attack = 100;
    merlin.distanse = 3;
    merlin.stoned = false;
    const result = 80;
    expect(merlin.attack).toBe(result);
  });

  test('return attack 0', () => {
    const merlin = new Daemon('Merlin');
    merlin.attack = 10;
    merlin.distanse = 2;
    merlin.stoned = true;
    const result = 0;
    expect(merlin.attack).toBe(result);
  });
});
