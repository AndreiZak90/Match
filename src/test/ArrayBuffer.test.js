import getBuffer from "../js/ArrayBuffer/getBufer";
import ArrayBufferConverter from "../js/ArrayBuffer/BufferClass";

test("test ArrayBuffer to string", () => {
  const buffer = getBuffer();
  const convert = new ArrayBufferConverter();
  convert.load(buffer);

  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(convert.toString()).toEqual(result);
});
