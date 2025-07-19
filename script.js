const card = document.getElementById('card');

card.addEventListener('click', () => {
  card.classList.add('fullscreen');

  setTimeout(() => {
    window.location.href = 'competences.html';
  }, 1500); // doit correspondre au temps des transitions CSS
});

//
// function showResult() {
//   document.getElementById("result").innerHTML =
//     'Non, je rigole la recherche marche pas <br><img src="https://img.icons8.com/?size=100&id=oysWHKH0Kly3&format=png&color=000000" alt="Troll Face" width="80">';
// }
//
// document.getElementById("searchInput").addEventListener("keydown", function(event) {
//   if (event.key === "Enter") {
//     showResult();
//   }
// });
//
// // Animation de transition
// window.addEventListener('DOMContentLoaded', () => {
//   document.body.classList.add('fade-in');
//   setTimeout(() => {
//     const transition = document.querySelector('.transition-screen');
//     if (transition) transition.remove();
//   }, 1000);
// });
const button = document.querySelector('.button-pub');
const imageUrl = 'https://i.pinimg.com/474x/9b/5c/79/9b5c790382c1cbd0e8cb8de1442d4bdf.jpg';

button.addEventListener('click', () => {
  for (let i = 0; i < 10; i++) {
    const popup = document.createElement('div');
    popup.classList.add('popup');

    // Position aléatoire
    popup.style.top = `${Math.random() * (window.innerHeight - 160)}px`;
    popup.style.left = `${Math.random() * (window.innerWidth - 210)}px`;

    // Bouton fermer
    const closeBtn = document.createElement('button');
    closeBtn.innerText = '✖';
    closeBtn.classList.add('close-btn');
    closeBtn.onclick = () => popup.remove();

    // Image
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = "pub";

    // Assembler
    popup.appendChild(closeBtn);
    popup.appendChild(img);
    document.body.appendChild(popup);
  }
});
