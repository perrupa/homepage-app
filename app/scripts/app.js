// 'use strict';

var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');

class App extends Marionette.LayoutView {
	initialize() {
		console.log('App intializing...');
		this.loadContent();
	}

	loadContent () {
		this.$(".page-content").html("Content Loaded.");
	}
}

module.exports = App;