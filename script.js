const message = "পুরনো সব গ্লানি মুছে যাক নতুন বছরের শুরুতে। আপনার জীবন ভরে উঠুক অনাবিল আনন্দে! শুভ হোক আপনার ১৪৩৩ বঙ্গাব্দ।";
let index = 0;

function checkLogin() {
    // ইনপুট ফিল্ড থেকে ভ্যালু নেওয়া
    const user = document.getElementById("username").value; 
    const pass = document.getElementById("password").value;

    // ইউজারনেম খালি না থাকলে এবং পাসওয়ার্ড 'boishakh' হলে লগইন হবে
    if (user.trim() !== "" && pass === "boishakh") { 
        
        // ১. ব্যাকগ্রাউন্ড চেঞ্জ (css এ .logged-in-bg ক্লাসটি ট্রিগার হবে)
        document.body.classList.add("logged-in-bg");

        // ২. লগইন কার্ড লুকিয়ে উইশ কার্ড দেখানো
        document.getElementById("login-card").style.display = "none";
        document.getElementById("wish-card").style.display = "block";
        
        // ৩. নাম ডাইনামিক করা এবং গ্রাডিয়েন্ট স্টাইল অ্যাপ্লাই করা
        const welcomeUser = document.getElementById("welcome-user");
        welcomeUser.innerHTML = `সুস্বাগতম, <span id="styled-name">${user.toUpperCase()}</span>!`;
        
        // স্টাইলিশ নামের ইফেক্ট ফাংশন কল
        applyStyles();
        
        // ৪. কনফেটি সেলিব্রেশন ও টাইপিং অ্যানিমেশন শুরু
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

// নাম এবং হেডলাইনের স্পেশাল স্টাইল সেট করার ফাংশন
function applyStyles() {
    const headline = document.getElementById("headline");
    const styledName = document.getElementById("styled-name");

    if (headline) {
        headline.style.color = "#d32f2f"; // গাঢ় লাল
    }

    if (styledName) {
        // নামের ওপর মাল্টিকালারের গ্রাডিয়েন্ট ইফেক্ট
        styledName.style.background = "linear-gradient(45deg, #ff4e50, #f9d423, #fc913a)";
        styledName.style.webkitBackgroundClip = "text";
        styledName.style.webkitTextFillColor = "transparent";
        styledName.style.fontWeight = "800";
        styledName.style.display = "inline-block";
    }
}

// রঙিন কনফেটি ফাটানোর ফাংশন
function triggerConfetti() {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff9933', '#ffffff', '#138808', '#d32f2f']
    });
}

// শুভেচ্ছা বার্তা টাইপিং অ্যানিমেশন
function typeEffect() {
    const typingContainer = document.getElementById("typing-text");
    if (index < message.length) {
        typingContainer.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeEffect, 60); // টাইপিং স্পিড নিয়ন্ত্রণ
    }
}
