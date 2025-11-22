
    const openBtn = document.getElementById("menu-open-btn");
    const closeBtn = document.getElementById("menu-close-btn");
    const menu = document.getElementById("mobile-menu");

    openBtn.addEventListener("click", () => {
        menu.classList.add("open");
        // document.body.style.overflow = "hidden"; // stop scrolling
    });

    closeBtn.addEventListener("click", () => {
        menu.classList.remove("open");
        document.body.style.overflow = "auto"; 
    });



const tabs = document.querySelectorAll(".tab");
const categories = document.querySelectorAll(".menu-category");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        // Activate tab
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        // Show correct category
        const category = tab.dataset.category;

        categories.forEach(cat => {
            if(cat.classList.contains(category)) {
                cat.classList.add("active");
            } else {
                cat.classList.remove("active");
            }
        });
    });
});


const slider = document.querySelector(".review-slider");
const cards = document.querySelectorAll(".review-card");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 25;
    slider.style.transform = `translateX(${-index * cardWidth}px)`;
}

next.addEventListener("click", () => {
    if (index < cards.length - 1) index++;
    updateSlider();
});

prev.addEventListener("click", () => {
    if (index > 0) index--;
    updateSlider();
});

