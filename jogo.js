var cores = ['vermelho', 'amarelo', 'azul', 'marrom', 'verde', 'cinza']

var lm = -1
// definindo a cor a ser escolhida
var cor = (Math.random()*5).toFixed(0)

var m = document.getElementById("display")

var texto = document.getElementById('cor')

texto.textContent = cores[cor] + ':'

console.log(cor)
//lista onde entraram os jogadores com as propriedades vitorias, nome e derrotas
var jogadores = []

function adicionarvitoria(i){
  var jogador = jogadores[i]
  //acessando a proriedade e alterando
  jogador.vitorias += 1
  //atualizando a tabela
  exibir(jogadores)
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
   //acessando a proriedade e alterando
  jogador.derrotas += 1
  jogador.vitorias = jogador.vitorias
 //arrumando um bug, que impedia a vitoria após uma vitoria, adicionanod as condições novamente
  if (cores[cor] == 'azul'){
        if(input == "papel" | input == "papelão" | input == 'papel ou papelão' |input == "papel" & m.textContent == 'Errou'| input == "papelão" & m.textContent == 'Errou'| input == 'papel ou papelão' & m.textContent == 'Errou'){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
            exibir(jogadores)
            mudar()
        }else{
            m.textContent = "Errou"
            adicionarDerrota(lm)
            exibir(jogadores)
            input.innerHTML = ''
            mudar()
        }
    }else if (cores[cor] == 'vermelho'){
        if(input == "plástico" |input == "plástico" & m.textContent == 'Errou'){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
            exibir(jogadores)
            
        }else{
            m.textContent = "Errou"
            adicionarDerrota(lm)
            exibir(jogadores)
            input.innerHTML = ''
        }
    }else if (cores[cor] == 'verde'){
        if(input == "vidro"|input == "vidro" & m.textContent == 'Errou'){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
            exibir(jogadores)
        }else{
            m.textContent = "Errou"
            adicionarDerrota(lm)
            exibir(jogadores)
            input.innerHTML = ''
        }
    }else if (cores[cor] == 'amarelo'){
        if(input == "ferro" | input == "metal"|input == "ferro" & m.textContent == 'Errou'| input == "metal" & m.textContent == 'Errou'){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
            exibir(jogadores)
            
        }else{
            m.textContent = "Errou"
            adicionarDerrota(lm)
            exibir(jogadores)
            input.innerHTML = ''
        }
    }else if (cores[cor] == 'marrom'){
        if(input == "orgânico" | input == "lixo orgânico"|input == "orgânico" & m.textContent == 'Errou'|input == "lixo orgânico" & m.textContent == 'Errou'){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
            exibir(jogadores)
        }else{
            m.textContent = "Errou"
            adicionarDerrota(lm)
            exibir(jogadores)
            input.innerHTML = ''
        }
    }else if (cores[cor] == 'cinza'){
        if(input == "não recilável"|input == "não recilável" & m.textContent == 'Errou'){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
            exibir(jogadores)
        }else{
            m.textContent = "Errou"
            
            adicionarDerrota(lm)
            exibir(jogadores)
            input.innerHTML = ''
        }
    }
  //atualizando a tabela
  exibir(jogadores)
}
 
//cria a tebela
function exibir(jogadores) {
    var element = ""
    for (var i = 0; i < jogadores.length; i++) {
          element += "<tr><td>"+ jogadores[i].nome + "</td>"
          element += "<td>"+ jogadores[i].vitorias +"</td>"
         
          element += "<td>"+ jogadores[i].derrotas + "</td>"
         
          element += "</tr>"
          
    }
    
    
    var tela = document.getElementById("tabelaJogadores")
    tela.innerHTML = element
    
  }
  exibir(jogadores)
  //envia o nome e propriedades do jogador novo para o array no inicio do código
  function Envia() {
    var p = document.getElementById("aviso")
    var nome = document.getElementById("nome").value
    if ( nome != ""){
      var nome = document.getElementById("nome").value
      var nj = {nome:nome, vitorias:0, empates:0, derrotas:0, pontos:0};
      jogadores.push(nj)
      exibir(jogadores)
      p.innerHTML = ""
      lm++
      document.getElementById('mud').disabled = false
      document.getElementById('env').disabled = false
      document.getElementById('enviar').disabled = true
    }else{
  
      p.innerHTML = "Escreva um nome"
    }
  }
  
  
