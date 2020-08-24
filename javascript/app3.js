var pageDedicace = document.querySelector('.pageDedicace');
var audioDedicace = document.querySelector('.audioContainer');
var audioChapitreOne = document.querySelector('.audioContainerOne');
var pageChapitreOne = document.querySelector('#chapitreOne');
var audioChapitreTwo = document.querySelector('.audioContainerTwo');
var pageChapitreTwo = document.querySelector('#chapitre2');
var words = document.querySelectorAll(".tooltips");

for (var i = 0; i < words.length; i++) {
  words[i].addEventListener("click", function(){
    console.log(this.firstChild.textContent);
  });
}
// $('span' ).tooltip({
// show: false,
// hide: false
// });

var tooltips = document.querySelectorAll('.tooltips span');
var tooltipsUp = document.querySelectorAll('.tooltipsUp em');

window.onmousemove = function (e) {
    var x = (e.clientX + 10) + 'px',
        y = (e.clientY + 20) + 'px',
        yp = (e.clientY - 40) + 'px';


    for (var i = 0; i < tooltips.length; i++) {
      tooltips[i].style.top = y;
      tooltips[i].style.left = x
    }

    for (var i = 0; i < tooltipsUp.length; i++) {
      tooltipsUp[i].style.top = yp;
      tooltipsUp[i].style.left = x;
    }

};



function elementInViewport(myElement) {

    var bounding = myElement.getBoundingClientRect();
    var myElementHeight = myElement.offsetHeight;
    var myElementWidth = myElement.offsetWidth;

    if (bounding.top >= -myElementHeight
        && bounding.left >= -myElementWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {

          return true;

    } else {
          return false;

    }
}

window.addEventListener('scroll', function (event) {
  if(elementInViewport(pageDedicace)){
    console.log('Element is in the viewport!');

    if(audioDedicace.classList.contains('hidden'))
    {
      audioDedicace.classList.remove('hidden');
    }
  }
  else{
    console.log('Element is NOT in the viewport!');

    if(!audioDedicace.classList.contains('hidden')){
        audioDedicace.classList.add('hidden');
        var audioStop = document.querySelector('.audioDedicace');
        audioStop.pause();
        audioStop.currentTime = 0;
    }
  }

}, false);


window.addEventListener('scroll', function (event) {

  if(elementInViewport(pageChapitreOne)){
    console.log('Element One is in the viewport!');

    if(audioChapitreOne.classList.contains('hidden'))
    {
      audioChapitreOne.classList.remove('hidden');
    }
  }
  else{
    console.log('Element One is NOT in the viewport!');

    if(!audioChapitreOne.classList.contains('hidden')){
        audioChapitreOne.classList.add('hidden');
        var audioStopOne = document.querySelector('.audioChapitre1');
        audioStopOne.pause();
        audioStopOne.currentTime = 0;
    }
  }


}, false);

window.addEventListener('scroll', function (event) {

  if(elementInViewport(pageChapitreTwo)){
    console.log('Element Two is in the viewport!');

    if(audioChapitreTwo.classList.contains('hidden'))
    {
      audioChapitreTwo.classList.remove('hidden');
    }
  }
  else{
    console.log('Element Two is NOT in the viewport!');

    if(!audioChapitreTwo.classList.contains('hidden')){
        audioChapitreTwo.classList.add('hidden');
        var audioStopTwo = document.querySelector('.audioChapitre2');
        audioStopTwo.pause();
        audioStopTwo.currentTime = 0;
    }
  }


}, false);
