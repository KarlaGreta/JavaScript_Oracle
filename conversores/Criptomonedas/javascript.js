const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '12aff6e75bmsh55833cf7670ffaap1a15e2jsn7bf6a1d1d34e',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};
const response= fetch(url, options).then(res=>res.json());
 response.then(res=>createOptions(res))
 .catch(err=>console.error(err));

 function createOptions(arr){
     arr.data.coins.forEach(function(coin,id){
        const selec=document.getElementById("op_entrada");
        const sele1=document.getElementById("op_salida");
        const coinName=coin.name;
        const opt =document.createElement("option");
        const opt2 =document.createElement("option");
        opt.innerHTML=`<option value= ${coinName}>${coinName}</option>`;
        opt2.innerHTML=opt.value;
        selec.append(opt);
        sele1.append(opt2);
    })
   
 }

let button=document.getElementById("button");

button.addEventListener('click',calcular);

function calcular(){
    response.then(res=>convertir(res))}
    
    
function convertir(res){

        let num_ingreso =document.getElementById("entrada").value;
        let tipo_ingreso =document.getElementById("op_entrada");
        //let ingreso=tipo_ingreso.options[tipo_ingreso.selectedIndex].value;
    
        let num_salida =document.getElementById("salida");
        let tipo_salida =document.getElementById("op_salida");
        //let salida=tipo_salida.options[tipo_salida.selectedIndex].value;

        var valorMonedaIngreso=Math.round( res.data.coins[tipo_ingreso.selectedIndex].price *100) /100;
        var valorMonedaSalida =Math.round( res.data.coins[tipo_salida.selectedIndex].price *100)  /100;
        num_salida.value= (valorMonedaIngreso*num_ingreso)/valorMonedaSalida;
       ;

    
}

