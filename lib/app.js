/* @flow */

var PouchDB = require('pouchdb');

//import * as PouchDB from 'pouchdb';

var db = new PouchDB('hourly');

db.changes().on('change', () => {
    console.log('changes');
});


db.put({
    _id: '1',
    name: 'Friedel',
    hours: 40
});
