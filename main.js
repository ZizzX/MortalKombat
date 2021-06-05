const $arenas = document.querySelector(".arenas"),
  $randomButton = document.querySelector(".button");

const player1 = {
  player: 1,
  name: "Scorpion",
  hp: 100,
  // img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  img: './assets/scorpion.gif',
  weapon: ["cunai"],
  attack: function () {
    console.log(`${this.name} Fight...`);
  },
};

const player2 = {
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

function winTitle() {
  const $winTitle = createElement("div", "loseTitle");
  const $player_1Img = document.querySelector('.player1 .character img');
  const $player_2Img = document.querySelector('.player2 .character img');
  if (player1.hp <= 0) {
    $winTitle.textContent = player2.name + ' wins';
    $player_2Img.setAttribute('src', './assets/a3.gif');
  } else if (player2.hp <= 0) {
    $winTitle.textContent = player1.name + ' wins';
    $player_1Img.setAttribute('src', './assets/scorpion-wins.gif');
  } else if (player1.hp <= 0 && player2.hp <= 0) {
    $winTitle.textContent = 'Draw';
  }
  $arenas.appendChild($winTitle)
}

function changeHP(char) {
  const $playerLife = document.querySelector(`.player${char.player} .life`);
  char.hp -= Math.ceil(Math.random() * 20);
  $playerLife.style.width = `${char.hp}%`;
  if(char.hp <= 0) {
    $playerLife.style.width = '0%';
    $randomButton.disabled = true;
    winTitle()
  }
}


$randomButton.addEventListener("click", () => {
  changeHP(player1);
  changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

