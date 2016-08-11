'use strict';

var Marionette = require('backbone.marionette');
var ContactsView = require('./contacts');
var ContactInfoView = require('./contactInfo');
var template = require('./contactsLayout.html');

module.exports = Marionette.LayoutView.extend({

  template: template,

  regions: {
    list: '.js-list',
    info: '.js-info'
  },

  initialize: function() {
    this.listenTo(this.collection, 'change', this.onCollectionChange);
    this.listenTo(this.collection, 'destroy', this.onModelDestroy);
  },

  toggleBlocks: function(hasToggle) {
    this.list.$el.toggleClass('is-hidden', hasToggle);
    this.info.$el.toggleClass('is-hidden', !hasToggle);
  },

  onRender: function() {
    this.list.show(new ContactsView({collection: this.collection}));
  },

  onCollectionChange: function(model) {
    this.info.show(new ContactInfoView({model: model}));
    this.toggleBlocks(true);
  },

  onModelDestroy: function() {
    this.toggleBlocks(false);
  }

});
