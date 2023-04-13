export default class ArrayBufferConverter {
  constructor(buffer) {
    this.buffer = buffer;
  }

  load() {
    this.bufferView = new Uint16Array(this.buffer);
  }

  toString() {
    let stringFromBuffer = '';
    this.bufferView.forEach((element) => {
      stringFromBuffer += String.fromCharCode(element);
    });

    return stringFromBuffer;
  }
}
