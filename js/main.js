/*Variables*/

/* Elementnos de la página */
var menu_fix = document.getElementById('t-menu');
var icono_aparece = document.getElementById('icono-aparece');
var menu_disp = document.getElementById('menu-trigger');
var full_menu = document.getElementById('full-menu');
var menu_bajo = document.getElementById('icon-bottom');
var menu_close = document.getElementById('menu-close');
var menu_bottom = document.getElementById('menu-bottom');

/* Iniicialización de las variables */
var camera, scene; // Esto es para la libreria three.jacroll en el eje y.

/* Constantes */
const ANCHO_VENTANA = window.innerHeight;
const LARGO_VENTANA = window.innerWidth;
const ANCHO_MENU = menu_fix.clientHeight;
const ANCHO_ICONO = icono_aparece.clientHeight;


// Nubes
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');
let c5 = document.getElementById('c5');
let c6 = document.getElementById('c6');
let c7 = document.getElementById('c7');
let c8 = document.getElementById('c8');
let c9 = document.getElementById('c9');
let c10 = document.getElementById('c10');
let c11 = document.getElementById('c11');
let c12 = document.getElementById('c12');

/* Obteneindo posciones de las nubes */
var nubes = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12];
var orientaciones = ["si","sd","si","sd","si","si","sd","ii","ii","id","sd","id"];

  var scaleNormal = 1;
  var nube1ScaleActual = 2;
  var nube2ScaleActual = 2;
  var nube3ScaleActual = 5;
  var nube4ScaleActual = 2;
  var nube5ScaleActual = 2;
  var nube6ScaleActual = 3;
  var nube7ScaleActual = 5;
  var nube8ScaleActual = 3;
  var nube9ScaleActual = 8;
  var nube10ScaleActual = 4; 
  var nube11ScaleActual = 2;
  var nube12ScaleActual = 2;

function descomponerMatrizTransform(matriz){
	//funciona en matrices sin espacios tras la coma
	let paso1=matriz.split("(");
	let paso2=paso1[1].split(")");
	let paso3=paso2[0].split(",");
	return paso3;
}
function definirKeyframes(esquina, nube){
	const estilos=getComputedStyle(nube);
	const matrizNube=estilos.transform;
	let scaleX=descomponerMatrizTransform(matrizNube)[0];
	let keyframes;
	let translateX;
	let translateY;
	switch(esquina){
		case "sd":
			translateX=300;
			translateY=100;
			break;
		case "si":
			translateX=-300;
			translateY=100;
			break;
		case "ii":
			translateX=-300;
			translateY=100;
			break;
		case "id":
			translateX=300;
			translateY=100;
			break;
	}
	keyframes=[
		{
			transform: `matrix(${scaleX},0.00,0.00,${scaleX},0,0)`,
			opacity: '1'
		},
		{
			transform: `matrix(${(parseFloat(scaleX)+5)},0.00,0.00,${(parseFloat(scaleX)+5)},${translateX},${translateY})`,
			opacity: '0'
		}
	];
	return keyframes;
}
var arrayFrames = [];
for (let i = 0; i < nubes.length; i++) {
	const frames = definirKeyframes(orientaciones[i],nubes[i]);
	arrayFrames.push(frames);
}
function redondear(num, decimales = 2) {
    var signo = (num >= 0 ? 1 : -1);
    num = num * signo;
    if (decimales === 0) //con 0 decimales
        return signo * Math.round(num);
    // round(x * 10 ^ decimales)
	num = num.toString().split('e');
    num = Math.round(+(num[0] + 'e' + (num[1] ? (+num[1] + decimales) : decimales)));
	// x * 10 ^ (-decimales)
	num = num.toString().split('e');
    return signo * (num[0] + 'e' + (num[1] ? (+num[1] - decimales) : -decimales));
}
function ajustarValores(nube,frames,alturaActual,alturaMaxima){
	let propiedades=Object.keys(frames[0]);
	let valoresIniciales=Object.values(frames[0]);
	let valoresFinales=Object.values(frames[1]);
	let valorActual;
	let arrayValores=[];
	for (let j = 0; j < propiedades.length; j++) {
		if(propiedades[j]!=="transform"){
			/*No aplica para transform porque su estructura es mas compleja que solo un numero*/
			const diferencia=valoresFinales[j]-valoresIniciales[j];
			const division=alturaActual/alturaMaxima;
			valorActual=redondear(parseInt(valoresIniciales[j])+(division*diferencia));
		}
		else{
			let matrizInicial=descomponerMatrizTransform(valoresIniciales[j]);
			let matrizFinal=descomponerMatrizTransform(valoresFinales[j]);
			for (let z = 0; z < matrizInicial.length; z++) {
				const diferencia=matrizFinal[z]-matrizInicial[z];
				const division=alturaActual/alturaMaxima;
				const valAct=redondear(parseFloat(matrizInicial[z])+(division*diferencia));
				arrayValores.push(valAct);
			}
		}
		switch(propiedades[j]){
			case "opacity":
				nube.style.opacity = valorActual;
				break;
			case "transform":
				nube.style.transform=`matrix(${arrayValores[0]},${arrayValores[1]},${arrayValores[2]},${arrayValores[3]},${arrayValores[4]},${arrayValores[5]})`;
				break;
		}
	}
}
var alturaFinalNubes=1350;
/* Evento scroll, que permitira la navegacion en pantalla del algunos elementos de la página */
window.addEventListener( 'scroll', () =>
{
  const SCROLLED = window.scrollY;
  let maxDeg = 45;
	for (let i = 0; i < nubes.length; i++) {
		ajustarValores(nubes[i],arrayFrames[i],SCROLLED,alturaFinalNubes);
	}

	/* Mostrando el icono*/
	if(ANCHO_ICONO >= SCROLLED)
	{

		icono_aparece.style.opacity= 0;

	}

	else if (ANCHO_ICONO <= SCROLLED)
	{

		icono_aparece.style.opacity = 1;

	}


  if(SCROLLED > 0 )
	{
    menu_bottom.style.position = 'fixed';
	menu_bottom.style.bottom = 0;
	/**/
	menu_bottom.style.opacity=1;
	menu_fix.style.position = 'fixed';
	menu_fix.style.zIndex = 60;
	menu_fix.style.opacity=1;
    if(ANCHO_MENU >= SCROLLED)
    {
      menu_disp.addEventListener('click', () =>
      {

        full_menu.style.opacity = 1;
        full_menu.style.zIndex = 70;

      });

    }

  }
  

});

/* Agregando el menu de patntalla completa */

/* Boton que muestra el menú */
menu_disp.addEventListener('click', () =>
{

	full_menu.style.opacity = 1;
	full_menu.style.zIndex = 70;
	document.body.style.overflow = 'hidden';

});

/* Boton que oculta el menú */
menu_close.addEventListener('click', () =>
{

	full_menu.style.opacity = 0;
	full_menu.style.zIndex = -1000;
	document.body.style.overflow = 'visible';

});
//Agregando la funcion de boton slider
menu_bajo.addEventListener('click', () =>
{
	// Manera de desplazar las pagunas
});
