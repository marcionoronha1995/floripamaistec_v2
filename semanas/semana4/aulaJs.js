
  let nome;
  function lernome(){
      nome = document.getElementById("nome").value;
      console.log("O nome é " + nome);

  }
  
  let elemento_meu_nome;
  
  
  elemento_meu_nome = document.getElementById("meu_nome");

  
  function tamanhoTexto(){
      elemento_meu_nome.innerHTML = "<h1>Márcio</h1>";
      
    };
    function corLetra(){
        elemento_meu_nome.style.color = "green";
        
    }
    function corFundo(){
        
        elemento_meu_nome.style.backgroundColor = "yellow";
  }
