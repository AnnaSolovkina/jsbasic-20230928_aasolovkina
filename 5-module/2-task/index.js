function toggleText() {
  // ваш код...

  let button = document.querySelector('.toggle-text-button');
  
  button.addEventListener('click', function(event) {
    let textElement = document.getElementById('text');

    if (textElement) {
      if (textElement.hasAttribute('hidden')) {
        textElement.removeAttribute('hidden');
      } else {
        textElement.setAttribute('hidden', '')
      }
    }
  });
}