//A0001
let nome;
let idade;
let oNome;
let aIdade;

const form = document.getElementById("form1");
form.addEventListener("submit", function (e){
    lerformulario(e);
})
function lerformulario(event){
    event.preventDefault();
    nome = document.getElementById("nome_informado").value;
    console.log("lerformulario, nome: "+nome)
    idade = document.getElementById("idade_informada").value;
    console.log("lerformulario, idade: "+idade)
    console.log("A001");
}

//A002
function dadosdigitados() {
    console.log("Dentro de dadosdigitados");
    console.log("..."+nome);
    console.log("..."+idade);
    document.getElementById("oNome").innerHTML = nome;
    document.getElementById("aIdade").innerHTML = idade;
    console.log("A002");  
}

//A003
const divCor = document.getElementById("idNomeIdade");
function fundoamarelo(){
    divCor.style.background = "yellow";

}
function fundoazul(){
    divCor.style.background = "blue";

}
function caixaCemPorCem(){
    divCor.classList.remove("caixaDuzentosPorDuzentos");
    divCor.classList.add("caixaCemPorCem");

}

function caixaDuzentosPorDuzentos(){
    divCor.classList.remove("caixaCemPorCem");
    divCor.classList.add("caixaDuzentosPorDuzentos");

}

function caixaCemPorCemEstilo(){
    divCor.classList.remove();
    divCor.style.height = "100px";
    divCor.style.width = "100px";
    

}

function caixaDuzentosPorDuzentosEstilo(){
    divCor.classList.remove();
    divCor.style.height = "200px";
    divCor.style.width = "200px";

}
