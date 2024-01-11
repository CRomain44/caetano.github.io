/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll('.fade-in');

    const showElement = function (element) {
        element.classList.add('show');
    };
    

    const handleIntersection = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showElement(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll('.lead');

    const showElement = function (element) {
        element.classList.add('show');
    };
    

    const handleIntersection = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showElement(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll('.fade-in3');

    const showElement = function (element) {
        element.classList.add('show');
    };

    const handleIntersection = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showElement(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Options pour l'Intersection Observer
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Déclenche l'effet lorsque 50% de la section est hors de la vue
    };

    // Crée l'Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Si la section n'est plus visible, ajoute la classe 'hidden' au texte
            if (!entry.isIntersecting) {
                entry.target.classList.add('hidden');
            } else {
                // Si la section est à nouveau visible, retire la classe 'hidden'
                entry.target.classList.remove('hidden');
            }
        });
    }, options);

    // Sélectionne toutes les sections avec la classe 'fade-out'
    const sectionsToFade = document.querySelectorAll('.fade-in');

    // Démarre l'observation de chaque section
    sectionsToFade.forEach((section) => {
        observer.observe(section);
    });

    const sectionslead = document.querySelectorAll('.lead');

    // Démarre l'observation de chaque section
    sectionslead.forEach((section) => {
        observer.observe(section);
    });

    const sectionsToFade2 = document.querySelectorAll('.fade-in3');

    // Démarre l'observation de chaque section
    sectionsToFade2.forEach((section) => {
        observer.observe(section);
    });

});

//Fleche pour remonter
document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.getElementById("scroll-to-top");

    // Affiche ou masque la flèche en fonction du défilement
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    };

    // Ajoute un événement de clic pour remonter en haut de la page
    scrollToTopButton.addEventListener("click", function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});