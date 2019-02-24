# Intro
This file will contain an explanation of how the files in this repo interact, as well as I can do. I will keep updating this as I learn more. I will be breaking down how it works by the functionality more so than which files do what.

This *does* assume you followed the instructions in the [README.md](README.md).

## How the server starts
Upon calling `npm start:dev` (rolling with the dev side currently because I don't understand `webpack` yet), `npm` looks in [package.json](package.json) to figure out what to do with that input. Finding the right commands, it runs `node server` which calls on [server.js](server.js). This file starts the `nodemon` restarting capabilities (watches for changes [server/](server/) files if in a dev environment, determined by a flag in the `.env` file) as well as starts up the other [server/server.js](server/server.js). 

Calling on the other [server.js](server/server.js) does the below:
- Connects to the database defined in [config.js](config/config.example.js)
- Sets up the Express server
  - Sets it to accept URL encoded and JSON encoded info
  - If a dev environment
    - Sets up the `webpack` hot-swapping capabilities
    - Directs to `/client/public/`
  - Else if in prod environment
    - Just redirects the user to the compiled `/dist/index.html`
- Sets the server to listen on the desired address and port (currently `localhost`/`127.0.0.1` on port `8080`)

This all should set the server up and running with routing and everything.

## How the server responds to HTTP methods/requests
The client-side code in [Home.js](client/app/components/Home/Home.js) binds functions to the buttons of each Counter (based on `_id`). On the click of the button, a specific HTTP method/request is sent to the server. This is interpreted by the server based on routing spelled out in [counters.js](server/routes/api/counters.js). By coding how each specific request is handled, we can determine exactly how the results are processed (or if at all - a non-specified URI will not be found and the client will display [NotFound.js](client/app/components/App/NotFound.js) based on the logic in [index.js](client/app/index.js) because anything other than `'/'` will not match anything other than [NotFound.js](client/app/components/App/NotFound.js) in the `<Switch>`.

Basically, any request needed on the requisite URI/URLs is defined and the code therein will run. Anything else will result in (basically) a `404 Not Found`.

## How the server puts the page together
The page is rendered (HTML put together, not _painting_) on the server and sent to the user. Any updates done by buttons (through the above mentioned HTTP methods/requests) are handled by the server and passed back to the client-side local state to update the page with as minimal re-rendering as possible (it only changes what's new). This happens because React keeps a copy of a 'virtual DOM' that it can compare the new DOM data to, and only change what is different in the new DOM data. This is where React does it's magic and is amazing.

