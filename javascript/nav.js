let menu = document.getElementById("nav-menu")
function openMenu(){
    if( menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}
let width = screen.width;
function closeMenu(){
    // console.log(width);
    if(width < 1024){
        menu.style.display = "none";
    }
}