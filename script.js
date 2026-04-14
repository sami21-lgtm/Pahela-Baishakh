const message = "পুরনো সব গ্লানি মুছে যাক নতুন বছরের শুরুতে। আপনার জীবন ভরে উঠুক অনাবিল আনন্দে! শুভ হোক আপনার ১৪৩৩ বঙ্গাব্দ।";
let index = 0;

function checkLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "sami" && pass === "boishakh") {
        // ১. ব্যাকগ্রাউন্ড বদলানো
        document.body.classList.add("logged-in-bg");

        // ২. কার্ড সুইচ করা
        document.getElementById("login-card").style.display = "none";
        document.getElementById("wish-card").style.display = "block";
        
        document.getElementById("welcome-user").innerText = `সুস্বাগতম, ${user}!`;
        
        // ৩. অ্যানিমেশন শুরু
        triggerConfetti();
        typeEffect();
    } else {
        document.getElementById("error-msg").style.display = "block";
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
        setTimeout(typeEffect, 50);
    }
}
