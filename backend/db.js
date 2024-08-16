// //todo{
// title: string,
// descrption: string,
// completed: boolean

require('dotenv').config(); // Load environment variables from .env

const mongoose = require('mongoose');

// Get the MongoDB URL from the environment variable
const mongoUrl = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));

const todoSchema=mongoose.Schema({
    title: String,
    description:String,
    completed:Boolean
})
const todo = mongoose.model('todos',todoSchema);
module.exports = todo;

