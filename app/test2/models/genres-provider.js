'use strict';

var Backbone = require('backbone');
var Genres = require('./genres');

module.exports = Backbone.Model.extend({

  urlRoot: "http://alpha.core.soundframework.com/api/0/rest/json/genre/find/query/",

  constructor: function() {
    this.initSubModels();
    Backbone.Model.prototype.constructor.apply(this, arguments);
  },

  initSubModels: function() {
    this.genres = new Genres();
  },

  parse: function(data) {
    this.genres.reset(data.rhos.genre);
  },

  getGenres: function() {
    return this.genres;
  }

});
