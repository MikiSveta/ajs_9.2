import Team from '../js/team';
import { deamon, bowman, zombie } from '../js/character';

test('player add', () => {
  const result = new Team();
  result.add(deamon);
  const resultArray = result.toArray();
  expect(resultArray).toEqual([{ name: 'Deamon' }]);
});

test('player add error', () => {
  function resultError() {
    const result = new Team();
    result.add(deamon);
    result.add(deamon);
    return result.toArray();
  }
  expect(resultError).toThrow(new Error('Игрок уже в команде'));
});

test('players add', () => {
  const result = new Team();
  result.addAll(deamon, bowman, zombie);
  const resultArray = result.toArray();
  expect(resultArray).toEqual([{ name: 'Deamon' }, { name: 'Bowman' }, { name: 'Zombie' }]);
});
