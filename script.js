let leaves = 0;
let clickAmount = 0;

function clickGerald(){
  clickAmount++;
  document.getElementById("clicks").textContent = "You clicked " + clickAmount + "time(s)!"
}
  
function feedGerald(){
  leaves++;
  document.getElementById("message").textContent = "Gerald has eaten " + leaves + " leaves!"

}



function sadGerald(){
  document.getElementById("mood").textContent = "Gerald is sad";
  geraldImage.src = "https://thumbs.dreamstime.com/b/sad-giraffe-isolated-white-background-emotion-faces-color-sketch-funny-cartoon-emotions-110360579.jpg";
}

function happyGerald(){
  document.getElementById("mood").textContent = "Gerald is happy!"
  geraldImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJMyZDEl7HnYPKVfQtF6AboVDCcqInNHudB0yQh5DI0Q&s=10";
}
