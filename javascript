const text = "পুরনো সব গ্লানি মুছে যাক নতুন বছরের শুরুতে। আপনার জীবন ভরে উঠুক অনাবিল আনন্দে!";
let index = 0;

function wishMe() {
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
