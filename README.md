# AngularJS Phone Catalog Tutorial Application Coded in Backbone

## Overview

This tutorial builds a web application using Backbone.js. This tutorial is based on the [AngularJS PhoneCat Tutorial App](http://docs.angularjs.org/tutorial) and mirrors the functionality of each of the first 10 steps.

The full tutorial can be found on [my blog](http://204nocontent.me/i-coded-the-angular-tutorial-app-in-backbone-and-it-took-260-more-code).

## Prerequisites

### Git

- [Set up](http://help.github.com/articles/set-up-git)
- [Git home](http://http://git-scm.com/) (download, documentation)

### Node.js

- [Get Node.js](http://http://nodejs.org/download/).

## Workings of the application

- A basic Node app serves static files and JSON.
- All Backbone app files are located in /public/javascripts.
- /public/javascripts/lib contains Backbone.js and its dependencies.  
- /public/javascripts/jst.js is a templating dictionary automatically created by Node (you can just ignore it).

## Commits / Tutorial Outline

You can check out any point of the tutorial using
    git checkout step-?

To see the changes between any two lessons use the git diff command
    git diff step-?..step-?

### step-0

Basic structure for a new Backbone app.

### step-1

Render a static phone list using a Backbone template.

### step-2

Create Backbone models and collection to represent a list of phones.

### step-3

Add interactive text search to phones.

### step-4

Add the ability to order phones.

### step-5

Fetch phones data using a JSON API.

### step-6

Fill out the phones template with images and links.

### step-7

Route the phone details view.

### step-8

Fill out the phone details view.

### step-9

Add a custom view helper to create checkmarks.

### step-10

Replace the phone's main image when a user clicks on a tumbnail.




