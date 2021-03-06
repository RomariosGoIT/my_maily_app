const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const Users = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Users.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accesToken, refreshToken, profile, done) => {
      const existingUser = await Users.findOne({ googleId: profile.id });
      if (!existingUser) {
        const user = await new Users({ googleId: profile.id }).save();
        done(null, user);
      }
      return done(null, existingUser);
    },
  ),
);
