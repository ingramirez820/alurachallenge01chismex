/**Función Encriptar con validación */
function encriptar (){
  let textoacifrar = document.getElementById("input-texto").value;
  let textoCifrado = textoacifrar.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
  document.getElementById("msg").value = textoCifrado;
  if(textoacifrar==""){
    alert("Ingrese el texto a cifrar");
  }
  }


/**Función Desencriptar con validación */
function desencriptar (){ 
  let textoadescifrar = document.getElementById("input-texto").value; 
  let textoCifrado = textoadescifrar.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
  document.getElementById("msg").value = textoCifrado; 
  if(textoadescifrar==""){
    alert("Copie o Ingrese el texto a descifrar");
  }
}
/** Función copia con validación */
function cpy(){
  let copiarTexto=document.getElementById("msg").value;
  if(copiarTexto.length==0){
    alert("Ingrese el texto a descifrar");
  }else{
    copiarTexto.select();
    document.execCommand('copy');
  }
  
}
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/