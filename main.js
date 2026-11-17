
// ==============================
// 1. SMOOTH NAVIGATION
// ==============================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            history.replaceState(null, "", targetId);
        }
    });
});


// ==============================
// 2. ACTIVE NAVIGATION LINK
// ==============================

const sections = document.querySelectorAll("main section");

function updateActiveLink() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);

updateActiveLink();


// ==============================
// 3. FOOTER YEAR
// ==============================

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.textContent =
        `© ${new Date().getFullYear()} Daniel Samuel. All rights reserved.`;
}
