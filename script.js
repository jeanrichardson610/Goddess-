const logoImg = document.getElementById("logoImg");

// Change loogo based on window size:
window.addEventListener("resize", (e) => {
    if(e.target.innerWidth <= 900) {
        logoImg.src = "./images/logo-dark-header.png"
    }   else {
        logoImg.src = "./images/logo-light-header.png"
    }
});

const menuBtn = document.querySelector(".menu");
const links = document.querySelector(".links");

// Toggle navigation link visibility
const handleNavLinks = () => {
    links.classList.toggle("active");
};

menuBtn.addEventListener("click", handleNavLinks);

// Close navigation links when clicking outside;
document.addEventListener("click", (e) => {
    if(!menuBtn.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove("active");
    }
});

// Initialize Slider
const slider = document.querySelector(".slider");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let currentIndex = 0;
const updateSlider = () => {
    const slideWidth = slider.clientWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
};

// Handle Next Slide
const nextSlide = () => {
    if(currentIndex < 2) {
        currentIndex++;
        updateSlider();
    }
};

// Handle Previous Slide
const prevSlide = () => {
    if(currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
};

rightBtn.addEventListener("click", nextSlide);
leftBtn.addEventListener("click", prevSlide);

// Initialize current logo on page load
document.addEventListener("DOMContentLoaded", (e) => {
    if(window.innerWidth <= 900) {
        logoImg.src = "./images/logo-dark-header.png";
    } else {
        logoImg.src = "./images/logo-light-header.png";
    }

    // Initialize slider;
    updateSlider();
});

const scrollToTopBtn = document.querySelector(".scroll-to-top");
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if(window.scrollY >= 700) {
        scrollToTopBtn.classList.add("active");
        header.classList.add("active");
        logoImg.src = "./images/logo-dark-header.png";
    } else {
        scrollToTopBtn.classList.remove("active");
        header.classList.remove("active");
        logoImg.src =
      window.innerWidth > 900
        ? "./images/logo-light-header.png"
        : "./images/logo-dark-header.png"; // <-- reset on scroll up
    }
})