
function toggleMode() {
    const html = document.documentElement;

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
    if (html.classList.contains('light')) {
        html.classList.remove('light');
// se estiver light mode, adicionar a imagem light
  img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        html.classList.add('light');
        // se tiver light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png')
        
    }
}

// Adiciona o listener de evento ao botão de switch
document.getElementById('switch').addEventListener('click', toggleMode);
