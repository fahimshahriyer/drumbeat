"use strict";function removeTransition(e){"transform"===e.propertyName&&e.target.classList.remove("playing")}function playSound(e){var r=document.querySelector('audio[data-key="'+e.keyCode+'"]'),n=document.querySelector('div[data-key="'+e.keyCode+'"]');r&&(n.classList.add("playing"),r.currentTime=0,r.play())}var keys=Array.from(document.querySelectorAll(".key"));keys.forEach(function(e){return e.addEventListener("transitionend",removeTransition)}),window.addEventListener("keydown",playSound);
//# sourceMappingURL=main.js.map
