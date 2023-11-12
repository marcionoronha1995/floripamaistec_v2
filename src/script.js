
function lerDadosHTML_Palavra(){
    const textoUm = document.getElementById("primeiraPalavra").value;
    const textoDois = document.getElementById("segundaPalavra").value;
    console.log("Estou na função de palavras..." + textoUm+"..."+textoDois);    
    console.log(textoUm);
    console.log(textoDois);
    document.getElementById("textoUm_Html").innerHTML = textoUm;
    document.getElementById("textoDois_Html").innerHTML = textoDois;
}

function lerDadosHTML_Checkbox(){
    console.log("por dentro do checkbox...");
    const macaEscolha_ckx = document.getElementById("macaEscolha").value;
    const batataEscolha_ckx = document.getElementById("batataEscolha").value;
    const positivoEscolha_ckx = document.getElementById("positivoEscolha").value;
    const flexibilidadeEscolha_ckx = document.getElementById("flexibilidadeEscolha").value;
    console.log(
        macaEscolha_ckx +"..." +
        batataEscolha_ckx +"..." +
        positivoEscolha_ckx +"..." +
        flexibilidadeEscolha_ckx +"..."
    );
    console.log(macaEscolha_ckx);
    console.log(batataEscolha_ckx);
    console.log(positivoEscolha_ckx);
    console.log(flexibilidadeEscolha_ckx);
}

function lerDadosHTML_Checkbox2(){
    console.log("por dentro do checkbox 2...");
    const vehicle11 = document.getElementById("vehicle1").value;
    const vehicle12 = document.getElementById("vehicle2").value;
    const vehicle13 = document.getElementById("vehicle3").value;
    console.log(
        vehicle11 +"..." +
        vehicle12 +"..." +
        vehicle13 +"..."
    );
    console.log(vehicle11);
    console.log(vehicle12);
    console.log(vehicle13);
}

