// 3-currency.js

class Currency {
  constructor(code, sign, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (!/^[\p{Sc}\p{Sm}\p{So}]+$/u.test(sign) || sign == undefined) {
      throw new TypeError('Sign must be a string containing only Unicode currency symbols, math symbols, or other symbols');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._name = name;
    this._code = code;
    this._sign = sign;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  get sign() {
    return this._sign;
  }

  set sign(value) {
    if (!/^[\p{Sc}\p{Sm}\p{So}]+$/u.test(value)) {
      throw new TypeError('Sign must be a string containing only Unicode currency symbols, math symbols, or other symbols');
    }
    this._sign = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code}) [${this._sign}]`;
  }
}

export default Currency;
