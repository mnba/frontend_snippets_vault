// Created by Taste, Russ
// Originated from: https://www.sololearn.com/Discuss/2377723/
// Russ: provided code for iOS-JS
// Taste for Android
// me: added Y
let swipedownX, swipeupX, swipedownY, swipeupY;
window.onload = () => {
 window.addEventListener("touchstart", touch);
 window.addEventListener("touchend", touchoff);
 window.addEventListener("touchmove", touchupdate);
}

function touch(e) {
  swipedownX = e.touches[0].pageX;
  swipedownY = e.touches[0].pageY;
}

function touchupdate(e){
  swipeupX = e.touches[0].pageX;
  swipeupY = e.touches[0].pageY;
}

const dN= 30; //50;

function touchoff(e) {
  if (swipeupX - swipedownX > dN) {
    console.log("Swiped right!")
  } else if (swipedownX - swipeupX > dN) {
    console.log("Swiped left!")
  }
  if (swipeupY - swipedownY > dN) {
    console.log("Swiped down!")
  } else if (swipedownY - swipeupY > dN) {
    console.log("Swiped up!")
  }
}

