const path = require('path');


 // a big object with a bunch of configs in it
 module.exports = {
   entry: './src', //starting point for webpack to build files

   // processing to do on our input files
   module: {
     rules: [
       {
         test: /\.jsx?/i, // x is optional, js or jsx file
         loader: 'babel-loader',
         options: {
           presets: ['es2015'],
           plugins: [
             ['transform-react-jsx']
           ]
         }
       }
     ] // end of rules array
   }, // end of modules

   // where to put the results of the processing (output)
   output: {
     path: path.join(__dirname, 'dist'), // __dirname current folder
     filename: 'bundle.js' // we need to load this in our index.html
   },

   devtool: 'inline-source-map', // see errors in our original component .jsx files

   devServer: {
     // options for the dev server (npm)
     contentBase: path.join(__dirname, 'src'),
     compress: true,
     historyApiFallback: true
   }

 }; // end module
