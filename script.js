document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute("href"));
if (target) {
target.scrollIntoView({
behavior: "smooth"
});
}
});
});

window.addEventListener("scroll", function () {
const header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 50);
});

  const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mobile-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

document.addEventListener('click', function(event) {
  const isClickInsideMenu = document.getElementById('mobile-menu').contains(event.target);
  const isClickOnToggle = document.getElementById('menu-toggle').contains(event.target);
  
  if (!isClickInsideMenu && !isClickOnToggle) {
    document.getElementById('mobile-menu').classList.remove('show');
  }
});

// Ferme le menu mobile quand on clique sur un lien
document.querySelectorAll('#mobile-menu a').forEach(a => {
  a.addEventListener('click', () => menu.classList.remove('show'));
});

// (optionnel) surligner la page courante dans la nav
(function () {
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('nav a, #mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    const target = href === '/' ? 'index.html' : href.replace(/^\//,'').toLowerCase();
    if (target === current) a.classList.add('active');
  });
})();
