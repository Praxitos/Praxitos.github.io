document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footerText = document.querySelector('.footer__content span');

  if (footerText) {
    footerText.textContent = `© ${year} Praxitos`;
  }
});
