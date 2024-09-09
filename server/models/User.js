const { Schema, model } = require('mongoose');
//const assignmentSchema = require('./Assignment');
const bcrypt = require('bcrypt');


// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
      unique: true,
    },
    password: {
      type: String,
      required: true,
      max_length: 50,
      match:[/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,'use a stronger password'],
      
    
    },
    gameState: {
      type: String,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // custom method to compare and validate password for logging in
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  

const User = model('user', userSchema);

module.exports = User;
