// EXPLORE (FAT) ARROW FUNCTIONS:


/*
 **************************************************************
 *                                                            *
 * OLD STYLE FUNCTION EXAMPLE:                                *
 *                                                            *
 * function fn()  {                                           *
 *                                                            *
 *     console.log('Hello!');                                 *
 *                                                            *
 * }                                                          *
 *                                                            *
 * fn();                                                      *
 *                                                            *
 **************************************************************
*/

// NOTE: This file is sourced from a JSBIN file that was exported
// to the Github gist from which this file is directly derived:
//
// https://gist.github.com/RHieger/d1dd2d322a14dc3ec4dd7a5ca9034b6c

//EQUIVALENT NEW STYLE OF FUNCTION - (FAT) ARROW FUNCTION:

/*
var fn = () => {
  
  console.log('\nHello!\n');
  
} // end fn()
*/

// NOTE: Above code commented out to allow for refactoring. When
// function body is comprised of a single command, as in this
// case, there is an equivalent shorthand that dispenses with
// the curly braces, as shown below:

// The results should be identical.

// var fn = ()  => console.log('\nHello!\n');

// NOTE: Commented out once again for refactoring. Since our code
// consists of a function body with only one command, and a known
// property of all functions is that they may be used to return
// a value the code may be refactored once again as follows:

// Call fn():

// fn(); // commented out for refactoring:

var fn = () => '\nHello!\n';

// Now just log the function itself to the console, with identical
// results:

console.log( fn() );

// ANOTHER EXAMPLE OF SYNTAX EMPLOYED WHEN THERE ARE ARGUMENTS:

/*
var fn2 = (a, b) => {
  
  return a + b;
  
};
*/

// ABOVE COMMENTED OUT FOR THIS EQUIVALENT SHORTENED VERSION:

var fn2 = (a, b) => a + b;

console.log( fn2(5, 6) );

console.log('\n');


// ANOTHER VARIANT SYNTAX With A SINGLE ARGUMENT:

// var fn3 = (a) => a + 5;

// NOTE: Above syntax commented out in favor of shortest possible syntax. When
// there is only one argument, the parentheses may be omitted altogether as in
// the following refactoring:

var fn3 = a => a + 5;

console.log( fn3(3) );

console.log('\n');
