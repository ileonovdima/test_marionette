'use strict';

var Marionette = require('backbone.marionette');
var template = require('./contactInfo.html');

module.exports = Marionette.ItemView.extend({

  template: template,

  events: {
    'click .js-back': 'onBackClick',
  },

  onBackClick: function() {
    this.model.unset('id');
    this.model.destroy();
  }

});
