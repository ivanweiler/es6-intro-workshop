/**
 * Quick demonstration of ES6 syntax and functionalities
 */

/**
 * Which types of data exists in JS? (Boolean, Number, String, Array, Object)
 *
 * var, let, const
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

var num = 101;
var str = 'Inchoo';
var bul = true;

str = 'Lol';
num = 105;

const con1 = 2;

if(con1 == 2) {
  let num = 102; //let only exists insite brackets
  console.log(num);
}
console.log(num);

// con1 = 5 // throws error, we can't change constant

const con2 = { a: 2, b:3 }; //new Object(), {}
con2.a = 1;
con2.c = 4;

console.log(con2); // we can't change constant if Array or Object

/**
 * Array
 *
 */

var arr = [5, 6, 7, 8, 9]; //new Array(), []
// 0:5, 1:6, 2:7 ..

console.log(arr); // check __proto__ in console to see which methods we can use with Array


for(var i = 0; i<arr.length; i++) {
  console.log(arr[i]);
}

console.log('forEach example:')
arr.forEach(function (value, i) {

  console.log(value);
});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
var b = arr.map(function (value) {
  return String(value) + ' Inchoo';
});
console.log(b);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
var samoParni = arr.filter(function(value) {
  return (value % 2 == 0);
});
console.log(samoParni);


//check other existing Array functions

/**
 * Destructing assigment, spread, rest operators
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

var [a1, a2, ...rest] = arr; //[5, 6, 7, 8, 9]

/* isto kao:
var a1 = arr[0];
var a2 = arr[1];
var rest = ono sto je ostalo !!
*/

console.log(a1);
console.log(rest);

//same thing on Objects

const person = { name: 'Ivan Weiler', gender: 'Male', age: 37 };

var {name, gender} = person;
console.log(name);

//merge 2 objects with this syntax
const tools = { computer: 'Linux', editor: 'PhpStorm' };

const merge2objects = {...person, ...tools};  //same as Object.assign()
console.log(merge2objects);


/**
 * Arrow Functions
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 *
 * How can we write function in JS?
 */

function x1(name, address) {
  return name + ', ' + address;
}

console.log( x1('Inchoo', 'Trg slobode 6') );


var x2 = function(name, address, ...rest) {
  console.log(rest);
  return name + ', ' + address;
}

x2('Inchoo', 'Trg slobode 6', 'Osijek', 'Croatia');

var x3 = (name, address) => {
  return name + ', ' + address;
}

var x4 = (name, address) => name + ', ' + address;

console.log( x4('Inchoo', 'Trg slobode 6') );



/**
 * Import/export statements, Class
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

//class Company is imported from lib.js
import { Company } from './lib.js';

/*
class Company {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  toString() {
    //return this.name + ', ' + this.address;
    return `${this.name}, ${this.address}`;
  }
}
*/

var company1 = new Company('Inchoo', 'Trg slobode 6');
var company2 = new Company('Prototype', 'Unknown bb');

console.log(company1, company2);
console.log(company1.toString());


/**
 * extending class && super
 */

class Inchoo extends Company {
  constructor() {
    super('Inchoo', 'Trg slobode 6');
    this.town = 'Osijek';
  }

  toString() {
    return super.toString() + ', ' + this.town;
  }
}

var inchoo = new Inchoo();
console.log(inchoo.toString());


/**
 * 1. Create Toggle class that takes link selectors (Link 1, Link 2) and div selectors (Test 1, Test 2)
 * and toggles them on link click
 * 2. Separate Toggle class to separate toggle.js and import it on top of this file
 */

class Toggle {
  constructor(links, content) {
    //get links
    this.links = document.querySelectorAll(links);
    //get divs
    this.divs = document.querySelectorAll(content);

    this.links.forEach((el,i) => {
      el.addEventListener('click', (e) => {
        this.toggle(i);
      });
    });

    this.toggle(0);
  }
  toggle(i) {
    //bad code, fixed on 2 links for simplicity, make it work on any no of links/divs
    if (i == 0) {
      this.divs[0].style.display = 'block';
      this.divs[1].style.display = 'none';
    } else {
      this.divs[0].style.display = 'none';
      this.divs[1].style.display = 'block';
    }
  }
}

var contentToggle = new Toggle('a.nav-link', 'div.toggle');


// AMD vs CommonJS vs ES6 import? http://exploringjs.com/es6/ch_modules.html#_ecmascript-5-module-systems

// Template/string literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals


/**
 * For next time:
 * 1. Finish Toggle task
 * 2. Examine fetch() and Promises
 * 3. Play with Babel :) https://babeljs.io/repl/  - transforms ES6 syntax to ES5
 *
 */


//throw 'die';