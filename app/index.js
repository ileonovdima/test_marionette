"use strict"

var $ = require('jquery');

var ContactsLayoutView = require('./test1/views/contactsLayout');
var Contacts = require('./test1/models/contacts');

var GenresProvider = require('./test2/models/genres-provider');
var GenresLayoutView = require('./test2/views/genresLayout');

var contacts = new Contacts([{
  id: 1,
  name: 'Some Gay',
  location: 'Some location',
  isAccept: false,
  isDecline: false
}, {
  id: 2,
  name: 'Other Gay',
  location: 'Other location',
  isAccept: false,
  isDecline: false
}, {
  id: 3,
  name: 'This data',
  location: 'This location',
  isAccept: false,
  isDecline: false
}, {
  id: 4,
  name: 'of Data',
  location: 'Data location',
  isAccept: false,
  isDecline: false
}]);

var contactsLayoutView = new ContactsLayoutView({ collection: contacts });
$('#contacts').html(contactsLayoutView.render().el);

var genresLayoutView = new GenresLayoutView({ model: new GenresProvider() });
$('#genres').html(genresLayoutView.render().el);
