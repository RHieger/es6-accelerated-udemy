// EXPLORE const KEYWORD:

/*
 **********************************************************************
 *                                                                    *
 * EXPLANATION:                                                       *
 *                                                                    *
 * In ES5, there was no keyword to define a constant. With ES6,vv     *
 * if you wish to store a constant, use the const keyword.            *
 *                                                                    *
 **********************************************************************
*/

// NOTE: This file is sourced from a JSBIN file that was exported
// to the Github gist from which this file is directly derived:
//
// https://gist.github.com/RHieger/f00b097816b5246ac02a6d3ef030e82b

// Declare a constant:

// const age = 57;

// NOTE: const age commented out above so it may be refactored using best
// practice of using all caps for the designator of a constant, as follows:

const AGE = 57;

console.log('\nAGE: ' + AGE + '\n');

// This will throw an error as age is a defined constant. That is why it
// is commented out.

// AGE = 32;  

// console.log('AGE: ' + AGE + '\n');

// Declare an array constant:

const AGES = [57, 32, 28];

console.log('AGES: ' + AGES + '\n');

// Push a new element onto the AGES array. THIS IS POSSIBLE because
// arrays are reference types. This means that the constant holds a
// pointer to the memory location where the values are stored. The
// values themselves are not stored in the designator, and therefore
// no laws of immutability are being violated.

AGES.push(18);

console.log('AGES: ' + AGES + '\n');

// THE SAME HOLDS TRUE FOR A CONSTANT OBJECT, BECAUSE OBJECTS ARE
// REFERENCE TYPES.

const OBJ = {
  
  age: 57
  
};  // end OBJ


console.log('OBJ: ', OBJ, '\n');

console.log('Reassigning value of OBJ.age...\n')

// Reassign value of OBJ.age:

OBJ.age = 28;

console.log('OBJ: ', OBJ, '\n');
