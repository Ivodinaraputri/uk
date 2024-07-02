document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            const offset = targetSection.offsetTop - (window.innerHeight - targetSection.offsetHeight) / 2;

            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        });
    });

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        dots.forEach(dot => {
            dot.classList.remove('active-dot');
        });

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].classList.add('active');
        dots[slideIndex - 1].classList.add('active-dot');

        setTimeout(showSlides, 3000); // Set the delay for slides to 3 seconds
    }

    // Adding event listeners for manual navigation between slides using dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide(index + 1);
        });
    });

    function currentSlide(n) {
        slideIndex = n;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        dots.forEach(dot => {
            dot.classList.remove('active-dot');
        });

        slides[slideIndex - 1].classList.add('active');
        dots[slideIndex - 1].classList.add('active-dot');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll("#experiences .slide");
    const dots = document.querySelectorAll("#experiences .dot");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            dots[i].classList.remove("active-dot");
            if (i === index) {
                slide.classList.add("active");
                dots[i].classList.add("active-dot");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            currentSlide = i;
            showSlide(currentSlide);
        });
    });

    showSlide(currentSlide);

    // Automatically switch slides every 3 seconds
    setInterval(nextSlide, 3000);
});
