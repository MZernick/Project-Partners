const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { setUserCompatibility } = require('../utils/setUserCompatibility');

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
        comments: [
          {
            user: [
              {
                type: Schema.Types.ObjectId, 
                ref: 'User'
              }
            ],
            createdAt: {
              type: Date,
              get: ((date) => {
                  date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
                  return date
              }),
              default: Date.now,
            },
            commentBody: {
              type: String,
              required: true, 
              trim: true
            }
          }
        ]
    },
    {
      toJSON: {
        getters: true,
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