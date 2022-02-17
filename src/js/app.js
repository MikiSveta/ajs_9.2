export default class ErrorRepository {
  constructor(code, text) {
    this.code = code;
    this.text = text;
    this.map = new Map();
    this.map.set(this.code, this.text);
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}
