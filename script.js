let leaves = 0;
let clickAmount = 0;

const message = document.getElementById("message");
const clicks = document.getElementById("clicks");
const mood = document.getElementById("mood");
const geraldImage = document.getElementById("geraldImage");

function feedGerald() {
  leaves++;
  message.textContent = "Gerald has eaten " + leaves + " leaf(s)!";
}

function clickGerald() {
  clickAmount++;
  clicks.textContent = "You clicked " + clickAmount + " time(s)!";
}

function sadGerald() {
  mood.textContent = "Gerald is sad.";

  geraldImage.src =
    "https://thumbs.dreamstime.com/b/sad-giraffe-isolated-white-background-emotion-faces-color-sketch-funny-cartoon-emotions-110360579.jpg";
}

function happyGerald() {
  mood.textContent = "Gerald is happy!";

  geraldImage.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJMyZDEl7HnYPKVfQtF6AboVDCcqInNHudB0yQh5DI0Q&s=10";
}