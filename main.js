const nomes =["Vinicius","Mendes","Silva"]
nomes.push(x)
const lista = document.getElementById("lista")

for(let nome of nomes){
    lista.innerHTML += '<li>$nome<li>'
}