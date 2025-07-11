document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({ behavior: 'smooth' });
}
});
});

console.log("Bienvenue sur le site des Fermiers Bigourdans !");

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
}
});
}, {
threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
section.classList.add('hidden');
observer.observe(section);
});


const footer = document.querySelector("footer p");
if (footer) {
const year = new Date().getFullYear();
footer.innerHTML = `&copy; ${year} Les Fermiers Bigourdans – Tous droits réservés`;
}
