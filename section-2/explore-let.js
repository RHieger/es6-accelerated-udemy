// EXPLORE let KEYWORD:

// NOTE: This file is sourced from a JSBIN file that was exported
// to the Github gist from which this  file is directly derived.

/*
 **********************************************************************
 *                                                                    *
 * EXPLANATION:                                                       *
 *                                                                    *
 * In ES5, a variable was stored using the var keyword. With ES6,     *
 * if you wish to store a variable, we use the let keyword. var is    *
 * still available for backward compatibility.
 *                                                                    *
 **********************************************************************
*/

let name = 'Bobby';

if (true)  {
  
  let name = 'Max';
  
  console.log('\n' + name + '\n');
  
}

// NOTE: The main difference between var and let is that in the case of var, as
// used in ES5, there is global and local scope (within a function only). With
// let, there is block scope, which confines the access to a variable to code
// that occurs within the curly braces within which the variable occurs.

console.log(name + '\n');
