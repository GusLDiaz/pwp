$(document).ready(function() {
	const stories = ['story-0', 'story-1', 'story-2'],
		// var stories = $('div[id^="story-"]').hide(),
		storyCounter = 0;
	// flag = false;
	console.log(stories[storyCounter]); // your initial value
});
// the next line, of course, assumes you have an element with id="next"
$("#next").click(function() {
	storyCounter = (storyCounter + 1) % stories.length; // increment your storyCounter
	// the modulus (%) operator resets the storyCounter to 0
	// when it reaches the length of the array
	console.log(stories[storyCounter]); // the new incremented value
	// flag = true;
	// console.log(flag);
	$(storyActivate(storyCounter));
});
$("#prev").click(function() {
	//to allow for iteration through the loop, work with multiples of stories.length
	storyCounter = (storyCounter + 3) % stories.length;
	console.log(stories[storyCounter]);
	// flag = true;
	// console.log(flag);
	$(storyActivate(storyCounter));
});
$(document).getElementById("gus").addEventListener("click", function() {
	storyActivate(storyCounter);
});
$(document).getElementById("next").addEventListener("click", function() {
	storyActivate(storyCounter);
});
// var stories = $('div[id^="story-"]').hide(),
// 	 // i = 0;
function storyActivate(i) {
	if(i == 0) {
		$(".story").innerText = '<div class="card-body d-flex flex-column" id="story-0">\n' +
			'\t\t\t\t\t\t\t<h4 class="card-title order-1 d-block">ALABAMA SUNSHINE</h4>\n' +
			'\t\t\t\t\t\t\t<h6 class="card-subtitle mb-2 text-muted d-block order-2">When Two Was Too Many</h6>\n' +
			'\t\t\t\t\t\t\t<p class="card-text order-3 p-1" id="tbox">\n' +
			'\t\t\t\t\t\t\t\tand make up the bulk of the card\'s content.Tumeric pop-up lumbersexual, aliquip ea four dollar\n' +
			'\t\t\t\t\t\t\t\ttoast\n' +
			'\t\t\t\t\t\t\t\tdeep v palo santo XOXO air plant seitan green juice unicorn. YOLO magna sed nostrud craft beer,\n' +
			'\t\t\t\t\t\t\t\t+1\n' +
			'\t\t\t\t\t\t\t\tvinyl photo booth sriracha four dollar toast butcher. Tattooed taxidermy authentic, trust fund\n' +
			'\t\t\t\t\t\t\t\tforage\n' +
			'\t\t\t\t\t\t\t\tdreamcatcher narwhal lyft cloud bread kombucha lomo wolf pork belly. Schlitz hell of wolf\n' +
			'\t\t\t\t\t\t\t\tLetterpress marfa kinfolk raclette. Adipisicing fam quis, exercitation irure fixie food truck\n' +
			'\t\t\t\t\t\t\t\tvegan\n' +
			'\t\t\t\t\t\t\t\tcronut lyft ullamco. Listicle iPhone occaecat jianbing chia. Meh bespoke leggings post-ironic.\n' +
			'\t\t\t\t\t\t\t\tChartreuse ullamco deep v, kombucha hoodie gochujang ugh listicle beard subway tile pop-up\n' +
			'\t\t\t\t\t\t\t\tmicrodosing\n' +
			'\t\t\t\t\t\t\t\ttypewriter enim. You probably haven\'t heard of them hashtag fanny pack,\n' +
			'\t\t\t\t\t\t\t\tmumblecore church-key williamsburg incididunt pug biodiesel. Williamsburg green juice dolore\n' +
			'\t\t\t\t\t\t\t\tenamel\n' +
			'\t\t\t\t\t\t\t\tpin nisi artisan magna est cray proident poutine truffaut.\n' +
			'\t\t\t\t\t\t\t\t+1 vaporware\n' +
			'\t\t\t\t\t\t\t\tI bet you’re still using Bootstrap too…\n' +
			'\t\t\t\t\t\t\t\tThe Lab Bunny — One time beauty school suspendee, two time college dropout, full time lipstick\n' +
			'\t\t\t\t\t\t\t\thoarder. Libra. Non-smoker. DTF\n' +
			'\t\t\t\t\t\t\t</p>\n' +
			'\t\t\t\t\t\t\t<a href="#!" class="btn btn-success order-8">full story</a>\n' +
			'\t\t\t\t\t\t</div>';
	} else if(i == 1) {
		$(".story").innerText = '<div class="card-body d-flex flex-column" id="story-1">\n' +
			'\t\t\t\t\t\t\t<h4 class="card-title order-1 d-block">HONEY</h4>\n' +
			'\t\t\t\t\t\t\t<h6 class="card-subtitle mb-2 text-muted d-block order-2">When Two Was Too Many</h6>\n' +
			'\t\t\t\t\t\t\t<p class="card-text order-3 p-1" id="tbox">\n' +
			'\t\t\t\t\t\t\t\tand make up the bulk of the card\'s content.Tumeric pop-up lumbersexual, aliquip ea four dollar\n' +
			'\t\t\t\t\t\t\t\ttoast\n' +
			'\t\t\t\t\t\t\t\tdeep v palo santo XOXO air plant seitan green juice unicorn. YOLO magna sed nostrud craft beer,\n' +
			'\t\t\t\t\t\t\t\t+1\n' +
			'\t\t\t\t\t\t\t\tvinyl photo booth sriracha four dollar toast butcher. Tattooed taxidermy authentic, trust fund\n' +
			'\t\t\t\t\t\t\t\tforage\n' +
			'\t\t\t\t\t\t\t\tdreamcatcher narwhal lyft cloud bread kombucha lomo wolf pork belly. Schlitz hell of wolf\n' +
			'\t\t\t\t\t\t\t\tLetterpress marfa kinfolk raclette. Adipisicing fam quis, exercitation irure fixie food truck\n' +
			'\t\t\t\t\t\t\t\tvegan\n' +
			'\t\t\t\t\t\t\t\tcronut lyft ullamco. Listicle iPhone occaecat jianbing chia. Meh bespoke leggings post-ironic.\n' +
			'\t\t\t\t\t\t\t\tChartreuse ullamco deep v, kombucha hoodie gochujang ugh listicle beard subway tile pop-up\n' +
			'\t\t\t\t\t\t\t\tmicrodosing\n' +
			'\t\t\t\t\t\t\t\ttypewriter enim. You probably haven\'t heard of them hashtag fanny pack,\n' +
			'\t\t\t\t\t\t\t\tmumblecore church-key williamsburg incididunt pug biodiesel. Williamsburg green juice dolore\n' +
			'\t\t\t\t\t\t\t\tenamel\n' +
			'\t\t\t\t\t\t\t\tpin nisi artisan magna est cray proident poutine truffaut.\n' +
			'\t\t\t\t\t\t\t\t+1 vaporware\n' +
			'\t\t\t\t\t\t\t\tI bet you’re still using Bootstrap too…\n' +
			'\t\t\t\t\t\t\t\tThe Lab Bunny — One time beauty school suspendee, two time college dropout, full time lipstick\n' +
			'\t\t\t\t\t\t\t\thoarder. Libra. Non-smoker. DTF\n' +
			'\t\t\t\t\t\t\t</p>\n' +
			'\t\t\t\t\t\t\t<a href="#!" class="btn btn-success order-8">full story</a>\n' +
			'\t\t\t\t\t\t</div>';
	} else if(i == 2) {
		$(".story").innerText = '<div class="card-body d-flex flex-column" id="story-2">\\n\' +\n' +
			'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t<h4 class="card-title order-1 d-block">TEA</h4>\\n\' +\n' +
			'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t<h6 class="card-subtitle mb-2 text-muted d-block order-2">When Two Was Too Many</h6>\\n\' +\n' +
			'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t<p class="card-text order-3 p-1" id="tbox">\\n\' +\n' +
			'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\tand make up the bulk of the card\\\'s content.Tumeric pop-up lumbersexual, aliquip ea four dollar\\n\' +\n' +
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
			'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t\\thoarder. Libra. Non-smoker. DTF\\n\' +\n' +
			'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t</p>\\n\' +\n' +
			'\t\t\t\'\\t\\t\\t\\t\\t\\t\\t<a href="#!" class="btn btn-success order-8">full story</a>\\n\' +\n' +
			'\t\t\t\'\\t\\t\\t\\t\\t\\t</div>';

	}
}


// $(function cycle() {
// 	stories.eq().fadeIn(400)
// 		.delay(5000)
// 		.fadeOut(400, cycle);
//
// 	i = ++i % stories.length; // increment i,
// 	//   and reset to 0 when it equals divs.length
// })();


