const usersController = require( "../controllers/users.controller" );
const { body, validationResult } = require( 'express-validator' );
const express = require( 'express' )
const userrouter = express.Router();
const verifyToken = require( "../middleware/verfiyToken" )

userrouter.get( "/", verifyToken,usersController.getAllusers );
userrouter.post( "/login", usersController.login );

userrouter.post( "/signup",
    body( "name" ).notEmpty().withMessage( "name cannot be empty" ),
    body( "email" ).notEmpty().withMessage( "email is required" ).isEmail(),
    body( "password" ).notEmpty().isStrongPassword().withMessage( "weak password" ),
    body( "address1" ).notEmpty().withMessage( "address cannot be empty" ).isString(),
    body( "phone_number" ).notEmpty().isMobilePhone().withMessage( "invalid phone_number" ),
    body( "gender" ).custom( ( value ) =>
    {
        if ( value !== "male" && value !== "female" )
        {
            throw new Error( "gender must be either 'male' or 'female'" );
        }
        return true;
    } ),
    body( "age" ).custom( ( value ) =>
    {
        if ( value < 18 )
        {
            throw new Error( "age must be at least 18" );
        }
        return true;
    } ), usersController.signup );


// Handle DELETE requests to remove users
userrouter.delete( "/deleteAccount", verifyToken, usersController.deleteAccount );


// Handle PUT requests to update users
userrouter.put( "/updateAccount", verifyToken, body( "name" ).notEmpty().withMessage( "name cannot be empty" ),
    body( "email" ).notEmpty().withMessage( "email is required" ).isEmail(),
    body( "password" ).notEmpty().isStrongPassword().withMessage( "weak password" ),
    body( "address1" ).notEmpty().withMessage( "address cannot be empty" ).isString(),
    body( "phone_number" ).notEmpty().isMobilePhone().withMessage( "invalid phone_number" ),
    body( "gender" ).custom( ( value ) =>
    {
        if ( value !== "male" && value !== "female" )
        {
            throw new Error( "gender must be either 'male' or 'female'" );
        }
        return true;
    } ),
    body( "age" ).custom( ( value ) =>
    {
        if ( value < 18 )
        {
            throw new Error( "age must be at least 18" );
        }
        return true;
    } ), usersController.updateAccount );

// handle any other requests
userrouter.use((req, res) => {
	res.status(404).send("ERROR-404: Page Was Not Found"); // Send back an error message as a response
});

module.exports = userrouter;
