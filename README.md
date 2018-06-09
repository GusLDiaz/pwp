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

### PWP Final Feedback
This was an ambitious and complex design plan, and it unfortunately needed some more time and work before being ready to go live. You've got a talent for front end and UI development... keep challenging yourself and keep going forward with CSS and JS in the future.

*Code Base*:
The following errors were found. These errors can also be found by using https://validator.w3.org.
- Extra closing `div` line 141... and other nested element inconsistencies throughout codebase. Some elements were not opened/closed properly.
- Buttons should not be children of `<a>` tags, nor should they have a `type="button"` (that is HTML4). See lines 76-78. To integrate a button-like styling, try using CSS or some of the built-in Bootstrap classes.
- Incorrect use of `xmlns` in the opening `<html>` tag. This is deprecated and only relevant for HTML4/XHTML 1.1. This may have been autogenerated by PhpStorm, but it should be removed. See: https://www.w3.org/TR/1999/WD-xhtml1-19991124/
- Lines 156, 165, 174, 183: `for` attribute should match the id of the corresponding `<input>` elements.
- Dead/commented-out code in both the head and body. I see commented-out code containing links to my own GitHub repository and to bootcamp-coders. This was pulled straight from my Form Demo, which was not intended for direct copy/paste. This is way unprofessional.

*Git Commits*: Nice work integrating good Git workflow.

*Mobile-First Responsiveness*:  I've tested your page using devtools, Chrome on Linux, and Chrome & Firefox on Android. Overall the page layout is responsive, but needs refinement for a truly professional look. There is some jumpy behavior going on in the slider on mobile, and this is likely due to some image sizing issues.

*Design, Content, &amp; Overall Presentation*: This was an ambitious and tricky page design that you've attempted. You have a start here - but it needs some work and refinement before it can be considered professional-level work. Overall this page could benefit from design simplicity. There is also still placeholder "ipsum" content on the page after going live, and *unfortunately this is considered an incomplete project* due to that. This sort of thing is generally unacceptable for any kind of professional work. See: https://bootcamp-coders.cnm.edu/projects/personal/rubric/

*Contact Form*: I tested your form twice: on 6/6 and on 6/8. Your form isn't working. The form content is not being passed through the jQuery validate function. To debug start there.

Unfortunately due to the incompleteness of the project and the errors in the codebase, your final PWP only qualifies for [Tier I](https://bootcamp-coders.cnm.edu/projects/personal/rubric/). Your cumulative PWP score including all Milestones is 20/40 points (50%). Please bear in mind that 20/40 is considered the minimum passing grade for the PWP project as a whole.

- Milestone 1 - 20%: Tier II 40(0.2) = 8
- Milestone 2a - 20%: Tier II 20(0.2) = 4
- Milestone 2b - 10%: Tier III 30(0.1) = 3
- Milestone 3 - 50%: Tier I 10(0.5) = 5
