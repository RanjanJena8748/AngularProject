const passport=require('passport');
const googlePlusTokenStrategy =require('passport-google-plus-token');
passport.use(new googlePlusTokenStrategy({
clientId : '583740133528-n6v1u4bmfe3d99tr3rmdvvhngjf56k25.apps.googleusercontent.com',
clientSecret: 'AIi__z_7FuyUB5nY5uVaFOcc'
}, async(accessToken,refreshToken,profile,done) => {
console.log(accessToken,refreshToken,profile);
}));