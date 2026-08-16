document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  const footerText = document.querySelector('.footer__content span');

  if (footerText) {
    footerText.textContent = `© ${year} Praxitos`;
  }

  // Discord copy to clipboard
  const discordBtn = document.getElementById('discord-copy');
  if (discordBtn) {
    discordBtn.addEventListener('click', () => {
      const username = '@praxitos';
      navigator.clipboard.writeText(username).then(() => {
        showNotification('Copied Discord Username');
      }).catch(err => {
        console.error('Failed to copy:', err);
      });
    });
  }
});

function showNotification(message) {
  const notification = document.getElementById('notification');
  if (notification) {
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
    }, 2500);
  }
}
