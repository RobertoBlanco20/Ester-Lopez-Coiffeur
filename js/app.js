        // Evitar que los contenidos se solapen cuando la barra de navegación se encuentra fija.
        var shiftWindow = function() { scrollBy(0, -135) };
        window.addEventListener("hashchange", shiftWindow);
        function load() { if (window.location.hash) shiftWindow(); }
    
    
        // Menu Responsive
    addEventListener("DOMContentLoaded", () =>{

    const btn_menu = document.querySelector('.btn_menu');

    if(btn_menu){
        btn_menu.addEventListener('click', () =>{
        const menu_items = document.querySelector('.menu_items');
        menu_items.classList.toggle('show');
    });
}
});