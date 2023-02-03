// Variáveis
const apiKey = "e6a444a045532491d14adafebebbd588"; //chave da API openWeather

// Funções
function mostrarNaTela(dados) { //função para mostrar na tela a cidade que o usuario escrever no input

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name //escrevendo o nome da cidade que o usuario escolher
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C" //escrevendo a temperatura da cidade
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%" //escrevendo a umidade da cidade
    document.querySelector(".descricao").innerHTML = dados.weather[0].description //escrevendo a descrição do tempo da cidade
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png" //alterando o icone ilustrativo com base na descrição do tempo na cidade
}

async function buscarCidade(cidade) { //função para pegar a cidade que o usuario digitar no input
    let dados = await fetch( //await para esperar a resposta da API
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + apiKey + "&lang=pt_br" + "&units=metric" //variavel contendo os dados da API, traduzindo para pt-br e transformando as unidades de medida em celsius
    ).then(resposta => resposta.json()) //tranformando a resposta em .json
    console.log(dados); //exibe todos os dados no console
    mostrarNaTela(dados); //chamando a função mostrarNaTela
}

function userClick() { // função para quando o usuario clicar no botão de pesquisa
    let userCidade = document.querySelector(".user-input").value // colocando o input em uma variavel e usando .value para pegar apenas o que foi digitado dentro do input
    buscarCidade(userCidade); //chamando a função userCidade
}