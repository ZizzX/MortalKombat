const $arenas = document.querySelector(".arenas"),
  $randomButton = document.querySelector(".button");

const scorpion = {
  player: 1,
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["cunai"],
  attack: function () {
    console.log(`${this.name} Fight...`);
  },
};

const kitana = {
  player: 2,
  name: "Kitana",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["legs", "guns"],
  attack: function () {
    console.log(`${this.name} Fight...`);
  },
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);

  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer({
  player,
  name: playerName,
  hp: playerHealth = 100,
  img: playerImg,
} = {}) {
  const $player = createElement("div", `player${player}`),
    $progressbar = createElement("div", "progressbar"),
    $life = createElement("div", "life"),
    $name = createElement("div", "name"),
    $character = createElement("div", "character"),
    $img = createElement("img");

  $life.style.width = `${playerHealth}%`;
  $name.textContent = `${playerName}`;
  $img.src = `${playerImg}`;

  $player.appendChild($character);
  $player.appendChild($progressbar);

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  $character.appendChild($img);
  $character.appendChild($img);

  return $player;
}

function winTitle(person) {
  const $winTitle = createElement("div", "loseTitle");
  $winTitle.textContent = `${person.name} wins`;

  return $winTitle;
}

function changeHP(person) {
  const $playerLife = document.querySelector(`.player${person.player} .life`);
  person.hp -= Math.floor(Math.random() * 20);
  $playerLife.style.width = `${person.hp}%`;
  // console.log(person.name + " : " + person.hp);

  if (person.hp < 0) {
    return person.hp;
  }
  return person.hp;
}

$randomButton.addEventListener("click", () => {
  changeHP(kitana);
  changeHP(scorpion);
});

$arenas.appendChild(createPlayer(scorpion));
$arenas.appendChild(createPlayer(kitana));
