export default class Currency {
  constructor(code, name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    } else {
      this._code = code;
      this._name = name;
    }
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw TypeError('code must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
