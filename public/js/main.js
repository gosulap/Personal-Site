
function typeWriter() {
  var p = document.getElementById('description');
  var n = 0;
  if(screen.width < 1000) {
    var str = 'CSE | The Ohio State University';
  }
  else{
    var str = 'Computer Science | The Ohio State University';
  }
  var typeTimer = setInterval(function() {
    n = n + 1;
    p.innerHTML = "$ " + str.slice(0, n);
    if (n === str.length) {
      clearInterval(typeTimer);
      p.innerHTML = "$ " + str;
      n = 0;
      setInterval(function() {
  
        if (n === 0) {
          p.innerHTML = "$ " + str + "|"
          n = 1;
        } else {
          p.innerHTML = "$ " + str
          n = 0;
        };
      }, 500);
    };
  }, 60)
}


window.onload = function(){
    typeWriter(); 
}; 