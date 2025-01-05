// Sorteio Lancheria

let locais = []
let links = []
let url

fetch('data/locais.json')
    .then(response => {
        if(!response.ok) {
            throw new Error('Erro - Locais')
        }
        return response.json()
    })
    .then(data => {
        locais = data
    })

fetch('data/links.json')
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

// Modais

const fadeSobre = document.getElementById('fade-sobre')
const fadeComo = document.getElementById('fade-como')
const modalSobre = document.getElementById('modal-sobre') 
const btnSobre = document.getElementById('btn-sobre')
const closeSobre = document.getElementById('close-sobre')
const btnComoUsar = document.getElementById('btn-como-usar')
const modalComoUsar = document.getElementById('modal-como-usar')
const closeComoUsar = document.getElementById('close-como')

function ModalSobre (){
    fadeSobre.classList.toggle('show')
    modalSobre.classList.toggle('show')
}

function ModalComoUsar() {
    fadeComo.classList.toggle('show')
    modalComoUsar.classList.toggle('show')
}

btnSobre.addEventListener('click', (e) => {
    e.preventDefault()
    ModalSobre()
} )

closeSobre.addEventListener('click', (e) => {
    e.preventDefault()
    ModalSobre()
})

fadeSobre.addEventListener('click', (e) => {
    e.preventDefault()
    ModalSobre()
})

btnComoUsar.addEventListener('click', (e) => {
    e.preventDefault()
    ModalComoUsar()
})

closeComoUsar.addEventListener('click', (e) => {
    e.preventDefault()
    ModalComoUsar()
})

fadeComo.addEventListener('click', (e) => {
    e.preventDefault()
    ModalComoUsar()
}) 