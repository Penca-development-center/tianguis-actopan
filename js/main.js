
/*Variables*/
var menu_fix = document.getElementById('t-menu');
var icono_aparece = document.getElementById('icono-aparece');
var menu_disp = document.getElementById('menu-trigger');
var full_menu = document.getElementById('full-menu');
var menu_bajo = document.getElementById('icon-bottom');

//Constantes
const ANCHO_VENTANA = window.innerHeight;
const LARGO_VENTANA = window.innerWidth;
const ANCHO_MENU = menu_fix.clientHeight;
const ANCHO_ICONO = icono_aparece.clientHeight;

// Evento scroll, que permitira la navegacion en pantalla del algunos elementos de la página
window.addEventListener( 'scroll', ev => 
{

  var scrollPosition = window.scrollY;
   
	if(scrollPosition > ANCHO_ICONO)
	{
		console.log( "Aqui tiene que aparecer: " + icono_aparece.clientHeight );
		icono_aparece.style.animation = 'aparece .1s ease lineal';
	} 
	else 
	{
    console.log( 'aqui ya no' );
	}
	
});

//Agregando el menu de patntalla completa

//Agregando la funcion de boton slider

// Aqui va lo de three js.

// Acomodar todo con webpack