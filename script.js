const message = "পুরনো সব গ্লানি মুছে যাক নতুন বছরের শুরুতে। আপনার জীবন ভরে উঠুক অনাবিল আনন্দে! শুভ হোক আপনার ১৪৩৩ বঙ্গাব্দ।";
let index = 0;

function checkLogin() {
    // .toLowerCase() বাদ দেওয়া হয়েছে যাতে ইউজারের নাম যেমন লিখবে তেমনই দেখায়
    const user = document.getElementById("username").value; 
    const pass = document.getElementById("password").value;

    // পাসওয়ার্ড ঠিক থাকলে এবং নাম খালি না থাকলে লগইন হবে
    if (user.trim() !== "" && pass === "boishakh") { 
        
        // ব্যাকগ্রাউন্ড চেঞ্জ
        document.body.classList.add("logged-in-bg");

        // কার্ড সুইচ
        document.getElementById("login-card").style.display = "none";
        document.getElementById("wish-card").style.display = "block";
        
        // নাম ডাইনামিক করা (যেকোনো নাম দিলেই তা কাজ করবে)
        const welcomeUser = document.getElementById("welcome-user");
        welcomeUser.innerHTML = `সুস্বাগতম, <span id="styled-name">${user.toUpperCase()}</span>!`;
        
        // কালার সেট করার ফাংশন কল করা
        applyStyles();
        
        // সেলিব্রেশন শুরু
        triggerConfetti();
        typeEffect();
    } else {
        document.getElementById("error-msg").style.display = "block";
        setTimeout(() => {
            document.getElementById("error-msg").style.display = "none";
        }, 3000);
    }
}

// টেক্সট এবং নামের রঙ পরিবর্তন করার ফাংশন
function applyStyles() {
    const headline = document.getElementById("headline");
    const styledName = document.getElementById("styled-name");

    // হেডলাইনের রঙ (লাল-কমলা)
    headline.style.color = "#d32f2f";

    // নামের উপর গ্রাডিয়েন্ট ইফেক্ট
    if (styledName) {
        styledName.style.background = "linear-gradient(to right, #FF4500, #DA70D6)";
        styledName.style.webkitBackgroundClip = "text";
        styledName.style.webkitTextFillColor = "transparent";
        styledName.style.fontWeight = "bold";
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
    if (index < message.length) {
        document.getElementById("typing-text").innerHTML += message.charAt(index);
        index++;
        setTimeout(typeEffect, 60);
    }
}
