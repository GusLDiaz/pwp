$(document).ready(function() {
	// var stories = ['alabama', 'garden', 'honey'],
	var stories = $('div[id^="story-"]').hide(),
		storyCounter = 0,
		flag = false;
	console.log(stories[storyCounter]); // your initial value

	// the next line, of course, assumes you have an element with id="next"
	$("#next").click(function() {
		storyCounter = (storyCounter + 1) % stories.length; // increment your storyCounter
		// the modulus (%) operator resets the storyCounter to 0
		// when it reaches the length of the array
		console.log(stories[storyCounter]); // the new incremented value
		flag = true;
		console.log(flag);
	});
	$("#prev").click(function() {
		storyCounter = (storyCounter - 1) % stories.length;
		console.log(stories[storyCounter]);
		flag = true;
		console.log(flag);
	});

// var stories = $('div[id^="story-"]').hide(),
// 	 // i = 0;

	$(function cycle() {
		stories.eq().fadeIn(400)
			.delay(5000)
			.fadeOut(400, cycle);

		i = ++i % stories.length; // increment i,
		//   and reset to 0 when it equals divs.length
	})();

});

