const Users = require('../schema/userSchema');

const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

module.exports = (passport) => {
    let opt = {};
    opt.jwtFromRequest = ExtractJWT.fromAuthHeaderWithScheme('jwt')
    opt.secretOrKey = process.env.JWT_SECRET; //This will be your secret Key
    try {
        passport.use(new JWTStrategy(opt, async (jwt_payload, done) => {
            // User is table name
            let user = await Users.findOne({ _id: jwt_payload.userId }).exec();
            // if the userId exists, return user object else unauthorised
            if(!_.isEmpty(user)) {
                done(null, user);
            } 
            else {
                done(null, false);
            }
        }));
    } catch(err) {
        throw(err);
    }
}