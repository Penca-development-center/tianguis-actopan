/*Variables*/

/* Elementnos de la página */ 
var menu_fix = document.getElementById('t-menu');
var icono_aparece = document.getElementById('icono-aparece');
var menu_disp = document.getElementById('menu-trigger');
var full_menu = document.getElementById('full-menu');
var menu_bajo = document.getElementById('icon-bottom');
var menu_close = document.getElementById('menu-close');

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
	if(ANCHO_ICONO >= scrollPosition){
		console.log(`Aqui tiene que deseaparecer.`);
		icono_aparece.style.animation = 'desaparece .6s ease 1s forwards';
	} else if (ANCHO_ICONO <= scrollPosition) {
		console.log(`Aqui tiene que aparecer.`);
		icono_aparece.style.animation = 'aparece .6s ease 1s forwards';
	}

	if(ANCHO_MENU <= scrollPosition){

		menu_fix.style.position = 'fixed';
		menu_fix.style.zIndex = 60;
		menu_disp.addEventListener('click', ev => {
			full_menu.style.opacity = 1;
			full_menu.style.zIndex = 70;
		});
		menu_bajo.style.position = 'fixed';
		
	}
	
	
});

/* Agregando el menu de patntalla completa */

/* Boton que muestra el menú */ 
menu_disp.addEventListener('click', ev => {
	full_menu.style.opacity = 1;
	full_menu.style.zIndex = 70;
});

/* Boton que oculta el menú */ 
menu_close.addEventListener('click', ev => {
	full_menu.style.opacity = 0;
	full_menu.style.zIndex = 50;
});
//Agregando la funcion de boton slider
menu_bajo.addEventListener('click', ev => {
	// Manera de desplazar las pagunas
});
// Aqui va lo de three js.

// Acomodar todo con webpack