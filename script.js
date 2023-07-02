// use as little global code as possible

// when there is one of something, use a module (prototypal pattern). https://youtu.be/doXpW5AD60Q

// When there is multiple of something, use a factory function

let gameBoard = {};

let displayController = {};

let playerFactory = (name) => {
  this.name = name;
  const sayName = () => console.log(`${this.name}`);
  return {
    sayName,
  };
};

const player1 = playerFactory("sally");
const player2 = playerFactory("jeff");

player1.sayName();
