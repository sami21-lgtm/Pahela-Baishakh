// ১. লিরিক আপডেট করা হয়েছে
const message = "এসো, এসো, এসো হে বৈশাখ। তাপসনিশ্বাসবায়ে মুমূর্ষুরে দাও উড়ায়ে, বৎসরের আবর্জনা দূর হয়ে যাক॥ মুছে যাক গ্লানি, ঘুচে যাক জরা, অগ্নিস্নানে শুচি হোক ধরা। শুভ নববর্ষ ১৪৩৩!";
let index = 0;

function checkLogin() {
    // ইনপুট ফিল্ড থেকে ভ্যালু নেওয়া
    const user = document.getElementById("username").value; 
    const pass = document.getElementById("password").value;

    // ইউজারনেম খালি না থাকলে এবং পাসওয়ার্ড 'boishakh' হলে লগইন হবে
    if (user.trim() !== "" && pass === "boishakh") { 
        
        // ব্যাকগ্রাউন্ড চেঞ্জ (css এ .logged-in-bg ক্লাসটি ট্রিগার হবে)
        document.body.classList.add("logged-in-bg");

        // লগইন কার্ড লুকিয়ে উইশ কার্ড দেখানো
        document.getElementById("login-card").style.display = "none";
        const wishCard = document.getElementById("wish-card");
        wishCard.style.display = "block";

        // কার্ডে নাচের ইফেক্ট (Dancing Effect) যোগ করা
        wishCard.classList.add("dancing-card");
        
        // ইউজারের নাম সেট করা
        const welcomeUser = document.getElementById("welcome-user");
        welcomeUser.innerHTML = `সুস্বাগতম, <span id="styled-name">${user.toUpperCase()}</span>!`;
        
        // স্টাইল এবং এনিমেশন শুরু
        applyStyles();
        triggerConfetti();
        typeEffect();
    } else {
        // ভুল পাসওয়ার্ডের এরর মেসেজ
        const errorElement = document.getElementById("error-msg");
        errorElement.style.display = "block";
        setTimeout(() => {
            errorElement.style.display = "none";
        }, 3000);
    }
}

// নাম এবং হেডলাইনের স্পেশাল স্টাইল
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

// কনফেটি ফাটানোর ফাংশন
function triggerConfetti() {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff9933', '#ffffff', '#138808', '#d32f2f']
    });
}

// লিরিক টাইপিং অ্যানিমেশন
function typeEffect() {
    const typingContainer = document.getElementById("typing-text");
    if (index < message.length) {
        typingContainer.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeEffect, 60); 
    }
}
