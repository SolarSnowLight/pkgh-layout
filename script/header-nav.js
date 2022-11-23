/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myFunctionSpec() {
    document.getElementById("myDropdownSpec").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.link_spec')) {

    var dropdowns = document.getElementsByClassName("dropdown-content-spec");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function myFunctionMain() {
    document.getElementById("myDropdownMain").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.header-main-link')) {

    var dropdowns = document.getElementsByClassName("dropdown-content-main");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}