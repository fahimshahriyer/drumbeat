# Stik Boilerplate

[![license](https://img.shields.io/github/license/fahimshahriyer/stik.svg)](./license.md)
[![GitHub contributors](https://img.shields.io/github/contributors/fahimshahriyer/stik.svg)](https://github.com/fahimshahriyer/stik/graphs/contributors)

A simple frontend boilerplate for static project using Gulp, Pug and Less

This project uses Pug, Sass, Gulp and Browsersync.

Know more about them:
- [NPM Scripts](https://docs.npmjs.com/misc/scripts)
- [GulpJS](http://gulpjs.com/)
- [Pug](https://github.com/pugjs/pug)
- [Sass](http://sass-lang.com/)
- [Browsersync](https://www.browsersync.io/)


## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)


```sh
# Clone this repository
$ git clone git@github.com:fahimshahriyer/stik.git
$ cd stik

# install gulp globally
$ npm install -g gulp

# install dependencies
$ npm run setup

```

With the commands above, you have everything to start.

### Folders and Files

```sh
├── README.md
├── build
│   ├── css/
│   ├── img/
│   ├── svg/
│   ├── icons/
│   ├── js/
│   ├── index.html
├── gulpfile.js
├── package.json
└── src
    ├── img/
    ├── svg/
    ├── icons/
    ├── js/
    ├── scss
    │   ├── abstracts/*.scss
    │   ├── base/*.scss
    │   ├── layouts/*.scss
    │   ├── modules/*.scss
    │   ├── pages/*.scss
    │   ├── vendor/*.scss
    └── pug
        └── index.pug
```

Those folders and file will change during the project.

This project uses [Husky](https://github.com/typicode/husky) to prevent commit and push messy and wrong code.

To help you, this project has a `npm run fix` command to fix all eslint errors.


#### Parker CSS

To view a reporter of CSS files, use a `npm run reporter` command.


### Tasks

- `npm start`: run all tasks and initialize watch for changes and a server
- `npm test`: lint javascript and css
- `npm run setup`: install all dependencies
- `npm run fix`: command to fix all eslint errors
- `npm run reporter`: test css complexity
- `npm run build`: run all tasks to build
- `npm run html`: compile html files
- `npm run js`: compile js files
- `npm run css`: compile css files
- `npm run images`: compress imaages files
- `npm run svg`: compress svg files
- `npom run icons`: generate sprite of icons


## License

[MIT License](https://mit-license.org/) © Fahim Shahriyer
