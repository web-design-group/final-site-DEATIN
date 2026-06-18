const loader = document.getElementById("loader");
if (loader) {
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 1500);
}

const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");
const menuClose = document.getElementById("menuClose");

function openMobileMenu() {
    mobileMenu.classList.add("open");
    menuOverlay.classList.add("open");
    document.body.classList.add("menu-open");
    burgerBtn.classList.add("active");
}

function closeMobileMenu() {
    mobileMenu.classList.remove("open");
    menuOverlay.classList.remove("open");
    document.body.classList.remove("menu-open");
    burgerBtn.classList.remove("active");
}

if (burgerBtn) burgerBtn.addEventListener("click", openMobileMenu);
if (menuClose) menuClose.addEventListener("click", closeMobileMenu);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMobileMenu(); });

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

const heroPreview = document.querySelector(".hero__app-preview");
const functionsSection = document.querySelector(".functions");
const imgBlured = document.querySelector(".functions__img--blured");
const imgFront = document.querySelector(".functions__img--front");
const isMobile = window.matchMedia("(max-width: 767px)").matches;
const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!isMobile && !noMotion) {
    window.addEventListener("scroll", () => {
        const sy = window.scrollY;

        if (heroPreview) {
            const heroEl = document.querySelector(".hero");
            if (heroEl) {
                const rect = heroEl.getBoundingClientRect();
                if (rect.bottom > 0 && rect.top < window.innerHeight) {
                    const progress = -rect.top / window.innerHeight;
                    heroPreview.style.transform = `translateY(${progress * 60}px)`;
                }
            }
        }

        if (functionsSection && (imgBlured || imgFront)) {
            const rect = functionsSection.getBoundingClientRect();
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
                const mid = rect.top + rect.height / 2 - window.innerHeight / 2;
                const factor = mid / window.innerHeight;
                if (imgBlured) imgBlured.style.transform = `translateY(${factor * 50}px)`;
                if (imgFront) imgFront.style.transform = `translateY(${factor * -40}px)`;
            }
        }
    }, { passive: true });
}

document.querySelectorAll(".our-app__img-wrap").forEach(el => el.classList.add("reveal"));
document.querySelectorAll(".review-card").forEach(el => el.classList.add("reveal"));
document.querySelectorAll(".step").forEach(el => el.classList.add("reveal"));
document.querySelectorAll(".cta__card").forEach(el => el.classList.add("reveal"));
document.querySelectorAll(".section-title").forEach(el => el.classList.add("reveal"));

const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObs.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(el => revealObs.observe(el));