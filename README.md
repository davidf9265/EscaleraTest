# Snakes and ladders
This is a simple game fo one player. Looped execution.

## Installation

Use the node package manager tools.

If you don't have npm installed in your computer consider installing node under node version manager (nvm) on v18.12.1.

Then, install all dependencies...

```bash
npm install
```

Consider installing nodemon, it has been included as a dev dependency.

## Usage
The algorithm is meant to run straight forward... simply run
```bash
nodemon index.js
```

To change the ladders or snakes in the boards modify the "specifics" object in the index.js file. This object represents a connection between a begin frame (key) and a final frame (value), then a player will move from one to another when stepping on the frame.

The game was designed for a 25 frames board. Future versions will consider n players and n x n size boards.

## License

[MIT](https://choosealicense.com/licenses/mit/)