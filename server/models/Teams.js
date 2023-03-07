const { Schema, model } = require('mongoose');


const teamSchema = new Schema(
    {
        // title of the team you are creating
        title: {
            type: String,
            required: true,
            trim: true,
          },
        //   short description fo purpose of the team?
        description: {
            type: String,
            required: true, 
            trim: true
        },
        // date team was created
        createdAt: {
          type: Date,
          get: ((date) => {
              date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
              return date
          }),
          default: Date.now,
      },
        // array of objects that referfences the users model to track users on team
        members: [
            {
              type: Schema.Types.ObjectId, 
              ref: 'User',
            },
        ],
    },
    {
      toJSON: {
        getters: true,
        virtuals: true,
      },
      id: false,
    }
)

teamSchema.virtual('memberCount').get(function () {
    return this.members.length;
  });

  const Teams = model('Teams', teamSchema);

  module.exports = Teams;