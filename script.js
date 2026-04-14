// ১. লিরিক মেসেজ সেট করা
const message = "এসো, এসো, এসো হে বৈশাখ। তাপসনিশ্বাসবায়ে মুমূর্ষুরে দাও উড়ায়ে, বৎসরের আবর্জনা দূর হয়ে যাক॥ মুছে যাক গ্লানি, ঘুচে যাক জরা, অগ্নিস্নানে শুচি হোক ধরা। শুভ নববর্ষ ১৪৩৩!";
let index = 0;

function checkLogin() {
    // ইনপুট ফিল্ড থেকে ভ্যালু নেওয়া
    const user = document.getElementById("username").value; 
    const pass = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    // ইউজারনেম খালি না থাকলে এবং পাসওয়ার্ড 'boishakh' হলে লগইন হবে
    if (user.trim() !== "" && pass === "boishakh") { 
        
        // ২. ব্যাকগ্রাউন্ড চেঞ্জ (CSS এর .logged-in-bg ক্লাসটি বডিতে যোগ হবে)
        document.body.classList.add("logged-in-bg");

        // ৩. লগইন কার্ড লুকিয়ে উইশ কার্ড দেখানো
        document.getElementById("login-card").style.display = "none";
        const wishCard = document.getElementById("wish-card");
        wishCard.style.display = "block";

        // ৪. কার্ডে নাচের ইফেক্ট (Dancing Effect) যোগ করা
        wishCard.classList.add("dancing-card");
        
        // ৫. ইউজারের নাম সেট করা এবং গ্রাডিয়েন্ট স্টাইল অ্যাপ্লাই করা
        const welcomeUser = document.getElementById("welcome-user");
        welcomeUser.innerHTML = `সুস্বাগতম, <span id="styled-name">${user.toUpperCase()}</span>!`;
        
        // ৬. অন্যান্য এনিমেশন শুরু করা
        applyStyles();
        triggerConfetti();
        typeEffect();
        
    } else {
        // তথ্য ভুল হলে এরর মেসেজ দেখানো
        errorMsg.style.display = "block";
        setTimeout(() => {
            errorMsg.style.display = "none";
        }, 3000); // ৩ সেকেন্ড পর এরর মেসেজ চলে যাবে
    }
}

// নামের ওপর স্পেশাল গ্রাডিয়েন্ট ইফেক্ট অ্যাপ্লাই করার ফাংশন
function applyStyles() {
    const styledName = document.getElementById("styled-name");

    if (styledName) {
        styledName.style.background = "linear-gradient(45deg, #ff4e50, #f9d423, #fc913a)";
        styledName.style.webkitBackgroundClip = "text";
        styledName.style.webkitTextFillColor = "transparent";
        styledName.style.fontWeight = "800";
        styledName.style.display = "inline-block";
    }
}

// কনফেটি (রঙিন কাগজ) ফাটানোর ফাংশন
function triggerConfetti() {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff9933', '#ffffff', '#138808', '#d32f2f']
    });
}

// লিরিক টাইপিং অ্যানিমেশন ফাংশন
function typeEffect() {
    const typingContainer = document.getElementById("typing-text");
    if (index < message.length) {
        typingContainer.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeEffect, 60); // প্রতি অক্ষরের মাঝে ৬০ মিলি-সেকেন্ড গ্যাপ
    }
}
