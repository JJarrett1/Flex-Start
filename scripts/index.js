let links = document.getElementsByClassName("nav-links")[0];
let nav = document.getElementsByTagName("nav")[0];

let checkbox = document.getElementById("check");
let acc = document.getElementsByClassName("accordion");
function showNav() {
  if (checkbox.checked == true) {
    links.style.display = "flex";
    links.style.opacity = "0";
    opacity = setInterval(decreaseOpacity, 30);
  } else {
    links.style.display = "none";
  }

  console.log(links.style.display);
}
function hideNav() {
  checkbox.checked = false;
  showNav();
}
function decreaseOpacity() {
  links.style.opacity = String(Number(links.style.opacity) + 0.05);
  if (links.style.opacity == "1") {
    clearInterval(opacity);
  }
}

var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
