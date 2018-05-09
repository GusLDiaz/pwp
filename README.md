# pwp
personal website project

### Milestone 1 Feedback
It actually looks like much of the feedback I had for the "Fly with Me" project can apply to this idea as well. Excellent work here on outlining your purpose, audience, goal and persona. And you have a very cool idea, and I'm simultaneously excited about it but apprehensive regarding scope: 

- Like we discussed, having a proper blogspace falls out-of-scope for this project as this would require a creating a back-end, or utilization of blogging software like WordPress. But it sounds like you understand this point.
- I anticipate that you'll definitely need to integrate some 3rd party JavaScript solutions to facilitate display of your photostories. I'd aim to keep your content and UI designs simple for sake of time, as there is plenty of room for custom-tailored and refined JS-driven interactivity and design that you may not have time for.
- Again, I advise keeping content to a very reasonable scale due to time constraints. No  interactive functionality will be included in this site to manage media here - it will all need to be done/built by you by hand.

Your project is set up correctly - but the HTML is way off. The same issues as with the "Fly with Me" project. See Edits &amp; Suggestions below.

Your Milestone 1 passes at [Tier II](https://bootcamp-coders.cnm.edu/projects/personal/rubric/) - due to coding errors. You are now clear to begin work on Milestone 2&alpha; - really looking forward to seeing this project take shape.

#### Edits &amp; Suggestions
- Review the basic HTML document structure here: https://bootcamp-coders.cnm.edu/class-materials/html/. Your HTML is missing a DOCTYPE, `<head>` and `<body>`. All of the HTML you created should go inside the `<body>`.
- There are issues with your indentation and formatting - be careful to keep this correct. When a div closes, open the next one on a separate line. Not on the same line.

### Milestone 2a Feedback
Per our in-person conversation on 5/7/18 regarding project specs and revisions: 
- Project needs revision as-is. Current standing is [Tier II](https://bootcamp-coders.cnm.edu/projects/personal/rubric/). Please have revisions completed by Wed 5/9 8:00am for a [Tier III](https://bootcamp-coders.cnm.edu/projects/personal/rubric/) grade and approval to begin development.

### Updated Milestone 2a Feedback
Nice work with the wireframe revisions - these are clear and will provide you with a much better guide for your development process.

There are some significant differences in your layout between the mobile and desktop versions. In order to be able to achieve this look successfully you'll need to be well-versed with CSS `@media` queries and more intermediate-advanced level Bootstrap column sizing. This should be fun, but could be quite challenging - don't hesitate to simplify if you need to. It's also important that you build your front-end using a true mobile-first/progressive enhancement approach - this is industry standard.

For your PhotoStories I think the [FancyBox](http://fancyapps.com/fancybox/3/) JavaScript plugin could be useful for you. It's good quality, fully-responsive, customizable, and fairly easy to integrate.

Pagination will require custom JavaScript, and I'd recommend a 3rd party plugin to help. You'll likely need to utilize a JSON object to feed your content into the front end and cycle on click. Have a look at the following: http://pagination.js.org/. If this proves too daunting or difficult, I recommend simplifying your content and layout.  

Last but not least, [FontAwesome](https://fontawesome.com/) is a good quality free library for including iconography.

You make want to read ahead regarding the contact form integration - and that documentation is here: https://bootcamp-coders.cnm.edu/class-materials/jquery-validated-captcha-form/ 

Again, nice work redefining your direction. Keep things simple, it's better to build something simple and excellent than try for something complex that's poorly executed. Your Milestone 2a passes at [Tier II](https://bootcamp-coders.cnm.edu/projects/personal/rubric/). You are clear to begin development on your PWP.

**We'll be building PWP in a file named index.php inside of /public_html**. Please note that no publicly-accessible site files should live outside of the /public_html directory. Remember use an organized and standards-compliant directory structure to house all images, JavaScript, CSS, etc. We are done with the /documentation directory for now!
