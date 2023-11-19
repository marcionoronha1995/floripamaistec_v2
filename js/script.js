//A0001
//RECEBER DADOS
//USAR O ADDEVENTLISTENER
//USAR O PREVENTDEFAULT
//AQUI VOU LER O ID DO HTML
//E ATRIBUIR A UMA VARIAVEL USANDO .VALUE
//VOU MUDAR A FORMA NORMAL DO FUNCIONAMENTO O SITE

let nome;
let idade;
let oNome;
let aIdade;

const form1 = document.getElementById("form1");
form1.addEventListener("submit", function (e){
    lerformulario(e);
});
function lerformulario(event){
    event.preventDefault();
    //E AQUI QUE ESTOU PASSANDO O VALOR DE 
    //NOME_INFORMADO
    //PARA A VARIAVEL NOME
    nome = document.getElementById("nome_informado").value;
    console.log("lerformulario, nome: "+nome)
    //E AQUI QUE ESTOU PASSANDO O VALOR DE
    //IDADE_INFORMADA PARA
    //A VARIAVEL IDADE
    idade = document.getElementById("idade_informada").value;
    console.log("lerformulario, idade: "+idade)
    console.log("A001");
}

//A002
//COM O GET ENCONTRO O NOME
//COM O INNERHTML vou alterar o HTML
//COM O = VOU ATRIBUIR A VARIAVEL PARA O ID NO HTML
function dadosdigitados() {
    console.log("Dentro de dadosdigitados");
    console.log("..."+nome);
    console.log("..."+idade);
    //E AQUI QUE A VARIAVEL NOME
    //É ATRIBUIDA AO ID ONOME DA PAGINA HTML
    document.getElementById("oNome").innerHTML = nome;
    //E AQUI QUE A VARIAVEL IDADE
    //É ATRIBUIDA AO ID AIDADE DA PAGINA HTML
    document.getElementById("aIdade").innerHTML = idade;
    console.log("A002");  
}

//A003 
//CSS STYLE MUDANÇA DO ESTILO 
//CLASSLIST ADD REMOVE UM CLASSE . NO CSS
//NO HTML É id="" único
//SE FOR ID É # NO CSS
//NO HTML É class="" várias
const divCor = document.getElementById("idNomeIdade");
function fundoamarelo(){
    divCor.style.background = "yellow";

}
function fundoazul(){
    divCor.style.background = "blue";

}
function caixaCemPorCem(){
    divCor.classList.remove("caixaCemPorCem");
    divCor.classList.remove("caixaDuzentosPorDuzentos");
    divCor.classList.add("caixaCemPorCem");

}

function caixaDuzentosPorDuzentos(){
    divCor.classList.remove("caixaCemPorCem");
    divCor.classList.remove("caixaDuzentosPorDuzentos");
    divCor.classList.add("caixaDuzentosPorDuzentos");

}

function caixaCemPorCemEstilo(){
    divCor.classList.remove("caixaCemPorCem");
    divCor.classList.remove("caixaDuzentosPorDuzentos");
    divCor.style.height = "100px";
    divCor.style.width = "100px";
    

}

function caixaDuzentosPorDuzentosEstilo(){
    divCor.classList.remove("caixaCemPorCem");
    divCor.classList.remove("caixaDuzentosPorDuzentos");
    divCor.style.height = "200px";
    divCor.style.width = "200px";

}

//A004 
//window.
//PROMPT 
//CONFIRM 
//ALERT
function promptA(){
    let dadoNome = window.prompt("Digite o seu nome:");
    //SEMPRE O DADO É UMA STRING
    console.log("dentro do prompt...");
    console.log("digitado: " + dadoNome);
    let truefalse = window.prompt(dadoNome + "você está estudando?");
    console.log("digitado: " + truefalse);
}
function confirmB(){
    let voceEstaAi = window.confirm("Você está aÍ?");
    console.log("reposta... "+voceEstaAi);
}
function alertC(){
    let aviso = window.alert("texto de mensagem");
    console.log("dentro do ALERT...");

}

//A005 
//ARRAY 
//PUSH() gravar no final do array
//POP()  remover o último elemento do array
//SHIFT() remover o primeiro elemento do array
//UNSHIFT() adiciona um elemento ao inicio do array
//SPLICE() adiciona ou remove de uma possição especifica
//SLICE() retorna uma cópia de uma parte do array
//JOIN() converte um array em uma estring
//FILTER() filtra array com base em uma condição e retorna os elementos filtrados
//MAP() itera por todos os itens do array
var arrayNomes = [];
var contador = 0;


//atribuindo os valores para o array
arrayNomes = ['Marcio', 'Marcelo', 'Marcos']

//publicando os nomes na pagina HTML
document.getElementById("NomesGravados").innerText = arrayNomes;

function novoNomeArrayBeatriz(){
  arrayNomes.push("Beatriz");
  document.getElementById("NomesGravados").innerText = arrayNomes;
}
function removerPrimeiroNome(){
    arrayNomes.shift();
    document.getElementById("NomesGravados").innerText = arrayNomes;

}
let arrayOutros = ['Jose','Pedro']
function fazUmaString(){
    arrayNomes.join(arrayOutros);
    document.getElementById("NomesGravados").innerText = arrayNomes;

}

//A006
//RECEBENDO NUMEROS PARA UMA ARRAY
//RECEBENDO CINCO NÚMEROS INTEIROS
let cinconumeros = [];
function digiteCincoNumeros(){
    for(let i = 0; i < 5; i++){

        let numreceber = Number(prompt(i +") Diginte um número: "));
        //iterar o array para não repetir número

        let JaTemNumero = cinconumeros.filter(function (n) {
            return n == numreceber;
        });
        if(JaTemNumero.length == 0){
            cinconumeros.push(numreceber);
        } else { 
            alert ("Este número já existe");
            i--;
        }

        
        document.getElementById("cincoNumerosDigitados").innerHTML = cinconumeros;
        document.getElementById("cincoNumerosDigitadosC").innerHTML = cinconumeros.sort();
    }
}

//A007
//OBJETOS
//DECLARANDO UMA CHAVE
const usuarioDados = {
    nome:"",
    telefone:"",
    email:"",

}


















