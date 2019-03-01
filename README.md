# MERN-boilerplate
I forked this repo in the hope to boil down the required files to a minimum working example... I didn't realize it pretty much already was. Well. I have a repo of it now, and I plan to make it more commented and beginner friendly.

I also plan on testing out ideas and adding more advanced functionality to the files as I learn, and I will attempt to minify that in time as well. I want to have this be modular in that each file can be inserted and removed as needed, that each file provides some plug-and-play functionality.

This is a boilerplate project using the following major technologies:
- [React](https://facebook.github.io/react/) and [React Router](https://reacttraining.com/react-router/) for the frontend
- [Express](http://expressjs.com/) and [Mongoose](http://mongoosejs.com/) for the backend
- [Sass](http://sass-lang.com/) for styles (using the SCSS syntax)
- [Webpack](https://webpack.github.io/) for compilation

## Requirements
- [Node.js](https://nodejs.org/en/) 6+  
Run the below command in a terminal in your project folder before anything else (VSCode has a built-in terminal):
```shell
npm install
```
This will install all the needed packages from the `package.json` file.

## Running
Copy `config.example.js` to `config.js` in the `config` folder. Edit the values therein. Running the below commands will enable you to start the server in the desired configuration (prod or dev). Configurations are defined in [`.\server.js`](server.js), [`.\webpack.config.js`](webpack.config.js), and [`.\server\server.js`](server/server.js). The `webpack.*.js` files are located in [`config`](config).
Production mode:
```shell
npm start
```

Development (Webpack dev server) mode:
```shell
npm run start:dev
```

## How it's.. Documents
I've drafted up (mostly for my benefit, not yours) a couple documents about this repo
- How the file structure is put together: [How it's Structured](How_its_Structured.md)
- How the files interact: [How it all Works Together](How_it_Works.md)

## What this does not do
I haven't figured out:
- How to connect to multiple databases (collections?)
  - How to connect with different connection strings?
- How to manage multiple database connections
- What routing actually means in React/Express
    - I'm used to HTML/PHP, how does this transition to React/Express?
    - Is this a SPA (single-page application) only? I'm not sure I know what a 'page' in React/Express is even...