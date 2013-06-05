---
title: Mosaic Layout
abstract: deploying Isotope for a fluid articles mosaic style grid
author: jg
date: 2013-06-02 23:50
template: article.jade
status: published
tags: meta, code, isotope
image: mosaic.jpg
---

You may have noticed the rather dramatic change to the front page! I've switched to using a clever bit of javascript code to generate the mosaic of articles, called [Isotope](http://isotope.metafizzy.co/).
I figured that since I may not update constantly, and the wide range of stuff covered, it makes more sense to have a tile based layout of articles rather that just a static date based one.

One rather wizzy feature is the live tags at the top that filter the articles to a subset based upon their content that works using either CSS3 or javascript depending upon what your browser supports.

In the event you have javascript intentionally disabled, or just want a more standard 'blog view', don't worry, the [Chronological](/chrono/) view has the same articles, but in a purely static layout; so you can use whichever you prefer.

Now, given this is (partly) a coding blog, onto how the code actually works.

<span class="more"></span>

OK, the basic setup of Isotope is actually pretty straightforward. 


```xml
<script src="http://code.jquery.com/jquery-1.10.0.min.js"></script>
<script src="/js/jquery.isotope.min.js"></script>
```
Obviously, I first need to add jquery and my local copy of the isotope library itself. 

```xml
<script>
	var $container = $('#container');
	$(window).load(function(){
	 $container.isotope({
		layoutMode: 'masonry',
		itemSelector: '.articlebox'
	 });
</script>

<section id="container">

	<div class="articlebox">
		<span>box content 1</span>
	</div>

	<div class="articlebox">
		<span>box content 2</span>
	</div>

	<div class="articlebox">
		<span>box content 3</span>
	</div>
	
</section>

```

Isotope needs an overall section to work on, and be told what sub elements are the 'blocks' that can be shuffled around; both are standard jquery element selectors - in this case, I just used a basic section to act as the overall container (that stretches the width of my main content area), and used my 'articlebox' class on individual articles that can be shuffled around as the window resizes. That's also a convenient class to hang my various bits of CSS on to apply borders and style the article summary text.

The most important part of the script, for me, was this:
```javascript
$(window).load(function(){
...
})
```

This means that the isotope changes don't happen until after *all* the images and fonts are loaded; using my usual 

```javascript
document.onload = function(){ 
...
}
```

or jquery's 'ready' event meant that isotope started work as soon as the DOM was ready, but the final layout of the images wasn't quite there yet, so I ended up with some pretty strange overlapping boxes at times - resizing the window fixed it, but it took me a little while to figure out why the article layout wasn't reliable on the first load. Now it waits for the full page to be ready, it works every time!

I also have a bunch of necessary CSS:

```css
.articlebox {
	margin: 20px;
	width: 512px;
}


/**** Isotope Filtering ****/

.isotope-item {
	z-index: 2;
}

.isotope-hidden.isotope-item {
	pointer-events: none;
	z-index: 1;
}

/**** Isotope CSS3 transitions ****/

.isotope,
.isotope .isotope-item {
	-webkit-transition-duration: 0.8s;
		 -moz-transition-duration: 0.8s;
			-ms-transition-duration: 0.8s;
			 -o-transition-duration: 0.8s;
					transition-duration: 0.8s;
}

.isotope {
	-webkit-transition-property: height, width;
		 -moz-transition-property: height, width;
			-ms-transition-property: height, width;
			 -o-transition-property: height, width;
					transition-property: height, width;
}

.isotope .isotope-item {
	-webkit-transition-property: -webkit-transform, opacity;
		 -moz-transition-property:    -moz-transform, opacity;
			-ms-transition-property:     -ms-transform, opacity;
			 -o-transition-property:      -o-transform, opacity;
					transition-property:         transform, opacity;
}

/**** disabling Isotope CSS3 transitions ****/

.isotope.no-transition,
.isotope.no-transition .isotope-item,
.isotope .isotope-item.no-transition {
	-webkit-transition-duration: 0s;
		 -moz-transition-duration: 0s;
			-ms-transition-duration: 0s;
			 -o-transition-duration: 0s;
					transition-duration: 0s;
}
```

The isotope specific CSS allows for much more efficient CSS3 transforms to do all the clever shifting about when filtering and sorting the mosaic - instead of using jquery - when the browser supports it. 

You can specify the 'masonry' column width when isotope is initialized; for example I could replace the code above with

```xml
<script>
	var $container = $('#container');
	$(window).load(function(){
	 $container.isotope({
		layoutMode: 'masonry',
		masonry: {
			columnWidth: 512
		},
		itemSelector: '.articlebox'
	 });
</script>
```

I chose to apply my sizes to the individual article boxes instead, and that means both that the articles themselves will always occupy a fixed width (rather than try and fill the whole space!), and that isotope uses that width of the first article as the column width. I may play with different article sizes later, so will probably revist this again.

To cover how the tag filtering works means first going into how I'm doing the whole tag filtering with the wintersmith system in the first place, as it's not part of the stock template but done with some fairly intense underscore sorting and filtering to create the static page in the first place.

That's another article in its own right, so I shall return to describe how the two systems interact another day. In the meantime, [Isotope](http://isotope.metafizzy.co/) has a whole bunch more features and modes than I'm using here, and is free and open source for non-commercial use. I can definitely recommend it if you need a layout a little more flexible than the standard grid of boxes.


