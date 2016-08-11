'use strict';

var Marionette = require('backbone.marionette');
var ContactItem = require('./contactItem');

module.exports = Marionette.CollectionView.extend({

  className: 'row',

  childView: ContactItem,

  count: 0,

  renderChildView: function(view, index) {
    this.listenTo(view, 'item:pending', this.onItemPending);
    Marionette.CollectionView.prototype.renderChildView.apply(this, arguments);
  },

  onItemPending: function() {
    this.count = this.count + 1;
  },

  onRender: function() {
    console.log('There’s ' + this.count + ' contacts pending!');
  }

});
