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
