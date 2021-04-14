window.onload = function() {
    getImagesAPI();
}
function getImagesAPI() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(dados => colocarFotoPagina(dados))

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(dados => console.log(dados))
}

function colocarFotoPagina(dados) {

document.getElementById('foto').innerHTML = "<img class='foto' src='" + dados.message + "'>";

}
