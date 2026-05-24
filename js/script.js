gsap.registerPlugin(ScrollTrigger);
/* =========================
   THEME TOGGLE
========================= */

const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

themeToggle.addEventListener("click", () => {

    const currentTheme = html.getAttribute("data-theme");

    if (currentTheme === "dark") {

        html.setAttribute("data-theme", "light");

        themeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;

    } else {

        html.setAttribute("data-theme", "dark");

        themeToggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }

});


/* =========================
   TYPING EFFECT
========================= */

const roles = [

    "HTML5 Creative Developer",
    "Creative Graphic Designer",
    "Rich Media Specialist",
    "DCO Specialist",
    "AdTech Expert"
];

const typingText = document.getElementById("typingText");

let roleIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {

    const fullText = roles[roleIndex];

    if (isDeleting) {

        currentText = fullText.substring(0, charIndex--);

    } else {

        currentText = fullText.substring(0, charIndex++);
    }

    typingText.textContent = currentText;

    let typingSpeed = isDeleting ? 45 : 90;

    if (!isDeleting && charIndex === fullText.length + 1) {

        isDeleting = true;
        typingSpeed = 1800;

    } else if (isDeleting && charIndex === -1) {

        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();


/* =========================
   GSAP ANIMATIONS
========================= */

gsap.from(".hero-subtitle", {

    y: 40,
    opacity: 0,
    duration: 1
});

gsap.from(".hero-title", {

    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2
});

gsap.from(".hero-role", {

    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.4
});

gsap.from(".hero-description", {

    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.6
});

gsap.from(".hero-buttons", {

    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.8
});

gsap.from(".social-icons", {

    y: 40,
    opacity: 0,
    duration: 1,
    delay: 1
});

gsap.from(".profile-card", {

    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    delay: 0.5
});


/* Floating Animation */

gsap.to(".floating-badge", {

    y: -15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    stagger: 0.2,
    ease: "power1.inOut"
});

/* =========================
   CAREER SUMMARY ANIMATION
========================= */

gsap.from(".section-subtitle", {

    scrollTrigger: {

        trigger: ".career-summary-section",
        start: "top 80%"
    },

    y: 40,
    opacity: 0,
    duration: 1
});


gsap.from(".section-title", {

    scrollTrigger: {

        trigger: ".career-summary-section",
        start: "top 80%"
    },

    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.2
});


gsap.from(".section-description", {

    scrollTrigger: {

        trigger: ".career-summary-section",
        start: "top 80%"
    },

    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.4
});

gsap.fromTo(".summary-card",

    {
        y: 60,
        opacity: 0
    },

    {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",

        scrollTrigger: {

            trigger: ".career-summary-section",
            start: "top 75%"
        }
    }
);

/* =========================
   WORK EXPERIENCE ANIMATION
========================= */

gsap.utils.toArray(".timeline-item").forEach((item, index) => {

    gsap.fromTo(item,

        {
            opacity: 0,
            y: 80,
            x: index % 2 === 0 ? -80 : 80
        },

        {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 1,
            ease: "power3.out",

            scrollTrigger: {

                trigger: item,
                start: "top 85%"
            }
        }
    );

});

/* =========================
   EDUCATION ANIMATION
========================= */

gsap.fromTo(".education-card",

    {
        opacity: 0,
        y: 80
    },

    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",

        scrollTrigger: {

            trigger: ".education-section",
            start: "top 75%"
        }
    }
);

/* =========================
   TECHNICAL PROFICIENCY ANIMATION
========================= */

gsap.fromTo(".skill-card",

    {
        opacity: 0,
        y: 80
    },

    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",

        scrollTrigger: {

            trigger: ".technical-section",
            start: "top 75%"
        }
    }
);

/* =========================
   HTML5 MODAL
========================= */

const html5Modal = document.getElementById("html5Modal");
const html5Frame = document.getElementById("html5Frame");

const modalTitle = document.getElementById("modalTitle");
const modalBrand = document.getElementById("modalBrand");
const modalDescription = document.getElementById("modalDescription");

document.querySelectorAll(".html5-preview-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        html5Modal.classList.add("active");

        html5Frame.src = btn.dataset.preview;

        modalTitle.textContent = btn.dataset.title;
        modalBrand.textContent = btn.dataset.brand;
        modalDescription.textContent = btn.dataset.description;
    });

});


/* =========================
   IMAGE MODAL
========================= */

const imageModal = document.getElementById("imageModal");
const previewImage = document.getElementById("previewImage");

document.querySelectorAll(".image-preview-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        imageModal.classList.add("active");

        previewImage.src = btn.dataset.image;
    });

});


/* =========================
   CLOSE MODALS
========================= */

document.querySelectorAll(".modal-close").forEach(btn => {

    btn.addEventListener("click", () => {

        html5Modal.classList.remove("active");
        imageModal.classList.remove("active");
        videoModal.classList.remove("active");

        html5Frame.src = "";

        previewVideo.pause();
        previewVideo.src = "";
    });

});


/* =========================
   CLOSE ON BACKDROP
========================= */

window.addEventListener("click", (e) => {

    if (e.target.classList.contains("custom-modal")) {

        html5Modal.classList.remove("active");
        imageModal.classList.remove("active");
        videoModal.classList.remove("active");

        html5Frame.src = "";

        previewVideo.pause();
        previewVideo.src = "";
    }
});

/* =========================
   VIDEO MODAL
========================= */

const videoModal = document.getElementById("videoModal");
const previewVideo = document.getElementById("previewVideo");

document.querySelectorAll(".video-preview-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        videoModal.classList.add("active");

        previewVideo.src = btn.dataset.video;

        previewVideo.play();
    });

});

/* =========================
   BRANDS SECTION ANIMATION
========================= */

gsap.fromTo(".market-block",

    {
        opacity: 0,
        y: 80
    },

    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",

        scrollTrigger: {

            trigger: ".brands-section",
            start: "top 75%"
        }
    }
);


gsap.fromTo(".brand-card",

    {
        opacity: 0,
        scale: 0.8
    },

    {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "back.out(1.7)",

        scrollTrigger: {

            trigger: ".brands-grid",
            start: "top 85%"
        }
    }
);

/* =========================
   CONTACT SECTION ANIMATION
========================= */

gsap.fromTo(".contact-info-card",

    {
        opacity: 0,
        x: -80
    },

    {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {

            trigger: ".contact-section",
            start: "top 75%"
        }
    }
);


gsap.fromTo(".contact-form-card",

    {
        opacity: 0,
        x: 80
    },

    {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {

            trigger: ".contact-section",
            start: "top 75%"
        }
    }
);

/* =========================
   FOOTER ANIMATION
========================= */

gsap.fromTo(".footer-wrapper",

    {
        opacity: 0,
        y: 100
    },

    {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",

        scrollTrigger: {

            trigger: ".footer-section",
            start: "top 85%"
        }
    }
);

/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");
        }
    });
});

/* =========================
   GO TO TOP BUTTON
========================= */

const goTopBtn = document.getElementById("goTopBtn");


/* Show / Hide */

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        goTopBtn.classList.add("show");

    } else {

        goTopBtn.classList.remove("show");
    }
});


/* Scroll To Top */

goTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"
    });
});