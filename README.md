# micooz.github.io

Live site: http://micooz.github.io

I'd like to share some interesting experience of `front-end` development with you!

# To begin with

You need:

* [NodeJS](https://nodejs.org/) (A JavaScript runtime built on Chrome's V8 JavaScript engine)

> NodeJS will help us setup a static server (use [express](http://expressjs.com/)) for local developing.
> **NOTE**: `*.github.io` only serves static files (html, css, js ...), so you'd better run a static server for local developing.

# Install & Run

Firstly, install (dev-)Dependencies using npm:

    $ npm install

Secondly, convert ES6 scripts from `src/*` to `lib/*`, this can be done with:

    $ npm run babel

Thirdly, pack all dependencies used by front-end into `js/bundle.js`:

    $ npm run webpack

Finally, run the static server, and then check out http://localhost:3000 :

    $ npm start

# License

see `LICENSE`.