'use strict';

var Marionette = require('backbone.marionette');
var template = require('./query.html');

module.exports = Marionette.ItemView.extend({

  template: template,

  events: {
    'keyup [name=query]': 'onQueryKeyup',
  },

  onQueryKeyup: function(e) {
    var query = e.currentTarget.value;
    this.model.set('id', query);
    this.model.fetch({
      headers: { Authorization: 'bearer client'}
    });
  }

});
