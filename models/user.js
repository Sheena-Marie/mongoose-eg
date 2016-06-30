/* jshint esversion:6 */

const mongoose = require('../lib/db.js');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  createdAt: Date,
  updatedAt: Date,
  tweets: [{text: String, isLiked: {type: Boolean, default: false}
  }],
});

userSchema.methods.addTweet = function(text) {
  this.tweets.push({text: text});
  this.save();
};

userSchema.methods.listTweets = function(text) {
  this.tweets.forEach(tweet => {
    console.log('\n');
    console.log(`${this.username} has tweeted: ${tweet}`);
    console.log('\n');
  });
};

userSchema.methods.findTweets = function(search) {
  // [match1, match2] or
    return this.tweets.filter(tweet => {
      return tweet.text.indexOf(search) >= 0 ? true : false;
  });
};

// userSchema.methods.listFriends = function() {
//   this.friends.show({});
// };

const User = mongoose.model('User', userSchema);

module.exports = User;
