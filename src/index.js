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

var str = 'Inchoo';
var bul = true;
var num = 101;

const const1 = true;
//const1 = false; // throws error, we can't change constant

if(const1 == true) {
  //let variable only exists inside its brackets
  let num = 102;
  console.log(num);
}
console.log(num);
//throw 'die';

const const2 = { a: 2, b:3 }; //new Object(), {}
const2.a = 1;
const2.c = 4;

console.log(const2); // we CAN change constant if Array or Object
//throw 'die';


/**
 * Template/string literals
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */

var newString = str + ' waz here!';
console.log(newString);


/**
 * Array
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

var arr = [5, 6, 7, 8, 9]; //new Array(), []
console.log(arr); // check __proto__ in console to see which methods we can use with Array

for(var i = 0; i < arr.length; i++) {
  //console.log(arr[i]);
}

arr.forEach(function (value, i) {
  //console.log(value);
});
//throw 'die';


var b = arr.map(function (value) {
  return String(value) + ' Inchoo';
});
console.log(b);

var onlyEvenNumbers = arr.filter(function(value) {
  return (value % 2 == 0);
});
console.log(onlyEvenNumbers);
//throw 'die';

//@todo: check other existing Array functions

/**
 * Destructing, spread
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

var [a1, a2, ...rest] = arr; //[5, 6, 7, 8, 9]
console.log(a1, a2, rest);

/* same as:
var a1 = arr[0];
var a2 = arr[1];
var rest = ono sto je ostalo !!
*/

//same thing on Objects

const person = { name: 'Ivan Weiler', gender: 'Male', age: 37 };

var {name, gender} = person;
console.log(name, gender);

//var {name: ime, gender: marka} = person;

//merge 2 objects with this syntax
const tools = { computer: 'Linux', editor: 'PhpStorm' };
const mergedObjects = {...person, ...tools};  //same as Object.assign()
console.log(mergedObjects);


/**
 * Arrow Functions, rest operator, default argument value
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
 *
 * How can we write function in JS?
 */

function x1(name, address) {
  return name + ', ' + address;
}

var x2 = function(name, address = 'N/A', ...rest) {
  console.log(address);
  console.log(rest);
  return name + ', ' + address;
}

x2('Inchoo', 'Trg slobode 6', 'Osijek', 'Croatia');
//x2('Inchoo');

var x3 = (name, address) => {
  return name + ', ' + address;
}

//@me: show short syntax, mention bind/scope difference with arrow functions

/**
 * Class, Import/export statements
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 *
 * AMD vs CommonJS vs ES6 import: http://exploringjs.com/es6/ch_modules.html#_ecmascript-5-module-systems
 */

//class Company is imported from lib.js; how is this loaded??
//import { Company } from './lib.js';

class Company {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  toString() {
    return this.name + ', ' + this.address;
    //return `${this.name}, ${this.address}`;
  }
}


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



import Toggle from './lib.js';
var contentToggle = new Toggle('a.nav-link', 'div.toggle');


/**
 * Fetch and Promises, CORS
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 *
 */

const apiEndpoint = 'http://magento2.inchoo4u.net/rest/V1/products?searchCriteria[page_size]=20';

fetch(apiEndpoint)
  .then(function(response) {
    console.log('Recieved response status & headers');
    return response.json();
  })
  .then(function(json) {
    console.log('Recieved full response');
    console.log(json);
  });


/*
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    //do something
    //do something else
    //do something else
    console.log(xhr.response);
  }
};
xhr.open('GET', apiEndpoint, true);
xhr.send();

function callMagentoApi(url) {
  return new Promise((resolve, reject) => {
     const xhr = new XMLHttpRequest();
     xhr.open('GET', url);
     xhr.onload = () => resolve(xhr.responseText);
     xhr.onerror = () => reject(xhr.statusText);
     xhr.send();
   });
}
*/



// What is SPA, PWA, server-side rendering, ..
// http://luthien.netlify.com - Adrian Bece, real Magento API SPA

/**
 * Tools
 *
 * npm, webpack, babel
 *
 * https://babeljs.io/repl/
 */

// npm init
// npm run test
// npm install --save-dev webpack webpack-cli babel-loader babel-preset-env
// npm install --save bootstrap jquery popper.js

// npm install --save-dev webpack-dev-server

/**
 * @todo:
 *
 * Examine fetch() and Promises in more detail
 * Codecademy - Learn ReactJS: Part I && II
 *
 */