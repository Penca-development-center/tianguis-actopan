/*Variables*/

/* Elementnos de la página */ 
var menu_fix = document.getElementById('t-menu');
var icono_aparece = document.getElementById('icono-aparece');
var menu_disp = document.getElementById('menu-trigger');
var full_menu = document.getElementById('full-menu');
var menu_bajo = document.getElementById('icon-bottom');
var menu_close = document.getElementById('menu-close');
var menu_bottom = document.getElementById('menu-bottom');

// Nubes
let c_1 = document.getElementById('c1');
let c_2 = document.getElementById('c2');
let c_3 = document.getElementById('c3');
let c_4 = document.getElementById('c4');
let c_5 = document.getElementById('c5');
let c_6 = document.getElementById('c6');
let c_7 = document.getElementById('c7');
let c_8 = document.getElementById('c8');
let c_9 = document.getElementById('c9');
let c_10 = document.getElementById('c10');


/* Iniicialización de las variables */
var camera, scene; // Esto es para la libreria three.ja
var scrollPosition; // Para obtener la posicion del scroll en el eje y.

/* Constantes */
const ANCHO_VENTANA = window.innerHeight;
const LARGO_VENTANA = window.innerWidth;
const ANCHO_MENU = menu_fix.clientHeight;
const ANCHO_ICONO = icono_aparece.clientHeight;
const POSICION_ICONO = icono_aparece.clientTop; // Esto nos servira ára despues, bueno eso espero

/* Evento scroll, que permitira la navegacion en pantalla del algunos elementos de la página */
window.addEventListener( 'scroll', ev => {

	var scrollPosition = window.scrollY;

  /* Haciendo estatico los iconos */
  
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
// Aqui va lo de three js.

// Acomodar todo con webpack