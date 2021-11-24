const { Schema } = require('mongoose');
const taskSchema = new Schema({
title: {
type: String,
required: true
},
content: {
    type: String,
    required: true,
  },
});
module.exports = taskSchema;
