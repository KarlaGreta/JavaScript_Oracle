let button=document.getElementById("button");



button.addEventListener('click',calcular);

function calcular(){
    
    let num_ingreso =document.getElementById("entrada").value;
    let tipo_ingreso =document.getElementById("op_entrada");
    let ingreso=tipo_ingreso.options[tipo_ingreso.selectedIndex].value;

    let num_salida =document.getElementById("salida");
    let tipo_salida =document.getElementById("op_salida");
    let salida=tipo_salida.options[tipo_salida.selectedIndex].value;

    var auxiliar;

    switch (ingreso){
        case "f":{
                    num_ingreso=(num_ingreso-32)/9;
                    break;
        }
        case "c":{
            num_ingreso=num_ingreso/5;
            break;
        }
        case "k":{
            num_ingreso=(num_ingreso-273)/5;
            break;

        }
    }

    switch (salida){
        case "f":{
            auxiliar=(num_ingreso*9)+32;
                    break;
        }
        case "c":{
            auxiliar=num_ingreso*5;
            break;
        }
        case "k":{
            auxiliar=(num_ingreso*5)+273;
            break;

        }
    }
    num_salida.value=auxiliar;
 

}