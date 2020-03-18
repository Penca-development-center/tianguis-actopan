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
const POSICION_ICONO = icono_aparece.clientTop; // Esto nos servira ára despues, bueno eso espero

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

// Slides o secciones
let slide0 = document.querySelector('#slide0');
let slide1 = document.querySelector('#slide1');
let slide2 = document.querySelector('#slide2');
let slide3 = document.querySelector('#slide3');
let slide4 = document.querySelector('#slide4');
let slide5 = document.querySelector('#slide5');
let slide6 = document.querySelector('#slide6');
let slide7 = document.querySelector('#slide7');
let slide8 = document.querySelector('#slide8');
let slide9 = document.querySelector('#slide9');
let slide10 = document.querySelector('#slide10');
let slide11 = document.querySelector('#slide11');
let slide12 = document.querySelector('#slide12');

var icono_actopan = document.getElementById('icono-actopan');
/* Obteneindo posciones de las nubes */
var nubes = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12];
var nubesPoscionActualX = [231,1268,116,1340,139,-14,1311,303,202,879,1311,1383];
var nubesPoscionActualY = [69,80,125,107,188,133,260,656,764,710,332,800];
var puntomedioX = 706;
var puntomedioY = 360;

window.addEventListener('load', e => {
	for(let i = 0; i < nubes.length; i++){
		let nube = nubes[i];
		nube.style.transform = 'scale(3)';
		var nubeX = nubes[i].offsetLeft;
		var nubeY = nubes[i].offsetTop;
		var topeNubeP = ANCHO_VENTANA - nubeX;
		var topeNubeN = 0 - nubeX;
		// nube.style.marginLeft = `${puntomedioX}px`;
		// nube.style.marginTop = `${puntomedioY}px`;
		// nube.style.transform = 'scale(1.1)';
		nube.classList.remove(`c${i+1}`);
		nube.classList.remove(`c${i+1}h`);
		nube.classList.add('cloud_center');
		// nubeTamano.push(nube.offsetWidth);
	
		// console.log(`nube: ${i+1}. 
		// posicion en X: ${nubeX}, poscicion en Y: ${nubeY}.
		// tope: ${topeNubeP}, tope 2: ${topeNubeN}.`);
	}
});



// console.log(`Posiciones en X: ${nubesPoscionActualX}.
// Posiciones en Y: ${nubesPoscionActualY}
// Tamaño: ${nubeTamano}`);

