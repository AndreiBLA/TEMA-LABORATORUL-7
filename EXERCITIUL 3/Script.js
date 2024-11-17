let slideIndex = 0;

function resizeImages() {
    const images = document.querySelectorAll(".profile-image");
    images.forEach(image => {
        image.style.width = "400px";
        image.style.height = "300px";
        image.style.objectFit = "cover";
    });
}

function showSlides() {
    const slides = document.querySelectorAll(".slide");

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);
}

resizeImages();
showSlides();
