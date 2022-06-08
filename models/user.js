const { Schema, Types, model } = require("mongoose");
//const validator = require("validator");
const {isEmail} = require("validator");
const UserSchema = new Schema (
  {
    username: {
      type: String,
      required: "Enter a username",
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Enter a valid e-mail address"], 
         validate: [ isEmail, 'invalid email']


    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought"
      }
    ], 
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ] 
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
)

// the length of the user's friends array field
UserSchema.virtual("friendCount").get(function() {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;

















































































































































































































































































































































