/* Evento scroll, que permitira la navegacion en pantalla del algunos elementos de la página */
window.addEventListener( 'scroll', () => {
	const SCROLLED = window.scrollY;
	const SCROLLEABLE = document.documentElement.scrollHeight - window.innerHeight;
	/* Mostrando el icono*/ 
	if(ANCHO_ICONO >= SCROLLED){
		icono_aparece.style.opacity= 0;
	} else if (ANCHO_ICONO <= SCROLLED) {
		icono_aparece.style.opacity = 1;
	}
	

	if(ANCHO_MENU >= SCROLLED){

		menu_fix.style.position = 'fixed';
		menu_fix.style.zIndex = 60;
		menu_disp.addEventListener('click', ev => {
		full_menu.style.opacity = 1;
		full_menu.style.zIndex = 70;
		});

	menu_bottom.style.position = 'fixed';
	menu_bottom.style.bottom = 0;
	}

	// Moviendo las nubes

	if (SCROLLED <= slide0.scrollHeight && SCROLLED > 150) {
		// Escalamiento individual de cada una de las nubes
		nubes[0].style.transform='scale(' + (SCROLLED/(1350 - slide0.scrollHeight)) + ')'; // 2
		nubes[0].style.marginTop = `calc(${SCROLLED / (950 - slide0.scrollHeight)}vh`; // 18vh - 100px
		nubes[0].style.marginLeft = `calc(${SCROLLED / (939.0713 - slide0.scrollHeight)}%)`; // 23% - 100px
		nubes[1].style.transform='scale(' + (SCROLLED/(1350 - slide0.scrollHeight)) + ')'; // 2
		nubes[2].style.transform='scale(' + (SCROLLED/(1080 - slide0.scrollHeight)) + ')'; // 5
		nubes[3].style.transform='scale(' + (SCROLLED/(1350 - slide0.scrollHeight)) + ')'; // 2
		nubes[4].style.transform='scale(' + (SCROLLED/(1350 - slide0.scrollHeight)) + ')'; // 2 
		nubes[5].style.transform='scale(' + (SCROLLED/(1200 - slide0.scrollHeight)) + ')'; // 3
		nubes[6].style.transform='scale(' + (SCROLLED/(1080 - slide0.scrollHeight)) + ')'; // 5
		nubes[7].style.transform='scale(' + (SCROLLED/(1200 - slide0.scrollHeight)) + ')'; // 3
		nubes[8].style.transform='scale(' + (SCROLLED/(1050 - slide0.scrollHeight)) + ')'; // 6
		nubes[9].style.transform='scale(' + (SCROLLED/(1125 - slide0.scrollHeight)) + ')'; // 4
		nubes[10].style.transform='scale(' + (SCROLLED/(1400 - slide0.scrollHeight)) + ')'; // 1.8
		nubes[11].style.transform='scale(' + (SCROLLED/(1400 - slide0.scrollHeight)) + ')'; // 1.8

		// Compatibilidad con otros navegadores
		nubes[0].style.webkitTransform='scale(' + (SCROLLED/(1350 - slide0.scrollHeight)) + ')'; // 2
		nubes[1].style.webkitTransform='scale(' + (SCROLLED/(1350 - slide0.scrollHeight)) + ')'; // 2
		nubes[2].style.webkitTransform='scale(' + (SCROLLED/(1080 - slide0.scrollHeight)) + ')'; // 5
		nubes[3].style.webkitTransform='scale(' + (SCROLLED/(1350 - slide0.scrollHeight)) + ')'; // 2
		nubes[4].style.webkitTransform='scale(' + (SCROLLED/(1350 - slide0.scrollHeight)) + ')'; // 2 
		nubes[5].style.webkitTransform='scale(' + (SCROLLED/(1200 - slide0.scrollHeight)) + ')'; // 3
		nubes[6].style.webkitTransform='scale(' + (SCROLLED/(1080 - slide0.scrollHeight)) + ')'; // 5
		nubes[7].style.webkitTransform='scale(' + (SCROLLED/(1200 - slide0.scrollHeight)) + ')'; // 3
		nubes[8].style.webkitTransform='scale(' + (SCROLLED/(1050 - slide0.scrollHeight)) + ')'; // 6
		nubes[9].style.webkitTransform='scale(' + (SCROLLED/(1125 - slide0.scrollHeight)) + ')'; // 4
		nubes[10].style.webkitTransform='scale(' + (SCROLLED/(1400 - slide0.scrollHeight)) + ')'; // 1.8
		nubes[11].style.webkitTransform='scale(' + (SCROLLED/(1400 - slide0.scrollHeight)) + ')'; // 1.8
	}
	console.log(`${SCROLLED} : ${slide0.scrollHeight}`);
});

/* Agregando el menu de patntalla completa */

/* Boton que muestra el menú */ 
menu_disp.addEventListener('click', ev => {
	full_menu.style.opacity = 1;
	full_menu.style.zIndex = 70;
	document.body.style.overflow = 'hidden';
});

/* Boton que oculta el menú */ 
menu_close.addEventListener('click', ev => {
	full_menu.style.opacity = 0;
	full_menu.style.zIndex = -1000;
	document.body.style.overflow = 'visible';
});
//Agregando la funcion de boton slider
menu_bajo.addEventListener('click', ev => {
	// Manera de desplazar las pagunas
});