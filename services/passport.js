const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');

       passport.serializeUser((user, done) => {
       done(null, user.id);
 });
        passport.deserializeUser((id, done) => {
        User.findById(id).then(user => {
        done(null, user);
  })
});


passport.use(
  new GoogleStrategy({
  clientID : keys.googleClientID,
  clientSecret : keys.googleClientSecret,
  callbackURL : '/auth/google/callback',
  proxy: true
},

(accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId : profile.id}) // a synchronous function // doesnt return user directly but returns a promise
        .then((existingUser) => {
              if(existingUser){
                done(null, existingUser);
              // we have a record already of your given profile we don't need to create or sove a new record
              } else {
                new User ({ googleId : profile.id })
                .save()
                .then(user => done(null, user));
            // make a new record
          }
        })
      }
    )
);
