# Space Invaders built with Phaser 3 and TypeScript

Another Space Invaders game 😂😂😂

> It was based on [Phaser 2 Invader official tutorial][phaser2-invaders] but written in Phaser 3 and TypeScript. There were quite a lot of changes between Phaser 2 and 3 but I like version 3 better. It made the code much more readable and structure.

<details>
  <summary>Table Of Content</summary>
  <p>

- [Space Invaders built with Phaser 3 and TypeScript](#space-invaders-built-with-phaser-3-and-typescript)
  - [Working Game](#working-game)
  - [Why?](#why)
  - [Support](#support)
  - [Time Spending](#time-spending)
  - [Available Commands](#available-commands)
  - [Configuring Rollup](#configuring-rollup)
  - [Author: Trung Vo ✍️](#author-trung-vo-️)
  - [Credits and references](#credits-and-references)
  - [Upcoming](#upcoming)
  - [Contributing](#contributing)
  - [License](#license)
  </p>
  </details>

## Working Game

Check out the **working game** -> https://invaders.trungk18.com

The game has sounds, wear your 🎧 or turn on your 🔊 for a better experience.

![Space Invaders built with Phaser 3 and TypeScript][demo]

## Why?

I got a lot of motivation to work on some JS game after finishing [Angular Tetris][tetris]. I feel like gaming is a whole new world that I have never explored. For a simple Tetris game, probably I can leverage Angular with only simple state management and a game loop. But for complicated with a lot of animation stuff, I know I have to use a proper JS game framework.

Phaser is one of the most famous ones. I spent only about an hour to walk through the [official tutorial][first-phaser-3-game] to build the first game. The experience was awesome and I started to look at their example. There were several examples only for Phaser 2 and one of them is [Invaders][phaser2-invaders]. I really like how the game look and I decide to spend time going through the source code and migrate it over to Phaser 3 with TypeScript.

In the end, what you are seeing is the result of that process. I did add some sound effects and make some changes to the UI. With only a few hundred lines of code, you could build a catchy looking game with Phaser 3. How cool is that?

## Support

If you like my work, feel free to:

- ⭐ this repository. And we will be happy together :)
- <a title="Thanks for your support!" href="https://www.buymeacoffee.com/tuantrungvo" target="_blank"><img src="https://res.cloudinary.com/dvujyxh7e/image/upload/c_thumb,w_140,g_face/v1596378474/default-orange_uthxgz.jpg" alt="Buy Me A Coffee"></a>

Thanks a bunch for stopping by and supporting me!

## Time Spending

I only spent a couple of hours on one weekend to read the documentation and migrate the source code to Phaser 3. Based on the report, 8 hours was the total time spending. Monday, August 10 is a public holiday in Singapore so I have the right to finalize and publish the game 😎

![Space Invaders built with Phaser 3 and TypeScript][time-spending]

## Available Commands

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

| Command         | Description                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `npm i`         | Install project dependencies                                                                                                    |
| `npm run watch` | Build the project and open web server running project, watching for changes. The web server should run on http://localhost:4201 |
| `npm run dev`   | Builds project and open web server, but do not watch for changes                                                                |
| `npm run build` | Builds code bundle with production settings (minification, no source maps, etc..)                                               |

## Configuring Rollup

- Edit the file `rollup.config.dev.js` to edit the development build.
- Edit the file `rollup.config.dist.js` to edit the distribution build.

You will find lots of comments inside the rollup config files to help you do this.

Note that due to the build process involved, it can take around 20 seconds to build the initial bundle. Times will vary based on CPU and local drive speeds. The development config does not minify the code in order to save build time, but it does generate source maps. If you do not require these, disable them in the config to speed it up further.

## Author: Trung Vo ✍️

- A young and passionate front-end engineer. Working with Angular and TypeScript. Like photography, running, cooking, and reading books.
- Author of [Angular Jira clone][jira-clone] and [Angular Tetris][tetris]
- Personal blog: https://trungk18.com/
- Say hello: trungk18 [et] gmail [dot] com

## Credits and references

The below table listed all of the awesome resources that I have referenced to

| Command                                                                 | Description                                                                                                                                              |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@photonstorm/phaser3-typescript-project-template][typescript-template] | A quick-start project template combines Phaser 3 with [TypeScript](https://www.typescriptlang.org/) and uses [Rollup](https://rollupjs.org) for bundling |
| [Making Your First Phaser 3 Game][first-phaser-3-game]                  | Official guide to creating a small game involving a player running and jumping around platforms, collecting stars and avoiding baddies                   |
| [Invaders Game - Phaser 2][phaser2-invaders]                            | Official tutorial to build Invaders game with Phaser 2. I reused its static resources but converting the code to Phaser 3                                |
| [Phaser 3 API References][phaser-api]                                   | All of the API that you can refer to while working with Phaser 3                                                                                         |
| [Phaser 3 and TypeScript Tutorial][freecodecamp]                        | How to build a simple game in the browser with Phaser 3 and TypeScript                                                                                   |
| [Space Invaders Sounds Effects][sounds]                                 | Sound effects from the classic arcade game Space Invaders released in 1978 by Taito.                                                                     |  |

## Upcoming

I am having some ideas to start building some of my favorite games (and easy to build 🤣). It could be

- Enhance the [Angular Tetris][tetris] with a few more games: racing, tank shotting.
- Duck Hunt

If you would like to collaborate, tag [@tuantrungvo][twitter] on Twitter 👏👏👏

## Contributing

If you have any ideas, just [open an issue][issues] and tell me what you think. Notes that it is a very simple game, you could add in a lot of stuff: introducing level, add more invaders and stuff like that.

If you'd like to contribute, please fork the repository and make changes as you'd like. [Pull requests][pull] are warmly welcome.

## License

Feel free to use my code on your project. It would be great if you put a reference to this repository.

[MIT](https://opensource.org/licenses/MIT)

[twitter]: https://twitter.com/tuantrungvo
[time-spending]: dist/assets/readme/time-spending.png
[demo]: dist/assets/readme/invaders-demo.gif
[tetris]: https://tetris.trungk18.com/
[jira-clone]: https://jira.trungk18.com/
[typescript-template]: https://github.com/photonstorm/phaser3-typescript-project-template
[phaser2-invaders]: https://phaser.io/examples/v2/games/invaders
[phaser-api]: https://photonstorm.github.io/phaser3-docs/
[freecodecamp]: https://www.freecodecamp.org/news/how-to-build-a-simple-game-in-the-browser-with-phaser-3-and-typescript-bdc94719135/
[first-phaser-3-game]: https://phaser.io/tutorials/making-your-first-phaser-3-game/part1
[sounds]: https://www.classicgaming.cc/classics/space-invaders/sounds
[issues]: https://github.com/trungk18/space-invaders-phaser-3/issues/new
[pull]: https://github.com/trungk18/space-invaders-phaser-3/compare