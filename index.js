function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}
function removeTransition(e) {
    if (e.propertyName !=="transform") return;
    this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend",removeTransition));
window.addEventListener("keydown",playSound);


// !Create a bar growing as you drag with mouse!
// let lastX;
// Tracks the last observed mouse X position
// let bar = document.querySelector("div");
// bar.addEventListener("mousedown", event => {
//   if (event.button == 0) {
//     lastX = event.clientX;
//     window.addEventListener("mousemove", moved);
//     event.preventDefault(); // Prevent selection
//   }
// });

// function moved(event) {
//   if (event.buttons == 0) {
//     window.removeEventListener("mousemove", moved);
//   } else {
//     let dist = event.clientX - lastX;
//     let newWidth = Math.max(10, bar.offsetWidth + dist);
//     bar.style.width = newWidth + "px";
//     lastX = event.clientX;
//   }
// }