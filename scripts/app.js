const playerConfigOverlayerElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('back-drop');
const formElement = document.querySelector('form')
const errorOutputElement = document.getElementById('config-error')

const editPlayer1btnElement = document.getElementById('edit-player-1-btn'); 
const editPlayer2btnElement = document.getElementById('edit-player-2-btn'); 
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');

editPlayer1btnElement.addEventListener('click', openPlayerConfig);
editPlayer2btnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig)