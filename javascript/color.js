const colors = ["red","yellow","blue","orange","purple","green","pink","white","black","brown","gray"];
const couleurs = ["rouge","jaune","bleu","orange","violet","vert","rose","blanc","noir","marron","gris"];
const inputBox = document.querySelector("input");
var counter = document.querySelector(".counter");

var numberColors = 11;
var numberCorrect = 0;
var random = Math.floor(Math.random()*11);
document.body.style.backgroundColor = colors[random];
// inputBox.style.backgroundColor = colors[random];

function newColor(){
  console.log(colors);
  console.log(couleurs);

  if(numberColors>0){
    random = Math.floor(Math.random()*numberColors);
    document.body.style.backgroundColor = colors[random];
    // inputBox.style.backgroundColor = colors[random];
  }
  else{
    counter.textContent = "Toutes les couleurs ont été trouvées";
  }
}

function remove(array, element) {
  console.log(element);
  const index = array.indexOf(element);
  console.log(index);
  array.splice(index, 1);
}

function check(value){
  console.log("random: "+random);
  console.log(value);
  console.log(couleurs[random]);
  if(value===couleurs[random]){
    remove(colors,colors[random]);
    remove(couleurs,value);
    inputBox.value = "";
    numberColors = numberColors - 1;
    numberCorrect = numberCorrect + 1;
    counter.textContent = numberCorrect + " / " + numberColors;
    newColor();
  }
  else{
    inputBox.value = couleurs[random];
    setTimeout(function(){ newColor(); }, 2000);

  }

}
