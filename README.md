# hearthis Top Artists

## Getting Started

These are rough guidelines on how to get this running locally on your computer.

### Prerequisites

You will need node and npm accessible in your cli. You can get those here: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### Installing

Clone or download this respository and then within it, run
```
npm i
```

Once things have finished installing, run the following command to get a local server started:
```
npm run dev
```

Then visit `localhost:8080` and you're good to go!


## Building "production-ready" files

Running `npm run build` will create a `dist/` directory with an `index.html`, `bundle.js`, and `bundle.js.map/` (the source map).

## Built With

* [React](https://reactjs.org/) - a JavaScript library for building user interfaces
* [webpack](https://webpack.js.org/) - module bundler
* [autoprefixer](https://github.com/postcss/autoprefixer) - parses CSS and adds vendor prefixes to CSS rules
* [Babel](https://babeljs.io/) - transpiler for es6
* [Sass](http://sass-lang.com/) - a scripting language that is compiled into CSS
* [lodash](https://lodash.com/) - JavaScript utility library
* [normalize.css](https://necolas.github.io/normalize.css/) - makes browsers render elements more consistently
* [es6 boilerplate](https://github.com/RussHR/es6-boilerplate) - a personal boilerplate for es6 projects
* [Chai](http://www.chaijs.com/) - JavaScript tests!
* [Enzyme](https://github.com/airbnb/enzyme) - React tests!
* [ESLint](https://eslint.org/) - for linting!
* [sinon](http://sinonjs.org/) - for testing with spies and watchers!
* [superagent](https://github.com/visionmedia/superagent) - for easy AJAX calls

## Why not Redux?

Redux is great, but it introduces a lot of overhead and complexity. In this particular case, I decided not to use it due to the app being so small. However, the functions in `stateUpdaters/` are kind of like reducers because they take and return a new (part of a) store. Also, instead of actions/thunk, I've confined all API calls to the top-level app component.

## Why don't I see more information about the tracks or artists?

* As for the tracks, the data supplied by the artists were very inconsistent. Often, the artists would not supply information such as a track description or bpm. Also, I did not want to have a lot of UI that pointed to empty data.
* As for the artists, there was not much data to use for the initial list of artists. In the API call to retrieve tracks, the only data included for artists is `id`, `permalink`, `username`, `uri`, `permalink_url`, and `avatar_url`. Given more time, I could have implemented individual calls for each artist when their page opens.

## Things I would do with more time:

* I would be much more specific about what data to keep from the API response. A lot of unused data is being passed around the app in the artists and tracks objects because I wasn't sure what I would need or want by the end of this project.
* I started referring to "tracks" as "songs" at a certain point, oops. I'd probably want to stick with one.
* Add error handling! There's virtually none right now except for `.catch()` after the API calls.
* Better PropTypes documentation.
* Stronger testing. I had to leave a lot out because I decided not to configure JSDOM, which would've allowed me to write more thorough tests. Because I didn't configure JSDOM, tests would throw errors whenever there was a reference to client-specific objects like `window` and `Audio`.
* Explore design more. I spent so much time on the logic, the responsiveness was almost an afterthought.
* Sleep! Exercise! Eat well.


## Acknowledgments

* This gist for providing an excellent README.md template: [https://gist.github.com/PurpleBooth/109311bb0361f32d87a2](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* Thank you everyone for all the npm packages
