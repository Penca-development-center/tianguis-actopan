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
var camera, scene; // Esto es para la libreria three.ja
var scrollPosition; // Para obtener la posicion del scroll en el eje y.

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

/* Obteneindo posciones de las nubes */
var nubes = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12];
var nubesPoscionActualX = [ ];
var nubesPoscionActualY = [ ];

for(let i = 0; i < nubes.length; i++){
	var nube = nubes[i];
	var nubeX = nubes[i].offsetLeft;
	var nubeY = nubes[i].offsetTop;
	var topeNubeP = ANCHO_VENTANA - nubeX;
	var topeNubeN = 0 - nubeX;
	nubesPoscionActualX.push(nubeX);
	nubesPoscionActualY.push(nubeY);
	// console.log(`nube: ${i+1}. 
	// posicion en X: ${nubeX}, poscicion en Y: ${nubeY}.
	// tope: ${topeNubeP}, tope 2: ${topeNubeN}.`);
}

// console.log(`Posiciones en X: ${nubesPoscionActualX}.
// Posiciones en Y: ${nubesPoscionActualY}`);

/* Evento scroll, que permitira la navegacion en pantalla del algunos elementos de la página */
window.addEventListener( 'scroll', ev => {

	var scrollPosition = window.scrollY;
	  console.log(`${scrollPosition}`);
	/* Mostrando el icono*/ 
	  if(ANCHO_ICONO >= scrollPosition){
		  icono_aparece.style.opacity= 0;
	  } else if (ANCHO_ICONO <= scrollPosition) {
		  icono_aparece.style.opacity = 1;
	  }
  
	  if(ANCHO_MENU <= scrollPosition){
  
		  menu_fix.style.position = 'fixed';
		  menu_fix.style.zIndex = 60;
		  menu_disp.addEventListener('click', ev => {
			  full_menu.style.opacity = 1;
			  full_menu.style.zIndex = 70;
		  });
  
	  menu_bottom.style.position = 'fixed';
	  menu_bottom.style.bottom = 0;
	  }
	  
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