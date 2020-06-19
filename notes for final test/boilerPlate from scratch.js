SERVING STATIC FILES
Tools like webpack - dev - server webpack - dev - server & http - server
are very useful.They will serve up static files(including your index.html) from the folder you start them from.This is great_if you want to start writing a client - side application but don 't want to write a full express server yet (or if you do not need one.

For example:
    if you write an application that uses a cloud database like Firebase, or a simple client app that just needs to make AJAX requests to some external APIs).
You could install them on a project - by - project basis, or install them globally using the - g flag.

if you are using an express server, then you need to make sure that you serve up your index.html_for any GET requests that aren 't for any other routes (like your /api/ routes). Here'
s an example of what this might look like:

    const path = require('path');
const express = require('express');
const app = express();
// you'll of course want static middleware so your browser can request things like your 'bundle.js'
app.use(express.static(path.join(__dirname, './path/to/your/static/assets')))
    // Any routes or other various middlewares should go here!

// Make sure this is right at the end of your server logic!
// The only thing after this might be a piece of middleware to serve up 500 errors for server problems
// (However, if you have middleware to serve up 404s, that go would before this as well)
app.get('*', function(req, res, next) {
    res.sendFile(path.join(__dirname, './path/to/your/index.html'));
});
// Note that if you want to give more informational messages about valid frontend routes vs routes that are invalid change up your

app.get('*', function(req, res, next) {
    res.sendFile(path.join(__dirname, './path/to/your/index.html'));
});


webpack.config.js FILE:
    It bundles all files or combines all files into one to serve all resources / fles

    .babelrc
By setting babel - loader in your webpack config, you 're teaching webpack to use babel. However, we also need to tell babel how to parse our code. We do this with another dot-file called .babelrc! In your root project directory, make a file called .babelrc and configure it with the babel-presets you installed.

npm start command script:


    'node repl '
js comes with virtual environment called REPL(aka Node shell).REPL stands
for Read - Eval - Print - Loop.It is a quick and easy way to test simple Node.js / JavaScript code.To launch the REPL(Node shell)



what is ENVIRONMENT VARIABLE:
    We can hide secrets by setting them to be environment variables on our deployment server(instead of hard - coding them into our code, which will end up on Github!

        Static Middleware:
        serves javascript files, css files, and images from the public folder these are called static assets

        Parsing Middleware: `body-parser`
        extracts the entired body portion of the incoming request &
        expose to the req.body

        HOW TO HANDLE 404 s:
        By create a route that handles 400:
        router.use((req, res, next) => {
            const err = new Error('Not found.');
            err.status = 404;
            next(err);
        });


        express - session passport:
        help us with authentication in our app.By
        default, session information will be stored in memory
        for the life of our server process using session middleware.Assuming we 'll attach the session middleware to our app (but we could also be attaching it to a router)

        const session = require('express-session');

        app.use(session({
            secret: 'a wildly insecure secret',
            resave: false,
            saveUninitialized: false
        }))

        Note that many express applications used to also hook up cookie - parser when implementing session middleware with express - session.As of express - session 1.5 .0, this is no longer necessary.


        Serialize / Deserialize User:
        Passport also needs to know how to serialize / deserialize the user.

        Remember that serialization is usually only done once per session(after we invoke req.login, so that passport knows how to remember the user in our session store.Generally, we use the user 's id.

            Deserialization runs with every subsequent request that contains a serialized user on the session - passport gets the key that we used to serialize the user, and uses this to re - obtain the user from our database.

            Adding Salt to Hashing: A Better Way to Store Passwords A salt is added to the hashing process to force their uniqueness, increase their complexity without increasing user requirements, and to mitigate password attacks like rainbow tables.In onther words, salting is the number of rotations to encrypt the password.

            Hashing:
            Encrypts the password or hashes a password







            for (const f
            }