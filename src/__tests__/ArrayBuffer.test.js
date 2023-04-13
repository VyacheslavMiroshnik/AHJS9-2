import ArrayBufferConverter from '../js/ArrayBuffer';
import getBuffer from '../js/getBuffer';

test('Test format charcode buffer to string', () => {
  const data = new ArrayBufferConverter(getBuffer());
  data.load();
  expect(data.toString()).toBe(
    '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}',
  );
});
