const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
    {
        name: '',
        Symbol: 'X'
    },
    {
        name: '',
        Symbol: 'O'
    },
];

const playerConfigOverlayerElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('back-drop');
const formElement = document.querySelector('form');
const errorOutputElement = document.getElementById('config-error');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name')
const gameOverElement = document.getElementById('game-over')

const editPlayer1btnElement = document.getElementById('edit-player-1-btn'); 
const editPlayer2btnElement = document.getElementById('edit-player-2-btn'); 
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameBtnElement = document.getElementById('start-game-btn');
const gameBoardElement = document.getElementById('game-board');

editPlayer1btnElement.addEventListener('click', openPlayerConfig);
editPlayer2btnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig)

startNewGameBtnElement.addEventListener('click', startNewGame);

gameBoardElement.addEventListener('click', selectGameField);