function contadorA(cadena)
{
	var contA=0;//inicializacion
	var i=0;

	while (i<cadena.length)//permanencia
	{
		if (cadena[i].toUpperCase()==="A")//accion
		 {
		 	contA++;
		}
		i++;//incremento
	}
	return contA;
}
var cad="Anastaciaa";
//cad=cad.toUpperCase();
console.log("La cantidad de las letras a es:"+contadorA(cad));