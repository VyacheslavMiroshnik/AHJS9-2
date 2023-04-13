export default function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(input.length * 2);
    const bufferView = new Uint16Array(buffer);
    input.split('').map((el, index) => {
      bufferView[index] = el.charCodeAt(0);
      return null;
    });
    return buffer;
  })(data);
}
