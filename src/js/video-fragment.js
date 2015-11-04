/*
 * Allow video to be inserted in fragment loop
*/

export default function loadVideoFragment() {

  function playCurrentFragment() {
    [].slice.call( document.querySelectorAll('.fragment') ).forEach(function(fragment) {

      if(fragment.tagName == "VIDEO"){
        var video = fragment;
        if(video.classList.contains('current-fragment')) {
          video.play();
        }
        else {
          //video.pause();
        }
      }

    });
  }

  Reveal.addEventListener( 'fragmentshown', playCurrentFragment );
  //Reveal.addEventListener( 'fragmenthidden', playCurrentFragment );
}
