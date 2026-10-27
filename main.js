console.log("teste")
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
})
    const nomes =["Vinicius","Mendes","Silva"]

    const lista = document.getElementById("lista")
    for(let nome of nomes) {
        lista.innerHTML += `<li>${nome}<li>`
    }