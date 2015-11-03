// document.getElementById('click-me').onclick=function(){
	// alert('test');
// }
// document refers to the DOM, the map that the browser creates of the html.  
// This is important because we need jto look for the ID in this file
// getElementById is going to the DOM and is going to look through line by line until it finds click-me
// .onclick is going to listen for a click even to occur (this is int he standard JS library)
// All the function does is alert out a string.
// Alternatively -- could look like this:

// .....=testAlert
// function testAlert(){
	// alert('test');
// }


// 1. caputure click event (onclick)
// 2. get the user input
// 3. display results


document.getElementById('some-button').onclick=function(){
	var str = document.getElementById('some-input').value
	// now we want to display the output
	alert(str)
	// OR, we can have just this one line below:
	alert(document.getElementById('some-input').value)
	// but it's cleaner to do it the first way and store the data entered by the user
}

// whatever was entered is now stored as str. so if you entered cat str = cat.

