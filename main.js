const Scorpion = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: 'cunai',
    attack: function() {
        console.log(`${this.name} Fight...`)
    }
}

function createPlayer(playerClass, playerName, playerHealth) {
    const player = document.createElement('div');
    player1.classList.add(`.${playerClass}`);

    const progressbar = document.createElement('div');
    progressbar.classList.add('.progressbar');

    const character = document.createElement('div');
    character.classList.add('.character');

    player.appendChild(progressbar);
    player.appendChild(character);
    

    const life = document.createElement('div');
    life.classList.add('.life');
    life.style.width = `${playerHealth}`;

    const name =  document.createElement('div');
    name.classList.add('.name');
    name.textContent = `${playerName}`;

    progressbar.appendChild(life);
    progressbar.appendChild(name);

    const img = document.createElement('img');
    character.appendChild(img);
    img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
    character.appendChild(img)


    const arenas = document.createElement('div');
    arenas.classList.add('.arenas');
    arenas.appendChild(player);
}

createPlayer('player1', Scorpion.name, Scorpion.hp);