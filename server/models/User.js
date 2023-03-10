const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { setUserCompatibility } = require('../utils/setUserCompatibility');
// import your setUserCompatibility function here. We'll use
// to pass the value of of the user's personality into it,
// and have it return the corresponding array of objects.
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match:[/.+@.+\..+/, 'Must match an email address!'],
        },
        password: {
            type: String,
            required: true, 
            minlength: 5,
        },
        personality: {
            type:String,
            required: true,
        },
        compatibility: [
          {
            type: {
              type: String,
              trim: true
            }, 
            rating: {
              type: Number,
              trim: true
            },
          },
        ],
        teams: [
            {
              type: Schema.Types.ObjectId, 
              ref: 'Teams',
            },
        ],
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
)
// retrieves the length of the user's teams (might be helpful somewhere)
userSchema.virtual('teamCount').get(function () {
    return this.teams.length;
  });

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

//sets compatibility of the user based on their personality
userSchema.pre('save', function () {
  return this.compatibility = setUserCompatibility(this.personality);
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;