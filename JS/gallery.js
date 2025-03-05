document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("nav-active");
    });

    // Gallery filtering
    const filters = document.querySelectorAll(".filter");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filters.forEach(filter => {
        filter.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            galleryItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // Image Modal
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeModal = document.querySelector(".close");

    galleryItems.forEach(item => {
        item.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.querySelector("img").src;
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
