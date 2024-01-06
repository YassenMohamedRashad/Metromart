require( "dotenv" ).config();
const express = require( 'express' );
const mysql = require( 'mysql2' );

const conn = mysql.createConnection( { host: process.env.DB_HOST, user: process.env.DB_USER, password: process.env.DB_PASSWORD, database: process.env.DB_NAME  } );
const cors = require( 'cors' );
let query = '';
const app = express();
app.use( express.json() );
app.use( cors() );


const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;


app.get( '/getusers', ( req, res ) =>
{
    query = 'SELECT * FROM users';
    conn.execute( query, ( error, data ) =>
    {
        if ( error )
        {
            res.json( error );
        }
        else
        {
            res.json( data );
        }
    } );
} );

app.post( '/postuser', ( req, res ) =>
{
    query = "INSERT INTO `users`( `name`, `email`, `password`, `address1`, `address2`, `phone_number`, `gender`, `age`) VALUES (?,?,?,?,?,?,?,?)";
    let data = req.body;
    conn.execute( query, [ data.name, data.email, data.password, data.address1, data.address2?data.address2:null,
    data.phone_number, data.gender, data.age ], ( error, data ) =>
    {
        if ( error )
        {
            res.json( error );
        }
        else
        {
            res.json( "user added" );
        }
    } );
} );

app.put( '/putuser/:id', ( req, res ) =>
{
    let data = req.body;
    let userId = +req.params.id;
    query = `UPDATE users SET name= ?, email= ?, password= ?, address1= ?, address2= ?, phone_number= ?, gender= ?, age= ? WHERE id = ${ userId }`;
    conn.execute( query, [ data.name, data.email, data.password, data.address1, data.address2 ? data.address2 : null, data.phone_number, data.gender, data.age ], ( error, data ) =>
    {
        if ( error )
        {
            res.json( error );
        }
        else if ( data.affectedRows === 0 )
        {
            res.json( 'user not found' );
        }
        else
        {
            res.json( "user updated" );
        }
    } );
} );

app.delete( '/deleteuser/:id', ( req, res ) =>
{
    let userId = +req.params.id;
    query = `delete from users WHERE id = ${ userId }`;
    conn.execute( query, ( error, data ) =>
    {
        if ( error )
        {
            res.json( error );
        }
        else if ( data.affectedRows === 0 )
        {
            res.json( 'user not found' );
        }
        else
        {
            res.json( "user deleted" );
        }
    } );
} );







app.listen( 5000, _ =>
{
    console.log( 'server is running' );
    console.log( `Database name is ${ dbHost }` )
} );