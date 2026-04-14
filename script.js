const message = "এসো, এসো, এসো হে বৈশাখ। তাপসনিশ্বাসবায়ে মুমূর্ষুরে দাও উড়ায়ে, বৎসরের আবর্জনা দূর হয়ে যাক॥ মুছে যাক গ্লানি, ঘুচে যাক জরা, অগ্নিস্নানে শুচি হোক ধরা। শুভ নববর্ষ ১৪৩৩!";
let index = 0;
let player;

// YouTube API তৈরি করা
function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
        height: '0',
        width: '0',
        videoId: '8W9p10ZpXoI', // YouTube ভিডিও আইডি
        playerVars: {
            'autoplay': 0,
            'loop': 1
        }
    });
}

function checkLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user.trim() !== "" && pass === "boishakh") {
        document.body.classList.add("logged-in-bg");
        document.getElementById("login-card").style.display = "none";
        const wishCard = document.getElementById("wish-card");
        wishCard.style.display = "block";
        wishCard.classList.add("dancing-card");

        // YouTube গান প্লে করা
        if (player && player.playVideo) {
            player.playVideo();
        }

        const welcomeUser = document.getElementById("welcome-user");
        welcomeUser.innerHTML = `সুস্বাগতম, <span id="styled-name">${user.toUpperCase()}</span>!`;
        
        applyStyles();
        triggerConfetti();
        typeEffect();
    } else {
        document.getElementById("error-msg").style.display = "block";
    }
}

// বাকি ফাংশনগুলো (applyStyles, triggerConfetti, typeEffect) আগের মতোই থাকবে।
    
