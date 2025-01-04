const lanchonetes = [
    "MackMellons Lanches",
    "Lancheria Pelotense",
    "Sanata Lanches",
    "Circulus Lanches",
    "Dada Lanches",
    "Cannil Lanches",
    "Petiskao Lanches",
    "Jairo Lanches",
    "Ronaldo Lanches",
    "Gordo Lanches",
    "Encontro Lanches",
    "Porto do Lanche",
    "PACman Lanches",
    "Fornalha Lanches e Pizzas",
    "Gago Lanches",
    "Zé Rocha Lanches",
    "Container Lanches",
    "Tio Clóvis",
    "Juninho's",
    "Polonga Lanches",
    "Wilson Lanches",
    "Lilian Lanches",
    "Lanches Ringo Pizzas",
    "Bolonha Lanches",
    "Confraria do Bauru",
    "Catolica Lanches",
    "Bauru na Caixinha",
    "Sr. Bauru",
    "Mister Bauru",
    "Revoada lanches",
    "Atena Laches"
]

const links = [
    [
        "https://www.instagram.com/mackmellonslanches",
        "https://www.instagram.com/lancheriapelotense/?hl=pt",
        "https://www.sanatalanches.com.br/",
        "https://www.circuluslanches.com.br/site/",
        "https://www.dadalanches.com.br/Site/Content/Home/",
        "https://www.instagram.com/cannillanches1/",
        "https://www.instagram.com/petiskao.lanches.pelotas/",
        "https://www.instagram.com/jairolanchespelotas/",
        "https://www.instagram.com/ronaldolanches_pel/",
        "#",
        "https://www.instagram.com/encontrolanches/",
        "https://www.instagram.com/portodolanchepel/",
        "https://www.facebook.com/profile.php?id=100064116184442",
        "https://www.instagram.com/fornalhaoficialbr/",
        "https://www.instagram.com/gago.lanchess/",
        "https://www.instagram.com/zerochalanches/",
        "https://containerlanches.com/",
        "https://www.instagram.com/explore/locations/305640629772732/tio-clovis-lanches/?hl=pt-br",
        "https://www.instagram.com/juninhospelotas/",
        "https://www.instagram.com/polongalanches/",
        "https://www.instagram.com/wilsonlanchesr/",
        "https://lilianlanches.com.br/",
        "https://www.instagram.com/lanchesringo/",
        "https://www.instagram.com/bolonha_lanches/",
        "https://www.instagram.com/confrariadobauru/",
        "https://www.instagram.com/catolicalanches/",
        "https://pelotas.baurunacaixinha.com.br/localidade/",
        "https://www.instagram.com/sr.bauru/",
        "https://www.instagram.com/mister_bauru/",
        "https://www.instagram.com/revoada_lanchesedrinks/",
        "https://www.instagram.com/atenalanches/"
    ]
]

function Sortear() {
    if (lanchonetes.length === 0 || links.length === 0) {
        console.error('Os dados das lanchonetes ou links não estão disponíveis.');
        return;
    }

    const numeroSorteado = Math.floor(Math.random() * lanchonetes.length);
    const respElement = document.getElementById('resp');
    const linkElement = document.createElement('a'); // Cria dinamicamente o link

    linkElement.href = links[numeroSorteado];
    linkElement.innerText = lanchonetes[numeroSorteado];
    linkElement.target = "_blank"; // Abre o link em nova aba

    // Limpa o conteúdo anterior e adiciona o novo link
    respElement.innerHTML = "";
    respElement.appendChild(linkElement);
}