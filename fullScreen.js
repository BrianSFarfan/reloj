const fullscreenButton = document.getElementById('fullScreen');
const fullscreenContent = document.querySelector('.fullBody');

fullscreenButton.addEventListener('click', () => {
  if (fullscreenContent.requestFullscreen) {
    fullscreenContent.requestFullscreen();
  } else if (fullscreenContent.mozRequestFullScreen) { // Para navegadores Firefox
    fullscreenContent.mozRequestFullScreen();
  } else if (fullscreenContent.webkitRequestFullscreen) { // Para navegadores WebKit (Chrome, Safari)
    fullscreenContent.webkitRequestFullscreen();
  } else if (fullscreenContent.msRequestFullscreen) { // Para Internet Explorer / Edge
    fullscreenContent.msRequestFullscreen();
  }
});