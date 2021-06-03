const Scorpion = {
    name: 'Scorpion',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['cunai'],
    attack: function() {
        console.log(`${this.name} Fight...`)
    }
}

const kitana = {
    name: 'kitana',
    hp: 40,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['legs', 'guns'],
    attack: function() {
        console.log(`${this.name} Fight...`)
    }
}

function createPlayer(playerClass, playerName, playerHealth, playerImg) {
    const player = document.createElement('div');
    player.classList.add(`${playerClass}`);

    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');

    const life = document.createElement('div');
    life.classList.add('life');
    life.style.width = `${playerHealth}%`;

    const name =  document.createElement('div');
    name.classList.add('name');
    name.textContent = `${playerName}`;

    progressbar.appendChild(life);
    progressbar.appendChild(name);


    const character = document.createElement('div');
    character.classList.add('character');

    player.appendChild(character);
    player.appendChild(progressbar);
    
    

    const img = document.createElement('img');
    character.appendChild(img);
    img.src = `${playerImg}`;
    character.appendChild(img)


    const arenas = document.querySelector('.arenas');
    arenas.appendChild(player);
}

createPlayer('player1', Scorpion.name, Scorpion.hp, Scorpion.img);
createPlayer('player2', kitana.name, kitana.hp, kitana.img);