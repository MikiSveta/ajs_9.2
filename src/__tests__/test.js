import ArrayBufferConverter from '../js/app';

test('ArrayBufferConverter', () => {
  const bufferArr = new ArrayBufferConverter();

  bufferArr.load('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');

  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(bufferArr.toString()).toEqual(result);
});
