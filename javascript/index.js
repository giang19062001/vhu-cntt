

let mybutton = document.getElementById("btnUp");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 6000 || document.documentElement.scrollTop > 6000) {
    mybutton.style.opacity = 1;

  } else {
    mybutton.style.opacity = 0;

  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('showed');
    }
    else{
      reveals[i].classList.remove('showed');
    }
  }
}