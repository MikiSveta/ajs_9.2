import ErrorRepository from '../js/app';

test('return text', () => {
  const result = new ErrorRepository(400, 'Клиент не найден');
  const resultText = result.translate(400);
  expect(resultText).toEqual('Клиент не найден');
});

test('get error', () => {
  const result = new ErrorRepository(400, 'Клиент не найден');
  const resultText = result.translate(500);
  expect(resultText).toEqual('Unknown error');
});
