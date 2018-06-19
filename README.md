# Chatty App

A client-side SPA (single-page app) built with ReactJS, Redux, Webpack, Babel, Node.js and Web Sockets. The client-side app communicates with a server via WebSockets for multi-user real-time updates. No persistent database is involved; the focus is on the client-side experience

## Final Product

!['This is the first.'](https://github.com/hjd007wwkd/LH5.ChattyApp/blob/master/docs/first.png)
!['This is the addon for disconenct.](https://github.com/hjd007wwkd/LH5.ChattyApp/blob/master/docs/second.png)

## Usage

Clone the repo to your local machine.
Install the dependencies and start the server.
Before you start, create '.babelrc' file in the folder
and add this script into the '.babelrc'

{
    "presets": [
        "env",
        "react"
    ],
    "plugins": [
        "transform-object-rest-spread"
    ]
}

1st server

```
npm install
npm start
open http://localhost:3000
```
2nd server

```
cd to `chatty_server`
npm install
npm start
open http://localhost:3001
```

## Dependencies
1st server
- babel-core
- babel-loader
- babel-plugin-transform-object-rest-spread"
- babel-preset-env
- babel-preset-react
- css-loader
- node-sass
- react
- react-dom
- react-redux
- redux
- sass-loader
- style-loader
- webpack
- webpack-dev-server

2nd server
- express
- uuid
- ws