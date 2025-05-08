const card = document.getElementById('card');

card.addEventListener('click', () => {
  card.classList.add('fullscreen');

  setTimeout(() => {
    window.location.href = 'competences.html';
  }, 1500); // doit correspondre au temps des transitions CSS
});
