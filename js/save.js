if(SCROLLED > 0 )
{

menu_bottom.style.position = 'fixed';
menu_bottom.style.bottom = 0;

c9.style.marginLeft = `${c9.offsetLeft += SCROLLED / window.innerHeight}px`;
console.log(`${c9.offsetLeft += SCROLLED / window.innerHeight}`);

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