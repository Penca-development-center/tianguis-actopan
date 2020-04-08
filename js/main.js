/*Variables*/

/* Elementnos de la página */ 
var menu_fix = document.getElementById('t-menu');
var icono_aparece = document.getElementById('icono-aparece');
var menu_disp = document.getElementById('menu-trigger');
var full_menu = document.getElementById('full-menu');
var menu_bajo = document.getElementById('icon-bottom');
var menu_close = document.getElementById('menu-close');
var menu_bottom = document.getElementById('menu-bottom');
let lastScroll = 0;

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
let slide2 = document.getElementById('slide2');

/* Obteneindo posciones de las nubes */
var nubes = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12];

/* Evento scroll, que permitira la navegacion en pantalla del algunos elementos de la página */
window.addEventListener( 'scroll', () => 
{

  const SCROLLED = window.scrollY;
  let opacityActual = 1;
  let efecto = document.getElementById('slide0');
  // Scales de las nubes
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


	if(SCROLLED > 0 )
	{

    /*  Boton del menu */
	  menu_bottom.style.position = 'fixed';
    menu_bottom.style.bottom = 0;

    /* Menu que se encuanta al pie de pagina */
    menu_bottom.style.opacity=1;
		menu_fix.style.position = 'fixed';
		menu_fix.style.zIndex = 60;
    menu_fix.style.opacity=1;
    
    /* Nubes */

    efecto.style.transform = `scale(${scaleNormal += (SCROLLED / (5000 - window.innerHeight) * 10 )})`;

	  c1.style.transform = `scale(${nube1ScaleActual += (SCROLLED / (5000 - window.innerHeight) * 10 )}) translate(${(SCROLLED / (5000 - window.innerHeight) * 10 )  }px)`;
    c1.style.opacity = opacityActual -= (SCROLLED / (5000 - window.innerHeight) *7.5 ); 
    
    c2.style.transform = `scale(${nube2ScaleActual += (SCROLLED / (5000 - window.innerHeight) * 10 )})`;
    c2.style.opacity = opacityActual -= SCROLLED / (5000 - window.innerHeight); 

	  c3.style.transform = `scale(${nube3ScaleActual += (SCROLLED / (5000 - window.innerHeight) * 10 )})`;
    c3.style.opacity = opacityActual -=  SCROLLED / (5000 - window.innerHeight);

    c4.style.transform = `scale(${nube4ScaleActual += (SCROLLED / (5000 - window.innerHeight) * 10 )})`;
    c4.style.opacity = opacityActual -= SCROLLED / (5000 - window.innerHeight); 

    c5.style.transform = `scale(${nube5ScaleActual += (SCROLLED / (5000 - window.innerHeight) * 10 )})`;
    c5.style.opacity = opacityActual -= SCROLLED / (5000 - window.innerHeight); 
    
    c6.style.transform = `scale(${nube6ScaleActual += (SCROLLED / (5000 - window.innerHeight) * 10 )})`;
    c6.style.opacity = opacityActual -= SCROLLED / (5000 - window.innerHeight); 


	  c7.style.transform = `scale(${nube7ScaleActual += (SCROLLED / (5000 - window.innerHeight) * 10 )}) translate(${(SCROLLED / (5000 - window.innerHeight) * 10 )  }px)`;
    c7.style.opacity = opacityActual -= (SCROLLED / (5000 - window.innerHeight) *7.5 ); 
    
    c8.style.transform = `scale(${nube8ScaleActual += (SCROLLED / (5000 - window.innerHeight) * 10 )})`;
    c8.style.opacity = opacityActual -= SCROLLED / (5000 - window.innerHeight); 

	  c9.style.transform = `scale(${nube9ScaleActual += (SCROLLED / (5000 - window.innerHeight) * 10 )})`;
    c9.style.opacity = opacityActual -=  SCROLLED / (5000 - window.innerHeight);

    c10.style.transform = `scale(${nube10ScaleActual += (SCROLLED / (5000 - window.innerHeight) * 10 )})`;
    c10.style.opacity = opacityActual -= SCROLLED / (5000 - window.innerHeight); 

    c11.style.transform = `scale(${nube11ScaleActual += (SCROLLED / (5000 - window.innerHeight) * 10 )})`;
    c11.style.opacity = opacityActual -= SCROLLED / (5000 - window.innerHeight); 
    
    c12.style.transform = `scale(${nube12ScaleActual += (SCROLLED / (5000 - window.innerHeight) * 10 )})`;
    c12.style.opacity = opacityActual -= SCROLLED / (5000 - window.innerHeight); 

    

	  if(ANCHO_MENU >= SCROLLED)
	  {
	    menu_fix.style.position = 'fixed';
			menu_fix.style.zIndex = 60;

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