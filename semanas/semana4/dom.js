
function mudartextoum(){
    console.log("mudartextoum()");
    const textoum = document.getElementById("texto-1");
    document.getElementById("texto-3").innerHTML = textoum.innerHTML;
    document.getElementById("data-hora-1").innerHTML = "Data: " + Date();    
};

function mudartextodois(){
    const textodois = document.getElementsByTagName("p");
    const textotres = document.getElementById("texto-2");
    document.getElementById("texto-4").innerHTML = textodois[1].innerHTML;
    document.getElementById("texto-5").innerHTML = textotres.innerHTML;
    document.getElementById("data-hora-2").innerHTML = "Data: " + Date();   
    
};
