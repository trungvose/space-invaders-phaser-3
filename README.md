# Space Invaders built with Phaser 3 and TypeScript

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command         | Description                                                                       |
| --------------- | --------------------------------------------------------------------------------- |
| `npm install`   | Install project dependencies                                                      |
| `npm run watch` | Build project and open web server running project, watching for changes           |
| `npm run dev`   | Builds project and open web server, but do not watch for changes                  |
| `npm run build` | Builds code bundle with production settings (minification, no source maps, etc..) |

## Configuring Rollup

- Edit the file `rollup.config.dev.js` to edit the development build.
- Edit the file `rollup.config.dist.js` to edit the distribution build.

You will find lots of comments inside the rollup config files to help you do this.

Note that due to the build process involved, it can take around 20 seconds to build the initial bundle. Times will vary based on CPU and local drive speeds. The development config does not minify the code in order to save build time, but it does generate source maps. If you do not require these, disable them in the config to speed it up further.

## Credits

The below table listed all of the awesome resources that I have reference to

| Command                                                                 | Description                                                                                                                                              |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@photonstorm/phaser3-typescript-project-template][typescript-template] | A quick-start project template combines Phaser 3 with [TypeScript](https://www.typescriptlang.org/) and uses [Rollup](https://rollupjs.org) for bundling |
| [Making Your First Phaser 3 Game][first-phaser-3-game]                  | Official guide to create a small game involving a player running and jumping around platforms, collecting stars and avoiding baddies                     |
| [Invaders Game - Phaser 2][phaser2-invaders]                            | Official tutorial to build Invaders game with Phaser 2 . I reused its static resources but converting the code to Phaser 3                               |
| [Phaser 3 API References][phaser-api]                                   | All of the API that you can reference to while working with Phaser 3                                                                                     |
| [Phaser 3 and TypeScript Tutorial][build-a-simple-game]                 | How to build a simple game in the browser with Phaser 3 and TypeScript                                                                                   |
| [Space Invaders Sounds Effects][sounds]                                 | Sound effects from the classic arcade game Space Invaders released in 1978 by Taito.                                                                     |  |

## Upcoming

I am having some ideas to start building some of my favorite games (and easy to build 🤣). It could be

- Enhance the Angular Tetris with a few more games: racing, tank shotting.
- Duck Hunt

If you would like to collaborate, tag me on Twitter 👏👏👏

[typescript-template]: https://github.com/photonstorm/phaser3-typescript-project-template
[phaser2-invaders]: https://phaser.io/examples/v2/games/invaders
[phaser-api]: https://photonstorm.github.io/phaser3-docs/
[build-a-simple-game]: https://www.freecodecamp.org/news/how-to-build-a-simple-game-in-the-browser-with-phaser-3-and-typescript-bdc94719135/
[first-phaser-3-game]: https://phaser.io/tutorials/making-your-first-phaser-3-game/part1
[sounds]: https://www.classicgaming.cc/classics/space-invaders/sounds
