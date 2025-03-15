onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  // Remove the 'not-loaded' class when the page is fully loaded
window.addEventListener('load', () => {
    document.body.classList.remove('not-loaded');
});

// Smooth scroll to gallery after delay
setTimeout(() => {
    document.getElementById('gallery').scrollIntoView({ 
        behavior: 'smooth'
    });
}, 14000); // Scroll after animations complete

document.addEventListener("DOMContentLoaded", function () {
  const closeGalleryBtn = document.getElementById("closeGalleryBtn");
  const galleryContainer = document.getElementById("gallery");

  closeGalleryBtn.addEventListener("click", function () {
    galleryContainer.style.display = "none";
  });
});
