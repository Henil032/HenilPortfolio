// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


// =========================
// SIMPLE SCROLL ANIMATION
// =========================

const animatedElements = document.querySelectorAll(
    ".section-heading, .about-container, .skill-card, .project-card, .interest-card, .contact-container"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});