import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("NGN", '\u20A6', "Naira"))
console.log(p);
console.log(p.displayFullPrice());
