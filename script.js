//Habilitando escuta de evento na página
document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase()); // Pegando a tecla e convertendo em minuscula
});
let botoes = document.querySelectorAll(".key");
for (let i = 0; i < botoes.length; i++) {
  let botao = botoes[i];
  botao.addEventListener("click", () => {
    let data = botao.getAttribute("data-key");
    playSound(data);
  });
}

document.querySelector("#play").addEventListener("click", () => {
  let song = document.querySelector("#input").value; //pegando os dados do input
  if (song !== "") {
    let songArray = song.split("");
    playSong(songArray);
  }
});

//Criando a Função que tocará o som
function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`); // selecionando o audio
  let keyElement = document.querySelector(`button[data-key="${sound}"]`); // selecionando a div key correspondente
  if (audioElement) {
    audioElement.currentTime = 0; //zerando a posição do audio
    audioElement.play(); //usando o método play disponível na tag audio
  }
  if (keyElement) {
    keyElement.classList.add("active");
    setTimeout(() => {
      keyElement.classList.remove("active"); // definindo um timer para remover o active
    }, 100);
  }
}
//Criando a função de composição
function playSong(songArray) {
  let wait = 0; //Preparando um tempo entre os sons
  for (let songItem of songArray) {
    setTimeout(() => {
      //diminuindo a velocidade do for/play
      playSound(`key${songItem}`); // passando para a função tocar
    }, wait);
    wait += 250; //a cada rodada aumentando o delay
  }
}
