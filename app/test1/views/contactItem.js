'use strict';

var Marionette = require('backbone.marionette');
var template = require('./contactItem.html');

module.exports = Marionette.ItemView.extend({

  className: 'col-md-6',

  template: template,

  events: {
    'click .js-accept': 'onAcceptClick',
    'click .js-decline': 'onDeclineClick'
  },

  onRender: function() {
    this.trigger('item:pending');
  },

  onAcceptClick: function() {
    this.model.set('isAccept', true);
  },

  onDeclineClick: function() {
    this.model.set('isDecline', true);
  }

});
