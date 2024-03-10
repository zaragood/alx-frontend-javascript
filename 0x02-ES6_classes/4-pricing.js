import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw TypeError('amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (typeof currency === 'object' && currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw TypeError('currency must be of type currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
