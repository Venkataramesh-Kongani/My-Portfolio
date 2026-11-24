
// ===== Typing Animation =====

const typingText = document.querySelector("#typing");

const roles = [
    "Java Developer",
    "Software Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentRole.substring(0, charIndex);

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        speed = 1200;
    }

    else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===== Scroll To Top Button =====

const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "topButton";
topButton.title = "Back to top";

document.body.appendChild(topButton);

topButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});


// ===== Automatic Footer Year =====

const footer = document.querySelector("footer p");

footer.innerHTML =
    `© ${new Date().getFullYear()} Ramesh. All Rights Reserved.`;


// ===== Navigation Link Click =====

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.style.color = "#cbd5e1";
        });

        link.style.color = "#a855f7";

    });

});
