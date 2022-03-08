import getBuffer from './getBuffer';

export default class ArrayBufferConverter {
  constructor(buffer) {
    this.buffer = buffer;
  }

  load(buffer) {
    this.buffer = getBuffer(buffer);
  }

  toString() {
    return String.fromCharCode(...new Uint16Array(this.buffer));
  }
}
