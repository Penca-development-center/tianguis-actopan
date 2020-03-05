
/*Variables*/
var menu_fix = document.getElementById('t-menu');
var icono_aparece = document.getElementById('icono-aparece');
var menu_disp = document.getElementById('menu-trigger');
var full_menu = document.getElementById('full-menu');
var menu_bajo = document.getElementById('icon-bottom');
var menu_close = document.getElementById('menu-close');

//Constantes
const ANCHO_VENTANA = window.innerHeight;
const LARGO_VENTANA = window.innerWidth;
const ANCHO_MENU = menu_fix.clientHeight;
const ANCHO_ICONO = icono_aparece.clientHeight;

// Evento scroll, que permitira la navegacion en pantalla del algunos elementos de la página
window.addEventListener( 'scroll', () => 
{
	var scrollPosition = window.scrollY;
   
	if(scrollPosition > ANCHO_ICONO)
	{
		console.log( `Aqui tiene que aparecer: ${icono_aparece.clientHeight}` );
		console.log(`Posicion: ${scrollPosition}, Ancho del elemento: ${ANCHO_ICONO}`);
		scrollPosition === ANCHO_ICONO ? console.log("Aqui es igual") : console.log("...");
	} 
	else 
	{
    console.log( 'aqui ya no' );
	}
	
});

//Agregando el menu de patntalla completa
menu_disp.addEventListener('click', ev => {
	console.log(`abre`);
	full_menu.style.opacity = 1;
	full_menu.style.zIndex = 70;
	full_menu.style.animation='aparece .5s .1s ease linear';
});

menu_close.addEventListener('click', () => {
	console.log(`cierrra`);
	full_menu.style.opacity = 0;
	full_menu.style.zIndex = 50;
});
//Agregando la funcion de boton slider

// Aqui va lo de three js.

// Acomodar todo con webpack