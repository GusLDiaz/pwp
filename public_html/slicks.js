 $(document).ready(function(){
	var stories = ['alabama', 'garden', 'honey'],
		counter = 0;

	console.log(stories[counter]); // your initial value

	// the next line, of course, assumes you have an element with id="next"
	$("#next").click(function () {
		counter = (counter + 1) % stories.length; // increment your counter
		// the modulus (%) operator resets the counter to 0
		// when it reaches the length of the array

		console.log(stories[counter]); // the new incremented value
	});
	$("#prev").click(function(){
		counter = (counter - 1) % stories.length;
		console.log(stories[counter]);
	});
	$("#storyActive")
});

var story = Object();
	story.title = "default Title";

var story1 = Object();

var story2 = Object();


