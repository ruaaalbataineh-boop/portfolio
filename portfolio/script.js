
// =========================
// MOBILE NAVIGATION
// =========================

const nav = document.querySelector("nav");
const navList = document.querySelector("nav ul");

// Create mobile menu button
const menuButton = document.createElement("button");

menuButton.classList.add("menu-button");
menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';

menuButton.setAttribute("aria-label", "Open navigation menu");

nav.appendChild(menuButton);


// Toggle mobile menu
menuButton.addEventListener("click", () => {

    navList.classList.toggle("show-menu");

    const isOpen = navList.classList.contains("show-menu");

    menuButton.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});


// Close menu when clicking a link
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navList.classList.remove("show-menu");

        menuButton.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


// =========================
// ACTIVE NAVIGATION LINK
// =========================

const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".section-title, .about-container, .skill-card, .project-card, .certificate-card, .contact-container"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// =========================
// HERO IMAGE ANIMATION
// =========================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    heroImage.addEventListener("mouseenter", () => {

        heroImage.style.transform = "scale(1.04)";

    });


    heroImage.addEventListener("mouseleave", () => {

        heroImage.style.transform = "scale(1)";

    });

}


// =========================
// CURRENT YEAR
// =========================

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Ruaa Al-Bataineh. All rights reserved.`;

}


// =========================
// DOWNLOAD CV
// =========================

const cvButton = document.querySelector(
    '.btn-outline'
);

if (cvButton) {

    cvButton.addEventListener("click", (event) => {

        const cvLink = cvButton.getAttribute("href");

        // Prevent "#" from jumping to the top
        if (cvLink === "#") {

            event.preventDefault();

            alert("CV will be available soon.");

        }

    });

}


// =========================
// CONSOLE MESSAGE
// =========================

console.log(
    "Welcome to Ruaa Al-Bataineh's Portfolio 👋"
);

