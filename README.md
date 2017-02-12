
taken from this source http://andrewhfarmer.com/build-your-own-starter/#0-intro




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





