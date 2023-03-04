const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
            // required: true,
        },
        combatibility: [
          {
            type: String,
            trim: true,
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
profileSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
profileSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('user', userSchema);

module.exports = User;