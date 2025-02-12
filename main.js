function syncHeight() {
    let reference = document.querySelector(".element-1").offsetHeight;
    document.querySelector(".element-2").style.height = reference + "px";
  }
  
  // Beim Laden und beim Fenster-Resize ausführen
  window.onload = syncHeight;
  window.onresize = syncHeight;