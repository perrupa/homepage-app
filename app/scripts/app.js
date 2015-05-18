// 'use strict';

var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Marionette = require('backbone.marionette');

var App = Marionette.ItemView.extend({
	initialize() {
		console.log('App intializing...');
	}
})

module.exports = App;