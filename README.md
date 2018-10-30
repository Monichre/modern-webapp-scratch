# Package JSON Scripts

- dev:assets — Running Webpack in watch mode will watch for     changes to files in our /src directory and recompile everything. Webpack will place the compiled files under the /public directory

- dev:start — Start our development server, launch the browser to the /public directory and watch for changes under the /public directory. Website will open to http://localhost:8080/public
dev — Run in parallel all of the scripts that start with dev:. Basically it will run dev:assets and dev:start giving us a nice development environment with live reload

- build — Run Webpack in production mode, optimizing CSS and JavaScript files. The outputted files will replace the CSS/JS development files under the /public directory, then you can take everything under this directory and deploy it to your production server


```
 {
        "targets": {
          "browsers": ["> 1%"]
          /*
            instructing Babel to transpile our JavaScript code to support browsers that are used in more than 1 % of the global market browser share.
          */
        }
      }
```