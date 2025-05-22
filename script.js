function darkMode() {
    const body  = document.body;
    const img   = document.getElementById("palmTitle");
  
    body.className = "dark-mode";
    img.src = "assets/pinkpalmtitle.gif";
  }
  
  function lightMode() {
    const body  = document.body;
    const img   = document.getElementById("palmTitle");
  
    body.className = "light-mode";
    img.src = "assets/bluepalmtitle.gif";
  }
  