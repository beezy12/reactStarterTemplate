
taken from this source http://andrewhfarmer.com/build-your-own-starter/#0-intro
here's his repo on Github: https://github.com/ahfarmer/minimal-react-starter



Webpack

Webpack bundles all your JavaScript together into a single file. This includes each JavaScript file that you write as well as your npm packages.

Why Bundle?
A single .js file is easier to deploy and will usually download faster than multiple small files.

Webpack will work with Babel to convert your code from ES6/ES7 to ES5 while we work. Webpack can also minify your .js file for production.

Webpack Config
The main addition in this step is the webpack.config.js file.

You will set a few configuration options in this file. Here is the breakdown for each one, along with a link to the relevant portion of the Webpack docs:

context: This is the path to your client-side JavaScript folder. This must be an absolute path.

entry: This is the entry point for your application.

loaders (module.rules): This section specifies how each file should be processed before it is combined into your bundle. We only have one loader: Babel. This converts your ES6 + JSX JavaScript into ES5 before merging it into your bundle.

resolve: Where Webpack should look for files referenced by an import or require() statement. This makes it so that you can import npm packages in your code.






to compile: npm run compile
Run npm run compile to test out your new command. It should create a file called www/bundle.js. Open up that file and take a look. You'll see your main.js 'Hello World' code in there, along with a lot of Webpack boilerplate.

In practice, you wouldn't run npm run compile very often. This step is about knowing exactly what Webpack does so that things do not seem muddled when we add more pieces to the puzzle.

Now remove the www/bundle.js file. We won't need it in future steps.




A React development environment needs some way to show your app in a browser. That means you'll need a server. In this step you'll be setting up Express as your server.

The main file added here is server.js. That file will run an Express server, which will run Webpack. Webpack will re-run any time you change one of your JavaScript files.

server.js is server-side JavaScript. You can run it with the node server.js command. In this step you will also add a start script to run the server.

You will create www/index.html as your first web page. Express is configured to serve all the files in that folder.


to get React:
npm install --save react react-dom

