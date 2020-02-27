// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
player = document.getElementById('player');
btnPlay = document.getElementById('btnPlay');
btnPause = document.getElementById('btnPause');
btnVolMore = document.getElementById('btnVolMore');
btnVolLess = document.getElementById('btnVolLess');
lblDuration = document.getElementById('lblDuration');
lblSource = document.getElementById('lblSource');


start()

// Botão que diminui o volume
btnVolLess.addEventListener('click', function () {
    player.volume = player.volume - 0.1;
    currentVolume()
});

// Botão que aumenta o volume
btnVolMore.addEventListener('click', function () {
    player.volume = player.volume + 0.1;
    currentVolume()
});

// Botão que executa a faixa
btnPlay.addEventListener('click', function () {
    player.play();
});

// Botão que para a faixa
btnPause.addEventListener('click', function () {
    player.pause();
});

// Controla o text do volume
function currentVolume() {
    lblVolume.innerText = Math.round(player.volume * 10)
}

// Verifica o tempo corrente da música
function currentTime() {
    let date = new Date(0);
    date.setSeconds(player.currentTime); // specify value for SECONDS here
    lblDuration.innerText = date.toISOString().substr(11, 8);
}

// Função de atualização em tempo real
setInterval(timeExecute, 500);
function timeExecute() {
    currentTime()
}

// Configurações executadas ao iniciar
function start() {
    player.volume = .5; //O volume inicia em 50%
    currentVolume()
    currentTime()
}