//muda a cor da lixeira
function mudar(){
    cor = (Math.random()*5).toFixed(0)
    texto.textContent = cores[cor] + ":"
    m.textContent = ""
    var input = document.getElementById('vermelho')
    input.value = ""
}
//envia a resposta, se estiver correta adiciona 1 ponto a tabela de vitorias e o mesmo para derrotas
function enviar(){
    var input = document.getElementById('vermelho').value.toLowerCase()
    
    console.log(input)
    if (cores[cor] == 'azul'){
        if(input == "papel" | input == "papelão" | input == 'papel ou papelão' |input == "papel" & m.textContent == 'Errou'| input == "papelão" & m.textContent == 'Errou'| input == 'papel ou papelão' & m.textContent == 'Errou'){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
            exibir(jogadores)
            mudar()
        }else{
            m.textContent = "Errou"
            adicionarDerrota(lm)
            exibir(jogadores)
            input.innerHTML = ''
            mudar()
        }
    }else if (cores[cor] == 'vermelho'){
        if(input == "plástico" |input == "plástico" & m.textContent == 'Errou'){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
            exibir(jogadores)
            
        }else{
            m.textContent = "Errou"
            adicionarDerrota(lm)
            exibir(jogadores)
            input.innerHTML = ''
        }
    }else if (cores[cor] == 'verde'){
        if(input == "vidro"|input == "vidro" & m.textContent == 'Errou'){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
            exibir(jogadores)
        }else{
            m.textContent = "Errou"
            adicionarDerrota(lm)
            exibir(jogadores)
            input.innerHTML = ''
        }
    }else if (cores[cor] == 'amarelo'){
        if(input == "ferro" | input == "metal"|input == "ferro" & m.textContent == 'Errou'| input == "metal" & m.textContent == 'Errou'){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
            exibir(jogadores)
            
        }else{
            m.textContent = "Errou"
            adicionarDerrota(lm)
            exibir(jogadores)
            input.innerHTML = ''
        }
    }else if (cores[cor] == 'marrom'){
        if(input == "orgânico" | input == "lixo orgânico"|input == "orgânico" & m.textContent == 'Errou'|input == "lixo orgânico" & m.textContent == 'Errou'){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
            exibir(jogadores)
        }else{
            m.textContent = "Errou"
            adicionarDerrota(lm)
            exibir(jogadores)
            input.innerHTML = ''
        }
    }else if (cores[cor] == 'cinza'){
        if(input == "não recilável"|input == "não recilável" & m.textContent == 'Errou'){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
            exibir(jogadores)
        }else{
            m.textContent = "Errou"
            
            adicionarDerrota(lm)
            exibir(jogadores)
            input.innerHTML = ''
        }
    }
    input = document.getElementById('vermelho')
    input.value = " "
}
//finaliza a rodada do jogador permitindo a entrada de outro
function finalizar(){
      document.getElementById('mud').disabled = true
      document.getElementById('env').disabled = true
      document.getElementById('enviar').disabled = false
}
/*Azul: Papel e Papelão</span>Vermelho: Plástico</span>Verde: vidroAmarelo: metal</span><span style="margin-left: 10px;">Marrom: organico</span>Cinza: não reciclavel*/
// criando um objeto que armazena propriedades diferentes
/*if (cores[cor] == 'azul'){
    if(input == "papel" | input == "papelão" | input == 'papel ou papelão'){
        m.textContent = 'acertou'
        adicionarvitoria(lm)
    }
    }else if (cores[cor] == 'vermelho'){
        if(input == "plástico"){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
        }
    }else if (cores[cor] == 'verde'){
        if(input == "vidro"){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
        }
    }else if (cores[cor] == 'amarelo'){
        if(input == "ferro" | input == "metal"){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
        }
    }else if (cores[cor] == 'marrom'){
        if(input == "orgânico" | input == "lixo orgânico"){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
        }
    }else if (cores[cor] == 'cinza'){
        if(input == "não recilável"){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
        } */
document.getElementById('enviar').disabled = false