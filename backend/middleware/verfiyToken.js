const jwt = require( 'jsonwebtoken' );
require( "dotenv" ).config();
const jwt_secret_key = process.env.JWT_SECRET_KEY

const verifyToken = ( req, res, next ) =>
{
try {
    const authHeader = req.headers[ 'Authorization' ] || req.headers[ 'authorization' ];
    if ( !authHeader ) { throw new Error('token is required') }
    const token = authHeader.split( ' ' )[ 1 ];
    const decoded_token = jwt.verify( token, jwt_secret_key );
    next();
} catch (error) {
    res.status( 401 ).send( { status: "fail", data: null, msg: error.message ||'Authorization refused' } );
}
};
module.exports = verifyToken