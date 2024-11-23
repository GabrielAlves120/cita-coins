//Criando Variáveis
//Criamos uma variavel que recebe a informação / ele do documento Html
const botao = document.getElementById('botaoHtml');
let lamp = document.getElementById('lamp');
let statusTexto = document.getElementById('status');

//Criando uma função (bloco de código com função específica)

function alternarLampada(){
    //Se o texto do botão for ligar
    if (botao.textContent == "Ligar"){
        //Substituindo a imagem do elemento lampada atribuindo o src. Porque atribuimos o src? lembre-se quando criamos uma imagem no html, para atribuir uma imagem ao comando img, temos de colocar o src='caminho/nomeImagem'. Assim abaixo trocamos a imagem atribuindo um novo src ao nosso elemento lâmpada do html.
        lamp.src = 'imgLamp/ligado.png';
        //Abaixo a partir do método textContent atribuímos um novo texto para aparecer no nosso elemento do statusTexto que em nosso html é o elemento de id='status'
        botao.textContent = 'Desligar';
        //Abaixo a partir do método textContent atribuímos um novo texto para aparecer no nosso elemento do statusTexto que em nosso hytml é o elemento de id'status'
        statusTexto.textContent = 'Aceso';
        //Abaixo a partir do método style modificamos o design do elemento statusTexto que em nosso html é o elemento de id='status'. Neste caso trocamos a sua cor para laranja, podemos acessar todas as funções do Style se após a palavea style colocarmos o .(ponto)
        statusTexto.style.color = 'Orange';
        //Avaixo a partir do método style modificamos o design do elemento statusTexto que em nosso html é o elemento de id='status' trocando o tamanho da letra. Neste aso trocamos a cor. podemos acessar todas as funções do Style se após a palavra style colocarmos o .(ponto)
        statusTexto.style.fontsize = 30;
    } else {
        lamp.src = 'imgLamp/apagado.png';
        botao.textContent = 'Ligar';
        statusTexto.textContent = 'Apagado';
        statusTexto.style.color = 'rgb(126,125,125)';
    }
}

botao.addEventListener('click', alternarLampada);