var pageDedicace = document.querySelector('.pageDedicace');
var audioDedicace = document.querySelector('.audioContainer');

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
