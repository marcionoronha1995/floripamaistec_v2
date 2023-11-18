
function mudartextoum(){
    const textoum = document.getElementById("texto-1");
    document.getElementById("texto-3").inneHTML = "este texto";
    
};

function mudartextodois(){
    const textodois = document.getElementsByTagName("p");
    document.getElementById("texto-4").innerHTML = textodois[1].innerHTML;
    
};