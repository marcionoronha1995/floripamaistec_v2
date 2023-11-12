
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
    const macaEscolha_ckx = document.querySelector('input[name="macaEscolha"]:checked');
    const batataEscolha_ckx = document.querySelector('input[name="batataEscolha"]:checked');
    const positivoEscolha_ckx = document.querySelector('input[name="positivoEscolha"]:checked');
    const flexibilidadeEscolha_ckx = document.querySelector('input[name="flexibilidadeEscolha"]:checked');
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
    const vehicle11 = document.querySelector('input[name="vehicle1"]:checked');
    const vehicle12 = document.querySelector('input[name="vehicle2"]:checked');
    const vehicle13 = document.querySelector('input[name="vehicle3"]:checked');
    console.log(
        vehicle11 +"..." +
        vehicle12 +"..." +
        vehicle13 +"..."
    );
    console.log(vehicle11);
    console.log(vehicle12);
    console.log(vehicle13);
}

function processarResposta() {
    const resposta = document.querySelector('input[name="gosta-de-flores"]:checked');

    if (resposta) {
      switch (resposta.value) {
        case 'sim':
          // Código a ser executado se a resposta for 'sim'
          alert('Que ótimo! Flores são maravilhosas.');
          break;
        case 'nao':
          // Código a ser executado se a resposta for 'não'
          alert('Entendi. Flores podem não ser a preferência de todos.');
          break;
        default:
          break;
      }
    } else {
      alert('Por favor, selecione uma resposta antes de enviar.');
    }
  }

  function obterHora() {
    var horaInformada = document.getElementById('hora').value;
    var partesHora = horaInformada.split(':');
    var hora = parseInt(partesHora[0], 10);
    console.log("Estou na função hora...hora informada " + horaInformada);
    var perioDia = "noite";
    if(hora >= 5 && hora < 12){
      perioDia = "manhã"
    };
    if(hora >= 12 && hora < 18){
      perioDia = "tarde"
    };
    switch (perioDia) {
      case 'manhã':
        alert('Bom dia!');
        break;
      case 'tarde':
        alert('Boa tarde!');
        break;
      default:
        alert('Boa noite!');
        break;
    }
  }
    

