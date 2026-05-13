function welcome(){
  alert("Test Alert");
}

window.addEventListener("scroll", ()=>{

  const nav = document.querySelector("nav");

  if(window.scrollY > 50){
    nav.style.background = "rgba(15,23,42,0.8)";
  }else{
    nav.style.background = "rgba(0,0,0,0.2)";
  }

});

/* TYPING EFFECT */

const text = [
  "Love",
  "Fun",
  "Smart",
];

let speed = 100;

let textIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type(){

  if(charIndex < text[textIndex].length){

    typing.textContent += text[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(type, speed);

  }else{

    setTimeout(erase, 1500);
  }

}

function erase(){

  if(charIndex > 0){

    typing.textContent = text[textIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(erase, speed / 2);

  }else{

    textIndex++;

    if(textIndex >= text.length){
      textIndex = 0;
    }

    setTimeout(type, 500);
  }

}

document.addEventListener("DOMContentLoaded", ()=>{

  if(text.length){
    setTimeout(type, 500);
  }

});
