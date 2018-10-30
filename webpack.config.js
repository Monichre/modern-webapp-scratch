const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: ['./scr/scripts/main.js', './src/styles/main.scss'],
  output: {
    path: path.resolve(__dirname, 'public'),
    // Specify the base path for all the assets within your
    // application. This is relative to the output path, so in
    // our case it will be ./public/assets
    publicPath: '/assets',
    // The name of the output bundle. Path is also relative
    // to the output path
    filename: 'assets/scripts/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        // Look for Sass files and process them according to the
        // rules specified in the different loaders
        test: /\.(sa|sc)ss$/,

        use: [{
          // Extracts the CSS into a separate file and uses the
          // defined configurations in the 'plugins' section
          loader: MiniCssExtractPlugin.loader
        },
        {
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
        }
        ]
      }
    ]
  },

  plugins: [
    // Configuration options for MiniCssExtractPlugin. Here I'm only
    // indicating what the CSS outputted file name should be and
    // the location
    new MiniCssExtractPlugin({
      filename: 'assets/styles/main.css'
    })
  ]

}
