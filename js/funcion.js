const input= document.querySelector(".input-texto");
const impresion=document.querySelector(".impresor");


function btnEncriptar(){
    const textoEncriptado= encriptar(input.value);
    impresion.value= textoEncriptado;
    impresion.style.backgroundImage="none";
    input.value="";
}


function btnDesencriptar(){
    const textoEncriptado= desencriptar(input.value);
    impresion.value= textoEncriptado;
    impresion.style.backgroundImage="none";
    input.value="";
}


function encriptar(stringEncriptada){
    var arreglo=[["e", "enter"], ["i", "imes"], ["a","ai"],["o","ober"],["u","ufat"]];

    stringEncriptada=stringEncriptada.toLowerCase();//para solo admitir minusculas

    for(var i=0; i < arreglo.length; i++){
        if(stringEncriptada.includes(arreglo[i][0])){
            stringEncriptada= stringEncriptada.replaceAll(arreglo[i][0], arreglo[i][1]);
        }
    }

    return stringEncriptada;

}

function desencriptar(stringDesencriptada){
    var arreglo=[["e", "enter"], ["i", "imes"], ["a","ai"],["o","ober"],["u","ufat"]];

    stringDesencriptada=stringDesencriptada.toLowerCase();//para solo admitir minusculas

    for(var i=0; i < arreglo.length; i++){
        if(stringDesencriptada.includes(arreglo[i][1])){
            stringDesencriptada= stringDesencriptada.replaceAll(arreglo[i][1], arreglo[i][0]);
        }
    }

    return stringDesencriptada;

}

function copiar(){
   impresion.select();
   navigator.clipboard.writeText(impresion.value);
   impresion.value = "";
   alert("Se copio con Exito");
}