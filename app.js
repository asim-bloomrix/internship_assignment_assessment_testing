// Select all dashboard cards
const cards = document.querySelectorAll(".card");

// Add click animation to each card
cards.forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(0.95)";

        setTimeout(() => {

            card.style.transform = "";

        }, 150);

    });

});

// Fade in the page when loaded
window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// Initial body opacity
document.body.style.opacity = "0";
document.body.style.transition = "opacity .8s";