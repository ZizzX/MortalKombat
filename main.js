const scorpion = {
  name: "Scorpion",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["cunai"],
  attack: function () {
    console.log(`${this.name} Fight...`);
  },
};

const kitana = {
  name: "Kitana",
  hp: 40,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["legs", "guns"],
  attack: function () {
    console.log(`${this.name} Fight...`);
  },
};

function createPlayer(
  playerClass = "player1",
  { name: playerName, hp: playerHealth = 100, img: playerImg } = {}
) {
  const player = document.createElement("div"),
    arenas = document.querySelector(".arenas"),
    progressbar = document.createElement("div"),
    life = document.createElement("div"),
    name = document.createElement("div"),
    character = document.createElement("div"),
    img = document.createElement("img");

  player.classList.add(playerClass);
  progressbar.classList.add("progressbar");
  life.classList.add("life");
  name.classList.add("name");
  character.classList.add("character");

  player.appendChild(character);
  player.appendChild(progressbar);

  progressbar.appendChild(life);
  progressbar.appendChild(name);

  character.appendChild(img);
  character.appendChild(img);

  life.style.width = `${playerHealth}%`;
  name.textContent = `${playerName}`;
  img.src = `${playerImg}`;

  arenas.appendChild(player);
}

createPlayer("player1", scorpion);
createPlayer("player2", kitana);
