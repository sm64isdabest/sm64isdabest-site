function getImagePath(gameName) {
    // Converte o nome do jogo para um nome de arquivo válido
    return `../img/biblioteca/jogos/${gameName.toLowerCase().replace(/[^a-z0-9]/g, '-')}.jpg`;
}

function createGameCard(game) {
    const card = document.createElement('div');
    card.classList.add('game-card');

    let badgesHTML = '';
    // if (game.isDLC) {
    //     badgesHTML += '<span class="game-badge dlc">DLC</span>';
    // }
    // if (game.isMod) {
    //     badgesHTML += '<span class="game-badge mod">MOD</span>';
    // }

    card.innerHTML = `
                <img src="${getImagePath(game.name)}" alt="${game.name}" loading="lazy">
                <div class="game-card-info">
                    <div class="game-name">${game.name}</div>
                    ${badgesHTML}
                </div>
            `;

    return card;
}

function populateGames() {
    // Platinados
    const platGamesContainer = document.querySelector('.plat-games');
    const platCount = document.querySelector('.plat-count');
    gamesData.platinados.forEach(game => {
        platGamesContainer.appendChild(createGameCard(game));
    });
    platCount.textContent = gamesData.platinados.length;

    // Zerados
    const zeradosGamesContainer = document.querySelector('.zerados-games');
    const zeradosCount = document.querySelector('.zerados-count');
    gamesData.zerados.forEach(game => {
        zeradosGamesContainer.appendChild(createGameCard(game));
    });
    zeradosCount.textContent = gamesData.zerados.length;

    // Biblioteca
    const bibliotecaGamesContainer = document.querySelector('.biblioteca-games');
    const bibliotecaCount = document.querySelector('.biblioteca-count');
    gamesData.biblioteca.forEach(game => {
        bibliotecaGamesContainer.appendChild(createGameCard(game));
    });
    bibliotecaCount.textContent = gamesData.biblioteca.length;
}

// Executar quando a página carregar
document.addEventListener('DOMContentLoaded', populateGames);