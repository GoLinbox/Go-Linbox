var navLinks = document.getElementById("navLinks");
        function showMenu() {
            navLinks.style.right = "0";
        }
        function hideMenu() {
                navLinks.style.right = "100%";
}


var clickIndex = 1;
showDivs(clickIndex);

function currentDiv(n) {
  showDivs(clickIndex = n);
}

function plusDivs(n) {
  showDivs(clickIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("tempale");
  if (n > x.length) {clickIndex = 1}    
  if (n < 1) {clickIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[clickIndex-1].style.display = "block";  
  dots[clickIndex-1] += " w3-red";
}

