let previewContainer = document.querySelector(".products-preview");
let previewBox = previewContainer.querySelectorAll(".preview");
let header = document.querySelector(".header");

document.querySelectorAll(".products-container .product").forEach((product) => {
    product.onclick = () => {
        previewContainer.style.display = "flex";
        header.style.display = "none";
        let name = product.getAttribute("data-name");
        previewBox.forEach((preview) => {
            let target = preview.getAttribute("data-target");
            if (name == target) {
                preview.classList.add("active");
            }
        });
    };
});

previewBox.forEach((close) => {
    close.querySelector(".fa-times").onclick = () => {
        close.classList.remove("active");
        previewContainer.style.display = "none";
        header.style.display = "flex";
    };
});

// Navbar
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
};
document.querySelector("#close-navbar").onclick = () => {
    navbar.classList.remove("active");
};

// Seacrh Form
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
};

window.onscroll = () => {
    navbar.classList.remove("active");
    searchForm.classList.toggle("active");
};