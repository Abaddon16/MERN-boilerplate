# MERN-boilerplate
I forked this repo in the hope to boil down the required files to be a minimum working example for a MERN server to explain to my friends and I how it all works together  (we are all learning React and the ilk currently). The paring down of files needed to the absolute minimum while still putting forth the same information and  functionality will be an ongoing project that I will improve as I learn more and begin to understand more of the "under-the-hood" functionality of these libraries.

This is a boilerplate project using the following major technologies:
- [React](https://facebook.github.io/react/) and [React Router](https://reacttraining.com/react-router/) for the frontend
- [Express](http://expressjs.com/) and [Mongoose](http://mongoosejs.com/) for the backend
- [Sass](http://sass-lang.com/) for styles (using the SCSS syntax)
- [Webpack](https://webpack.github.io/) for compilation

## Requirements
- [Node.js](https://nodejs.org/en/) 6+  
Run the below command in a terminal in your project folder (VSCode has a built-in terminal):
```shell
npm install
```
This will install all the needed packages from the `package.json` file.

## Running
Make sure to copy `config.example.js` and rename it `config.js` in the `config` folder. Edit the values therein to fit your needs. Running the below commands will enable you to start the server in the desired configuration (prod or dev). Configurations are defined in [`.\server.js`](server.js), [`.\webpack.config.js`](webpack.config.js), and [`.\server\server.js`](server/server.js). The `webpack.*.js` files are located in [`config`](config).
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