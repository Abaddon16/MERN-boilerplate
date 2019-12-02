# Intro
This file will contain an explanation of how the file structure is laid out in this repo. This will be a breadth-depth hybrid walk-through. This means I will list all the children of each node, pick one, and repeat. On reaching the end/leaves of the files I will go up one level and pick the next child node.

## Root Folder
- [client](client)
  - This contains code for the client side of this repo. This will contain the React UI code, the components, etc. that are used to display to the user.
- [config](config)
  - This cointains the configuration files for the repo. The main one used will be a copy of [config.example.js](config.example.js) renamed as [config.js](config.js)
- [server](server)
  - This contains code for the server side of this repo. This will contain the Express server code, the routing, the functionality of the site
- [.babelrc](.babelrc)
  - This tells `babel` what to do, how to operate, based on it's presets
- [.gitignore](.gitignore)
  - Tells Git what to ignore when uploading to GitHub. Used to keep local-only files (downloaded packages, editor configs, etc.) local
- [How_its_Structured.md]
  - This file. Pretty simple.
- [License](LICENSE)
  - The limitations of use of this repo based on accepted verbiage.
- [package.json](package.json)
  - How NPM knows what packages to download, of what versions, name of the project, author, etc. as well as the desired "scripts" to run.
 These scripts are just shortcuts to what you yourself would type into the terminal/console. `npm start:dev` equates to `node server` but
 `npm start` is equal to `webpack -p --progress --profile --colors && node server`. So, it pretty much saves typing and such so you don't have 
 to remember what all to type each time.
- [README.md](README.md)
  - The basic "what do" file, what displays on the repo's landing page.
- [server.js](server.js)
  - The initial entry point of the NPM code, this is where the whole page starts.
- [webpack.config.js](webpack.config.js)
  - Configurations for how `webpack` is going to be used
- [.env]()
  - I don't have this here, but it could and probably should be here (future update). This contains global variables to be used by files. They can be programmed anywhere but this is typically the one stop shop for them. It requires a module, `dotenv` to use easily, bu that is a super easy to use module. Check it out!

## client
This code will be what displays to the user and how the user interacts with the webpage. This is the UI/UX folder.
- [app](client/app)
  - This contains the application React code
- [public](client/public)
  - This contains the publicly delivered information, what is sent to the user. (I'm not so sure about this but I'm rolling with it)

### app
- [components](client/app/components)
  - The folder containing the Components of the App
- [styles](client/app/styles)
  - The folder containing the CSS Styles of the app
- [index.js](client/app/index.js)
  - This is the injection point of the React UI code into the webpage ([index.html](client/public/index.html)). This is where the React code starts to work its magic

#### components
- [App](client/app/components/App)
  - Container with the main App files
- [Home](client/app/components/Home)
  - Container with the Home page files.

##### App
- [App.js](client/app/components/App/App.js)
  - Is the main code to be injected via React
- [NotFound.js](client/app/components/App/NotFound.js)
  - Is an error/not found page to be pushed back if routing cannot find the URL requested

##### Home
- [Home.js](client/app/components/Home/Home.js)
  - Contains the logic for the Counter components

#### styles
- [vendor](client/app/styles/vendor)
  - Contains [normalize.css](client/app/styles/vendor/normalize.css)
- [styles.scss](client/app/styles/styles.scss)
  - Imports the vendor folder

##### vendor
- [normalize.css](client/app/styles/vendor/normalize.css)
  - Contains the standard CSS styling for the webpage

### public
- [assets](client/public/assets)
  - Contains the images for the favicon.ico (not going to take this one further, it's explained here)
- [index.html](index.html)
  - The baseline HTML code delivered to the end user, used as the structure for the React code to be injected into

## config
- [config.example.js](config/config.example.js)
  - Duplicate this, name the copy `config.js`, edit it to contain your DB connection info
  - Can probably contain more info, that's all I use it for though
- [helpers.js](config/helpers.js)
  - TBD
- [webpack.common.js](config/webpack.common.js)
  - TBD
- [webpack.dev.js](config/webpack.dev.js)
  - TBD
- [webpack.prod.js](config/webpack.prod.js)
  - TBD

## server
- [models](server/models)
  - Contains the Mongoose/MongoDB models needed
- [routes](server/routes)
  - Contains the routing API (will drill down straight to API document for now, only one folder and one document)
- [server.js](server/server.js)
  - This is the heart of the server logic, what to load and how to start the server
  - Called by [server.js](server.js) (TODO: rename these files to be less confusing)

### models
- [Counter.js](server/models/Counter.js)
  - Is the definition of the Mongoose schema for the Counter object
  - Used to create new Counter documents in the DB

### routes/api
- [counters.js](server/routes/api/counters.js)
  - This defines the functionality of how the frontend talks to the backend through HTTP methods (`GET`, `PUT`, `POST`, etc.)
  - Heart of the UI/UX for each Counter component
