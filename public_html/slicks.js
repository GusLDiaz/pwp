$(document).ready(function() {
		var stories = ['story-0', 'story-1', 'story-2'],
			storyCounter = 0;
		// flag = false;
		console.log(stories[storyCounter]); // your initial value

// the next line, of course, assumes you have an element with id="next"
		$("#next").click(function() {
			storyCounter = (storyCounter + 1) % stories.length; // increment your storyCounter
			// the modulus (%) operator resets the storyCounter to 0
			// when it reaches the length of the array
			console.log(stories[storyCounter]); // the new incremented value
			// flag = true;
			// console.log(flag);
			storyActivate();
		});
		$("#prev").click(function() {
			//to allow for iteration through the loop, work with multiples of stories.length
			storyCounter = (storyCounter + 2) % stories.length;
			console.log(stories[storyCounter]);
			// flag = true;
			// console.log(flag);
			storyActivate();
		});
// $(document).getElementById("gus").addEventListener("click", function() {
// 	storyActivate(storyCounter);
// });
// $(document).getElementById("next").addEventListener("click", function() {
// 	storyActivate(storyCounter);
// });
// var stories = $('div[id^="story-"]').hide(),
// 	 // i = 0;
		function storyActivate() {
			var target = document.getElementById("story");
			if(stories[storyCounter] === "story-0") {
				$(target).html('<div class=\"card-body d-flex flex-column\" id=\"story-0\"><h4 class=\"card-title order-1 d-block\">ALABAMA SUNSHINE</h4><h6 class= \"card-subtitle mb-2 text-muted d-block order-2\"> When Two Was Too Many </h6><p class=\"card-text order-3 p-1\" id=\"tbox\">'+'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tand make up the bulk of the card\\\'s content.Tumeric pop-up lumbersexual, aliquip ea four dollar\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\ttoast\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tdeep v palo santo XOXO air plant seitan green juice unicorn. YOLO magna sed nostrud craft beer,\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\t+1\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tvinyl photo booth sriracha four dollar toast butcher. Tattooed taxidermy authentic, trust fund\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tforage\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tdreamcatcher narwhal lyft cloud bread kombucha lomo wolf pork belly. Schlitz hell of wolf\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tLetterpress marfa kinfolk raclette. Adipisicing fam quis, exercitation irure fixie food truck\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tvegan\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tcronut lyft ullamco. Listicle iPhone occaecat jianbing chia. Meh bespoke leggings post-ironic.\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tChartreuse ullamco deep v, kombucha hoodie gochujang ugh listicle beard subway tile pop-up\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tmicrodosing\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\ttypewriter enim. You probably haven\\\'t heard of them hashtag fanny pack,\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tmumblecore church-key williamsburg incididunt pug biodiesel. Williamsburg green juice dolore\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tenamel\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tpin nisi artisan magna est cray proident poutine truffaut.\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\t+1 vaporware\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tI bet you’re still using Bootstrap too…\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tThe Lab Bunny — One time beauty school suspendee, two time college dropout, full time lipstick\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\thoarder. Libra. Non-smoker. DTF\\n\' +\n</p><a href=\"#!\" class=\"btn btn-success order-8\">full story</a></div>');
			} else if(stories[storyCounter] === "story-1") {
				$(target).html('<div class=\"card-body d-flex flex-column\" id=\"story-0\"><h4 class=\"card-title order-1 d-block\">GUS MADE THIS WORK</h4><h6 class=\"card-subtitle mb-2 text-muted d-block order-2\">When Two Was Too Many</h6><p class=\"card-text order-3 p-1\" id=\"tbox\">The bulk of the card\\\'s content.Tumeric pop-up lumbersexual, aliquip ea four dollartoast deep v palo santo XOXO air plant seitan green juice unicorn. YOLO magna sed nostrud craft beer, +1vinyl photo booth sriracha four dollar toast butcher. Tattooed taxidermy authentic, trust fundforage dreamcatcher narwhal lyft cloud bread kombucha lomo wolf pork belly. Schlitz hell of wolfLetterpress marfa kinfolk raclette. Adipisicing fam quis, exercitation irure fixie food truckvegan	cronut lyft ullamco. Listicle iPhone occaecat jianbing chia. Meh bespoke leggings post-ironic.Chartreuse ullamco deep v, kombucha hoodie gochujang ugh listicle beard subway tile pop-up microdosing	typewriter enim. You probably haven\'t heard of them hashtag fanny pack,mumblecore church-key williamsburg incididunt pug biodiesel. Williamsburg green juice doloreenamel pin nisi artisan magna est cray proident poutine truffaut. +1 vaporware I bet you’re still using Bootstrap too…The Lab Bunny One time beauty school suspendee, two time college dropout, full time lipstick hoarder. Libra. Non-smoker. DTF</p></div>');
			} else if(stories[storyCounter] === "story-2") {
				$(target).html('<div class=\"card-body d-flex flex-column\" id=\"story-2\"><h4 class=\" card-title order-1 d-block\">TEA</h4><h6 class= \"card-subtitle mb-2 text-muted d-block order-2\" > When Two	Was Too Many </h6><p class=\"card-text order-3 p-1\" id=\"tbox\">and make up the bulk of the card\\\'s content.Tumeric pop-up lumbersexual, aliquip ea four dollar\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\ttoast\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tdeep v palo santo XOXO air plant seitan green juice unicorn. YOLO magna sed nostrud craft beer,\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\t+1\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tvinyl photo booth sriracha four dollar toast butcher. Tattooed taxidermy authentic, trust fund\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tforage\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tdreamcatcher narwhal lyft cloud bread kombucha lomo wolf pork belly. Schlitz hell of wolf\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tLetterpress marfa kinfolk raclette. Adipisicing fam quis, exercitation irure fixie food truck\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tvegan\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tcronut lyft ullamco. Listicle iPhone occaecat jianbing chia. Meh bespoke leggings post-ironic.\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tChartreuse ullamco deep v, kombucha hoodie gochujang ugh listicle beard subway tile pop-up\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tmicrodosing\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\ttypewriter enim. You probably haven\\\'t heard of them hashtag fanny pack,\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tmumblecore church-key williamsburg incididunt pug biodiesel. Williamsburg green juice dolore\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tenamel\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tpin nisi artisan magna est cray proident poutine truffaut.\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\t+1 vaporware\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tI bet you’re still using Bootstrap too…\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tThe Lab Bunny — One time beauty school suspendee, two time college dropout, full time lipstick\\n\' +\n' +
					'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\thoarder. Libra. Non-smoker. DTF\\n\' +\n</p></div>');
			}
		}
	});

