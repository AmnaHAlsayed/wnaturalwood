// const User=require('./routes/auth-routes')
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const
// const GOOGLE_CLIENT_ID = "17528257763-f1ktjgis0h3fnu67an07nab8v65vifg4.apps.googleusercontent.com";
// const GOOGLE_CLIENT_SECRET = "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";

// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://www.example.com/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

// passport.serializeUser((user,cb)=>{
//     cb(err,user)
// })
// passport.deserializeUser((user,cb)=>{
//     cb(err,user)
// })