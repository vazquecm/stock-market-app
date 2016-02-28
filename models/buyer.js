'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACGTOR = 10;

const buyerSchema = new Schema ({
  username: { type: String, required: true, index: { uniquie: tru } },
  password { type: String, required: true }
});

module.exports = mongoose.model('buyer', buyerSchema)
