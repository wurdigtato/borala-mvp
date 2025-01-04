let lanchonetes = [];
let links = [];
let dadosCarregados = false;

// Função para carregar os dados
function carregarDados() {
    const carregarLanchonetes = fetch('./data/locais.json')
        .then(response => response.json())
        .then(data => {
            lanchonetes = Object.values(data);
        })
        .catch(error => {
            console.error('Erro ao carregar dados de lanchonetes:', error);
        });

    const carregarLinks = fetch('./data/links.json')
        .then(response => response.json())
        .then(data => {
            links = Object.values(data);
        })
        .catch(error => {
            console.error('Erro ao carregar dados de links:', error);
        });

    // Garante que os dados sejam carregados antes de ativar o sorteio
    Promise.all([carregarLanchonetes, carregarLinks])
        .then(() => {
            if (lanchonetes.length > 0 && links.length > 0) {
                dadosCarregados = true;
                console.log('Dados carregados com sucesso!');
            } else {
                console.error('Os dados não foram carregados corretamente.');
            }
        })
        .catch(() => {
            console.error('Erro ao carregar os dados.');
        });
}

// Função para sortear
function Sortear() {
    if (!dadosCarregados) {
        alert('Os dados ainda não foram carregados. Tente novamente mais tarde.');
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

// Chama a função para carregar os dados ao iniciar
carregarDados();