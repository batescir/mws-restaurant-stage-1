* [Running/Playing the game](#howtoplay)
* [Scoring](#scoring)
* [Dependencies](#dependencies)
* [Project Instructions](#instructions)
* [Contributing](#contributing)

## Description

Reviews of New York restaurant based on location and quisine. Includes a map displaying location of the restaurant.

### What do I do from here?

In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`,



## Service worker

*

## Dependencies

* starter files provided by Udacity
* images (provided by udacity preojects)
* Mapbox - map used to display restaurant locations.
* https://leafletjs.com/ - javascript library for interactive maps.
* gulp - used to watch and render the sass files.
* Sass - simplfy the css for multiple screen sizes.

## Resources - files I referenced

* Arcade Game Walkthrough series by Mathew Conrad at
https://matthewcranford.com/

* Adding images to divs
https://stackoverflow.com/questions/7802744/adding-an-img-element-to-a-div-with-javascript

## Project Instructions

Udacity -

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

Udacity -

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.



# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.

### Resources
https://developers.google.com/web/fundamentals/primers/service-workers/registration

https://www.youtube.com/watch?v=BfL3pprhnms

//create requests to cache
https://developer.mozilla.org/en-US/docs/Web/API/Cache/add

https://alexandroperez.github.io/mws-walkthrough/?1.16.making-app-images-responsive


calc css -
https://www.w3schools.com/cssref/func_calc.asp

sw -
https://developers.google.com/web/fundamentals/primers/service-workers/
