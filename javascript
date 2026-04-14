const text = "পুরনো সব গ্লানি মুছে যাক নতুন বছরের শুরুতে। আপনার জীবন ভরে উঠুক অনাবিল আনন্দে!";
let index = 0;

function wishMe() {
    // কনফেটি লঞ্চ করা
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff9933', '#ffffff', '#138808', '#d32f2f']
    });

    // টাইপিং টেক্সট রিসেট এবং স্টার্ট
    document.getElementById("typing-text").innerHTML = "";
    index = 0;
    typeEffect();
}

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}
