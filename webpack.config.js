
// START HERE
const path = require('path')
const webpack = require('webpack')
const ringConfig = require('@jetbrains/ring-ui/webpack.config').config

module.exports = {

  mode: 'development',

  entry: './src/index.js',
  module: {

    rules: [
      ...ringConfig.module.rules, {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      },

      {
        // Look for Sass files and process them according to the
        // rules specified in the different loaders
        test: /\.(sa|sc)ss$/,

        use: [{
          // Interprets CSS
          loader: 'css-loader',
          options: {
            importLoaders: 2
          }
        },
        {
          // Use PostCSS to minify and autoprefix. This loader
          // uses the configuration in `postcss.config.js`
          loader: 'postcss-loader'
        },
        {
          // Adds support for Sass files, if using Less, then
          // use the less-loader
          loader: 'sass-loader'
        }
        ]
      },
      {
        // Adds support to load images in your CSS rules. It looks
        // for .png, .jpg, .jpeg and .gif
        test: /\.(png|jpe?g|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            // The image will be named with the original name and
            // extension
            name: '[name].[ext]',
            // Indicates where the images are stored and will use
            // this path when generating the CSS files.
            // Example, in main.scss I have
            // url('../../public/assets/images/venice-italy.jpg')
            // and when generating the CSS file, it will be
            // outputted as url(../images/venice-italy.jpg), which
            // is relative to /styles/main.css
            publicPath: '../images',
            // When this option is 'true', the loader will emit
            // the image to output.path
            emitFile: false
          }
        }]
      }

    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]

}
