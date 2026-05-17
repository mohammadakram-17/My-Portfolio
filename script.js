const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

const hiddenElements = document.querySelectorAll('.animate');
hiddenElements.forEach((el) => observer.observe(el));

const texts = [
  "Building modern web experiences",
  "Frontend Developer",
  "React & JavaScript Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = texts[textIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  document.getElementById('typing-text').textContent = current.substring(0, charIndex);

  if (!isDeleting && charIndex === current.length) {
    setTimeout(() => { isDeleting = true; }, 1500);
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav.navbar');
  
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(15, 15, 26, 1)';
    navbar.style.boxShadow = '0 2px 20px rgba(83, 74, 183, 0.2)';
  } else {
    navbar.style.backgroundColor = 'rgba(15, 15, 26, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});