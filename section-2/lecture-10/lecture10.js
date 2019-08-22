// EXPLORE Arrow Functions AND this KEYWORD:

// NOTE: This file and its linked companions are derived from a
// JS Bin project that was exported to a Github Gist found at
// this URL:
//
// https://gist.github.com/RHieger/574ce4659aa868c5b818c10250552064

// In order to test this mini-app out on a local machine, simply navigate to its
// folder using the 'file:///' syntax, in this case, the following path:

// 'file:///Volumes/LaCie\ SSD/es6-accelearated-udemy/section-2/lecture-10/index.html'

// To view the output from the button clicks, open the JavaScript console.

// CONTRAST OLD STYLE AND FAT ARROW FUNCTIONS TO DEMONSTRATE ISSUE
// WITH 'this' KEYWORD IN OLD STYLE FUNCTIONS:

// Select Button in HTML Body:

var button = document.querySelector('button');

// Select Button 2 in HTML Body:

var button2 = document.getElementById('button2');

// Declare New Fat Arrow Function:

var fn2 = () => console.log(this);

// Declare Old Style function for demonstration:

function fn()  {
  
  // Log to console the window object within which this
  // function exists. This will log everything to the console
  // which resides within the global scope.
  
  console.log(this);
  
}  // end fn()

// Add event listener for button:

button.addEventListener('click', fn);

// Add event listner for button 2:

button2.addEventListener('click', fn2);

// NOTE: Because function fn is now tied to the above click
// event listener on the button, its scope now shifts to the
// local scope of HTMLButtonElement, NOT the global window
// object that we might expect.

// This behavior is unexpected as most languages would not
// change their reference point according to what calls the
// function. Expected behavior would be that the global window
// object, NOT the HTMLButtonElement. This behavior does not
// occur with the new Fat Arrow Functions.
