let links = document.getElementsByClassName("nav-links")[0];
let nav = document.getElementsByTagName("nav")[0];
function showNav(){
    if(links.style.display=="none") {
        links.style.display = "flex"
        links.style.opacity = "0";
        opacity = setInterval(decreaseOpacity, 30);
        
    }
    else {
        links.style.display = "none"
    }

}
function decreaseOpacity(){
    links.style.opacity= String(Number(links.style.opacity)+0.05);
    if(links.style.opacity == "1"){
        clearInterval(opacity);
    }
}

