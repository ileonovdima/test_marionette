'use strict';

var Marionette = require('backbone.marionette');
var template = require('./query.html');

module.exports = Marionette.ItemView.extend({

  template: template,

  xhr: null,

  events: {
    'keyup [name=query]': 'onQueryKeyup',
  },

  initialize: function() {
    this.collection = this.model.getGenres();
  },

  onQueryKeyup: function(e) {
    var query = e.currentTarget.value;

    if (!query.length) this.collection.reset();

    this.model.set('id', query);

    this.xhr && this.xhr.abort();
    this.xhr = this.model.fetch({
      headers: { Authorization: 'bearer client'}
    });

  }

});
