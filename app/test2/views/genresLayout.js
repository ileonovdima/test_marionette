'use strict';

var Marionette = require('backbone.marionette');
var GenresView = require('./genres');
var QueryView = require('./query');
var template = require('./genresLayout.html');

module.exports = Marionette.LayoutView.extend({

  template: template,

  regions: {
    query: '.js-query',
    list: '.js-list'
  },

  initialize: function() {
    this.collection = this.model.getGenres();
  },

  onRender: function() {
    this.query.show(new QueryView({ model: this.model }));
    this.list.show(new GenresView({ collection: this.collection }));
  }

});
