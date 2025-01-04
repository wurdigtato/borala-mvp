let locais = []
let links = []
let url

fetch('/data/locais.json')
    .then(response => {
        if(!response.ok) {
            throw new Error('Erro - Locais')
        }
        return response.json()
    })
    .then(data => {
        locais = data
    })

fetch('/data/links.json')
    .then(response => {
        if(!response.ok){
            throw new Error('Erro - Link')
        }
        return response.json()
    })
    .then(data => {
        links = data
    })

document.addEventListener('DOMContentLoaded', () => {
    url = document.getElementById('url')
    
})    

function Sortear() {
    const numeroSorteado = Math.floor(Math.random() * locais.length);
    const respElement = document.getElementById('resp');
    
    respElement.innerHTML = `<a href="${links[numeroSorteado]}" target="_blank">${locais[numeroSorteado]}</a>`

}
