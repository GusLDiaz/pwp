<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<!--		<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>-->
		<!--		<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script><script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>-->
		<!--		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>-->

		<!-- Bootstrap Js/Dependencies: Jquery , Popper, bootstrap -->
		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
				  integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
				  crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
				  integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
				  crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
				  integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
				  crossorigin="anonymous"></script>
		<!--Font Awesome-->
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
				integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
		<!-- Slick: -->
		<!--		<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>-->
		<!--		<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.0/slick/slick.min.js"></script>-->
				<script type="text/javascript" rel="script" src="slicks.js"></script>

		<!--Css: bootstrap and local -->
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css">
		<link rel="stylesheet" href="desktop.css">

		<!--Favicon setup -->
		<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
		<link rel="icon" href="images/favicon.ico" type="image/x-icon">

		<!-- Your JavaScript Form Validator -->
		<script src="./validator.js"></script>
		<!-- Google Recaptcha -->
		<script src="https://www.google.com/recaptcha/api.js"></script>
		<title>GladLad</title>
	</head>
	<body class="whole">
		<!-- hero Section -->
		<section>
			<div class="container-fluid bgimg">
				<div class="row-fluid">
					<div class="column">
						<div class="container pt-5">
							<h1 class="display-3 text-center font-weight-bold">GUS LIAKOS</h1>
							<p class="lead text-center border bg-secondary">Human-Centered Design for Web Development</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section>
			<div class="container-fluid about mw-100 mh-100 justify-content-right">
				<!--			<img src="images/lionteeth.jpg" alt="ricky" class="rounded-circle col-xs-12 col-sm-12 col-md-6 row-sm-12">-->
				<div class="d-flex flex-row-reverse align-items-end border-warning">
					<blockquote class="blockquote w-50 bg-secondary rounded ">
						<p class="mb-0">
							Anyone who has lost track of time when using a computer knows the propensity to dream, the urge to
							make dreams come true and the tendency to miss lunch.
						</p>
						<footer class="blockquote-footer">
							<cite title="Source Title">Tim Berners-Lee</cite>
						</footer>
					</blockquote>
				</div>
				<div class="btn-group float-right">
					<button type="button" class="btn btn-secondary display-1 dropdown-toggle" data-toggle="dropdown"
							  aria-haspopup="true" aria-expanded="false">
						Find Me on:
					</button>
					<div class="dropdown-menu dropdown-menu-right">
						<button class="dropdown-item" type="button">Github   <i href="https://github.com/gusldiaz" target="_blank" class="fab fa-github"></i></button>
						<button class="dropdown-item" type="button">LinkedIn <i href="https://www.linkedin.com/in/gusliakos" class="fab fa-linkedin-in"> </i></button>
						<button class="dropdown-item" type="button">Medium</button>
					</div>
				</div>
			</div>
		</section>
		<div class="container-fluid">
			<div class="ml-md-2 ml-sm-1 redbar"></div>
		</div>
		<section>
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-4 mr-md-0 mr-sm-1 pr-0">
						<div id="carouselStories" class="carousel slide carousel-fade" data-interval="false"
							  data-ride="carousel">
							<div class="carousel-inner" role="listbox">
								<div class="carousel-item active">
									<img class="d-block w-100" src="images/flower.jpg" alt="First slide">
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="images/test-portrait.jpg" alt="Second slide">
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="images/test-honey.jpg" alt="Third slide">
								</div>
							</div>
							<a class="carousel-control-prev" href="#carouselStories" id="prev" role="button" data-slide="prev">
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="sr-only">Previous</span>
							</a>
							<a class="carousel-control-next" href="#carouselStories" id="next" role="button" data-slide="next">
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="sr-only">Next</span>
							</a>
						</div>
					</div>
					<div class="card col-sm-12 col-md-8 bg-secondary story" id="story">
						<div class="card-body d-flex flex-column" id="story-0">
							<h4 class="card-title order-1 d-block">ALABAMA SUNSHINE</h4>
							<h6 class="card-subtitle mb-2 text-muted d-block order-2">When Two Was Too Many</h6>
							<p class="card-text order-3 p-1" id="tbox">
								and make up the bulk of the card's content.Tumeric pop-up lumbersexual, aliquip ea four dollar
								toast
								deep v palo santo XOXO air plant seitan green juice unicorn. YOLO magna sed nostrud craft beer,
								+1
								vinyl photo booth sriracha four dollar toast butcher. Tattooed taxidermy authentic, trust fund
								forage
								dreamcatcher narwhal lyft cloud bread kombucha lomo wolf pork belly. Schlitz hell of wolf
								Letterpress marfa kinfolk raclette. Adipisicing fam quis, exercitation irure fixie food truck
								vegan
								cronut lyft ullamco. Listicle iPhone occaecat jianbing chia. Meh bespoke leggings post-ironic.
								Chartreuse ullamco deep v, kombucha hoodie gochujang ugh listicle beard subway tile pop-up
								microdosing
								typewriter enim. You probably haven't heard of them hashtag fanny pack,
								mumblecore church-key williamsburg incididunt pug biodiesel. Williamsburg green juice dolore
								enamel
								pin nisi artisan magna est cray proident poutine truffaut.
								+1 vaporware
								I bet you’re still using Bootstrap too…
								The Lab Bunny — One time beauty school suspendee, two time college dropout, full time lipstick
								hoarder. Libra. Non-smoker. DTF
							</p>
							<a href="#!" class="btn btn-success order-8">full story</a>
						</div>

					</div>
				</div>
		</section>
		<div class="container-fluid">
			<div class="redbar mx-1 mx-sm-0"></div>
		</div>
		<section>
			<div class="container-fluid frac" id="contact-section">
				<div class="container">
					<div class="row ml-1">
						<div class="column pt-5 mb-5 pb-5 col-12 darkfont">
							<h2>Contact</h2>
							<form id="contact-form" class="form-horizontal well">
								<div class="form-group">
									<label class="darkfont" for="name">Name</label>
									<div class="input-group border">
										<div class="input-group-addon">
										</div>
										<input type="text" class="form-control" id="contactFormName" name="contactFormName"
												 placeholder="Your name">
									</div>
								</div>
								<div class="form-group">
									<label class="darkfont " for="email">Email address</label>
									<div class="input-group border">
										<div class="input-group-addon">
										</div>
										<input type="email" class="form-control" id="contactFormEmail" name="contactFormEmail"
												 placeholder="Your email address">
									</div>
								</div>
								<div class="form-group">
									<label for="subject" class="darkfont">Subject</label>
									<div class="input-group border">
										<div class="input-group-addon">
										</div>
										<input type="text" class="form-control" id="contactFormSubject" name="contactFormSubject"
												 placeholder="Email subject line">
									</div>
								</div>
								<div class="form-group">
									<label for="message" class="darkfont">Message</label>
									<div class="input-group border">
										<div class="input-group-addon">
										</div>
										<textarea class="form-control" rows="5" id="contactFormMessage" name="contactFormMessage"
													 placeholder="Message for Me:"></textarea>
									</div>
								</div>
						</div>
					</div>
				</div>
				<div class="g-recaptcha" data-sitekey="6LcnQF0UAAAAAG1JqX3ciH02G9dMXi1DBpldx9t0"></div>
				<button class="btn btn-info" type="submit">Submit</button>
				<button class="btn btn-default" type="reset">Reset</button>
				</form>
				<!-- END CONTACT FORM-->
				<!-- for errors -->
				<div id="output-area"></div>
			</div><!-- /.col-sm-6 -->
		</section><!-- /.row -->
		<!--		<footer class="py-4 text-white">-->
		<!--			<div class="container">-->
		<!--				<a class="text-white"-->
		<!--					href="https://bootcamp-coders.cnm.edu/class-materials/jquery-validated-captcha-form/" target="_blank">Documentation</a>-->
		<!--				| <a class="text-white" href="https://github.com/rlewis2892/pwp-form-demo" target="_blank">GitHub</a>-->
		<!--			</div>-->
		<!--		</footer>-->
	</body>
</html>