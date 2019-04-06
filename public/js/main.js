var i = 0; 
var txt = 'Computer Science Student | The Ohio State University'; /* The text */
var speed = 42; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("description").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


window.onload = function(){
    typeWriter(); 
}; 