 const button=document.getElementById("button");
button.addEventListener("click",jugar);

function jugar(){
    let intentos=10;

    var container_inicio=document.getElementById("container-inicio");
    container_inicio.style.display="none";

    var container_game=document.getElementById("container-game");
    container_game.style.display="block";
       
   const nombre=document.getElementById("nombre").value;
    const span=document.getElementById("span");
    span.innerHTML=`${nombre} ingresa un numero del 1 al 1000 : `
    const texto=document.getElementById("mensaje");
    var numero_random=parseInt(Math.random()*100)+1;

  const numero_ingresado=document.getElementById("numero");
     numero_ingresado.addEventListener("keypress",function(e){
            if(e.key==='Enter'){
                if(intentos>0){
                    
                        if(numero_ingresado.value==numero_random){
                            texto.innerHTML=`Ganaste capo`;
                        }
                        else  
                            if(numero_ingresado.value<numero_random)
                                texto.innerHTML=`El numero es mas grande <br> <br> Intentos : ${--intentos}`;
                            else {
                                texto.innerHTML=`El numero es mas pequeño <br> <br> Intentos : ${--intentos}`;
                            }
                            e.key=""
                        }
                    else
                        container_game.style.display="none";
                numero_ingresado.value=""

                }
                        
            });
    

    
} 