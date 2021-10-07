var cores = ['vermelho', 'amarelo', 'azul', 'marrom', 'verde', 'cinza']
document.getElementById('mud').disabled = false
var lm = -1
var cor = (Math.random()*5).toFixed(0)

var m = document.getElementById("display")

var texto = document.getElementById('cor')

texto.textContent = cores[cor] + ':'

console.log(cor)

var jogadores = []

function adicionarvitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias += 1
  
  exibir(jogadores)
}
function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates += 1
  jogador.pontos = cauculaP(jogador)
  exibir(jogadores)
}
function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas += 1
  jogador.vitorias = jogador.vitorias
  
  exibir(jogadores)
}
 

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
  
  

function mudar(){
    cor = (Math.random()*5).toFixed(0)
    texto.textContent = cores[cor] + ":"
    m.textContent = ""
    var input = document.getElementById('vermelho')
    input.value = ""
}

function enviar(){
    var input = document.getElementById('vermelho').value.toLowerCase()
    
    console.log(input)
    if (cores[cor] == 'azul'){
        if(input == "papel" | input == "papelão" | input == 'papel ou papelão'){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
            exibir(jogadores)
        }else{
            m.textContent = "Errou"
            adicionarDerrota(lm)
            exibir(jogadores)
        }
    }else if (cores[cor] == 'vermelho'){
        if(input == "plástico"){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
            exibir(jogadores)
        }else{
            m.textContent = "Errou"
            adicionarDerrota(lm)
            exibir(jogadores)
        }
    }else if (cores[cor] == 'verde'){
        if(input == "vidro"){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
            exibir(jogadores)
        }else{
            m.textContent = "Errou"
            adicionarDerrota(lm)
            exibir(jogadores)
        }
    }else if (cores[cor] == 'amarelo'){
        if(input == "ferro" | input == "metal"){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
            exibir(jogadores)
        }else{
            m.textContent = "Errou"
            adicionarDerrota(lm)
            exibir(jogadores)
        }
    }else if (cores[cor] == 'marrom'){
        if(input == "orgânico" | input == "lixo orgânico"){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
            exibir(jogadores)
        }else{
            m.textContent = "Errou"
            adicionarDerrota(lm)
            exibir(jogadores)
        }
    }else if (cores[cor] == 'cinza'){
        if(input == "não recilável"){
            m.textContent = 'acertou'
            adicionarvitoria(lm)
            exibir(jogadores)
        }else{
            m.textContent = "Errou"
            
            adicionarDerrota(lm)
            exibir(jogadores)
        }
    }
    input = document.getElementById('vermelho')
    input.value = " "
}
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