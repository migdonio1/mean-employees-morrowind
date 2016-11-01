'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    moment = require('moment-timezone'),
    Schema = mongoose.Schema;

var getNow = function() {
  return moment.tz('UTC').format();
};

/**
 * Employee Schema
 */
var EmployeeSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Employee name',
    trim: true
  },
  lastname: {
    type: String,
    default: '',
    trim: true
  },
  salary: {
    type: number,
    default: 0
  },
  created: {
    type: String,
    default: getNow
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Employee', EmployeeSchema);
