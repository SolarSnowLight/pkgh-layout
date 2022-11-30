function myFunctionMain() {
  document.getElementById("myDropdownMain").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.header-main-link')) {
  let dropdowns = document.getElementsByClassName("dropdown-content-main");
  let j;
  for (j = 0; j < dropdowns.length; j++) {
    let openDropdown = dropdowns[j];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myFunctionSpec() {
    document.getElementById("myDropdownSpec").classList.toggle("show-spec");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.link_spec')) {
    let dropdownsSpec = document.getElementsByClassName("dropdown-content-spec");
    let i;
    for (i = 0; i < dropdownsSpec.length; i++) {
      let openDropdownSpec = dropdownsSpec[i];
      if (openDropdownSpec.classList.contains('show-spec')) {
        openDropdownSpec.classList.remove('show-spec');
      }
    }
  }
}


