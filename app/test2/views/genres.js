'use strict';

var Marionette = require('backbone.marionette');
var GenreItem = require('./genreItem');

module.exports = Marionette.CollectionView.extend({

  childView: GenreItem,

});
