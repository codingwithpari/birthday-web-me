// ================================
// HAPPY BIRTHDAY PARI ❤️
// JAVASCRIPT
// ================================


// Surprise Button
function showSurprise() {

    const surprise = document.getElementById("surprise");

    // Show surprise message
    surprise.style.display = "block";

    // Create lots of hearts
    createHearts(25);
}


// =================================
// FLOATING HEARTS
// =================================

function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        const heart = document.createElement("div");

        // Add heart class
        heart.classList.add("heart");

        // Random emoji
        const hearts = [
            "❤️",
            "💖",
            "💕",
            "💗",
            "✨"
        ];

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];


        // Random horizontal position
        heart.style.left =
            Math.random() * 100 + "vw";


        // Random animation speed
        heart.style.animationDuration =
            (4 + Math.random() * 4) + "s";


        // Random size
        heart.style.fontSize =
            (16 + Math.random() * 20) + "px";


        // Add heart to page
        document.body.appendChild(heart);


        // Remove heart after animation
        setTimeout(() => {

            heart.remove();

        }, 8000);
    }
}


// =================================
// AUTOMATIC FLOATING HEARTS
// =================================

setInterval(() => {

    createHearts(1);

}, 1200);


// =================================
// CONSOLE MESSAGE
// =================================

console.log("🎂 Happy Birthday Pari ❤️");
console.log("✨ Birthday website loaded successfully!");