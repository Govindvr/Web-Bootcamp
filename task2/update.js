var btn = document.getElementById("button");
var form = document.getElementById("select_colour");
btn.addEventListener("click",run);

function run() {
    
    var colour = form.options[form.selectedIndex].value;
    document.body.style.background = colour
  
}