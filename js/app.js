'use strict';
console.log ('Hello from the js file');


// 1) As a user, I would like to display three unique products by chance 
// so that the viewers can pick a favorite.

// Create a constructor function that creates an object 
// associated with each product, and has the following properties:
// Name of the product
// File path of image
// Times the image has been shown

// Create an algorithm that will randomly generate three unique 
// product images from the images directory and display them 
// side-by-side-by-side in the browser window.

// For each of the three images, increment its property of times 
// it has been shown by one.

// Attach an event listener to the section of the HTML page 
// where the images are going to be displayed.

// Once the users ‘clicks’ a product, generate three new products 
// for the user to pick from.



// 2.) As a user, I would like to track the selections made by viewers 
// so that I can determine which products to begin production on.

// In the constructor function define a property to hold the number 
// of times a product has been clicked.

// After every selection by the viewer, update the newly added
//  property to reflect if it was clicked.

// 3.)As a user, I would like to control the number of rounds a user
//  is presented with so that I can control the voting session 
//  duration.

// By default, the user should be presented with 25 rounds of 
// voting before ending the session.

// Keep the number of rounds in a variable to allow the number 
// to be easily changed for debugging and testing purposes.



// 4.) As a user, I would like to view a report of results after 
// all rounds of voting have concluded so that I can evaluate 
// which products were the most popular.

// Create a property attached to the constructor function itself 
// that keeps track of all the products that are currently being 
// considered.

// After voting rounds have been completed, remove the event 
// listeners on the product.

// Add a button with the text View Results, which when clicked 
// displays the list of all the products followed by the votes 
// received, and number of times seen for each. 
// Example: banana had 3 votes, and was seen 5 times.

// NOTE: Displayed product names should match the file name for 
// the product. Example: the product represented with dog-duck.jpg 
// should be displayed to the user as exactly “dog-duck” when 
// the results are shown.

