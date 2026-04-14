// ১. লিরিক আপডেট করা হয়েছে
const message = "এসো, এসো, এসো হে বৈশাখ। তাপসনিশ্বাসবায়ে মুমূর্ষুরে দাও উড়ায়ে, বৎসরের আবর্জনা দূর হয়ে যাক॥ মুছে যাক গ্লানি, ঘুচে যাক জরা, অগ্নিস্নানে শুচি হোক ধরা। শুভ নববর্ষ ১৪৩৩!";
let index = 0;

function checkLogin() {
    const user = document.getElementById("username").value; 
    const pass = document.getElementById("password").value;

    if (user.trim() !== "" && pass === "boishakh") { 
        
        // ব্যাকগ্রাউন্ড এবং কার্ড সুইচ
        document.body.classList.add("logged-in-bg");
        document.getElementById("login-card").style.display = "none";
        const wishCard = document.getElementById("wish-card");
        wishCard.style.display = "block";

        // ২. কার্ডে নাচের ইফেক্ট (Dancing Effect) যোগ করা
        wishCard.classList.add("dancing-card");

        // ৩. গান প্লে করা
        const song = document.getElementById("bg-music");
        if (song) {
            song.play().catch(error => {
                console.log("অটো-প্লে ব্লক হয়েছে, ইউজার ইন্টারঅ্যাকশন প্রয়োজন।");
            });
        }
        
        const welcomeUser = document.getElementById("welcome-user");
        welcomeUser.innerHTML = `সুস্বাগতম, <span id="styled-name">${user.toUpperCase()}</span>!`;
        
        applyStyles();
        triggerConfetti();
        typeEffect();
    } else {
        const errorElement = document.getElementById("error-msg");
        errorElement.style.display = "block";
        setTimeout(() => {
            errorElement.style.display = "none";
        }, 3000);
    }
}

function applyStyles() {
    const headline = document.getElementById("headline");
    const styledName = document.getElementById("styled-name");

    if (headline) {
        headline.style.color = "#d32f2f"; 
    }

    if (styledName) {
        styledName.style.background = "linear-gradient(45deg, #ff4e50, #f9d423, #fc913a)";
        styledName.style.webkitBackgroundClip = "text";
        styledName.style.webkitTextFillColor = "transparent";
        styledName.style.fontWeight = "800";
        styledName.style.display = "inline-block";
    }
}

function triggerConfetti() {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff9933', '#ffffff', '#138808', '#d32f2f']
    });
}

function typeEffect() {
    const typingContainer = document.getElementById("typing-text");
    if (index < message.length) {
        typingContainer.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeEffect, 50); // গানের সাথে সামঞ্জস্য রাখতে স্পিড একটু বাড়ানো হয়েছে
    }
}
