function contadorA(cadena,letras)
{
	for (var i = 0,contA=0; i <cadena.length; i++) 
	{
		if (cadena[i]===letras)
		 {
		 	contA++;
		 };
	}
	return contA;
}
var cad="Romeroeee";
var letras="e";
console.log("la cantidad de letras "+letras+ "    ES:"+contadorA(cad,letras));