const fullscreenButton = document.getElementById('fullScreen');
const fullscreenContent = document.querySelector('.fullBody');

fullscreenButton.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    fullscreenContent.classList.add('fullscreen-active');
    if (fullscreenContent.requestFullscreen) {
      fullscreenContent.requestFullscreen();
    } else if (fullscreenContent.mozRequestFullScreen) {
      fullscreenContent.mozRequestFullScreen();
    } else if (fullscreenContent.webkitRequestFullscreen) {
      fullscreenContent.webkitRequestFullscreen();
    } else if (fullscreenContent.msRequestFullscreen) {
      fullscreenContent.msRequestFullscreen();
    }
  } else {
    document.exitFullscreen();
    fullscreenContent.classList.remove('fullscreen-active');
  }
});