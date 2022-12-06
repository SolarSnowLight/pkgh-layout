$(document).ready(function () {
    $('.heade-info-box-compact__hamburger').on('click', function() {
        let menu =  $('.header-menu'); 
        menu.toggle();
        if (menu.attr('style') === 'display: block;') {
            menu.attr('style', 'display: flex;');
        }
    });
});