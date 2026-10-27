const nomes =["Vinicius", "Mendes", "Silva"];

const formulario = document.getElementById("formulario");
const input = document.getElementById("texto");
const lista = document.getElementById("lista");

function mostrarNomes() {
    lista.innerHTML = "";

    for (let nome of nomes) {
        lista.innerHTML += `<li>${nome}</li>`;
    }
}

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const novoNome = input.value.trim();

    if (novoNome !== "") {
        nomes.push(novoNome);   
        mostrarNomes();         
        input.value = "";       
    }
});

mostrarNomes();