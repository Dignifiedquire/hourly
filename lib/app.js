/* @flow */

var PouchDB = require('pouchdb');
var React = require('react');

var db = new PouchDB('hourly');

db.changes().on('change', () => {
    React.render(<h3>changes</h3>, document.getElementById('content'));
});


db.put({
    _id: '1',
    name: 'Friedel',
    hours: 40
});
