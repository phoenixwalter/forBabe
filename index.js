function createHeart() {
    const heart = document.createElement("img");
    heart.src = "images/heart.png";
    heart.classList.add("heart");

    const blur = Math.random() * 2; // 0–2px blur

    heart.style.left = Math.random() * (window.innerWidth - 300) + 150  + "px";
    heart.style.width = Math.random() * 30 + 60 + "px";
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    heart.style.transform = `rotate(${Math.random() * 360}deg)`;
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    heart.style.filter = `blur(${blur}px)`;

    document.body.appendChild(heart);

    // remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 6000);
};

setInterval(createHeart, 200);

function allowAccess(){
    const textbox = document.getElementById("textbox");
    textbox.style.color = "rgb(76, 255, 157)";
    setTimeout(() => {
        const passwordSection = document.getElementById("password");
        const mainSection = document.getElementById("main");
        passwordSection.classList.add("flyUp");
        setTimeout(() => {
            passwordSection.style.display = "none";
            mainSection.classList.add("fadeIn");
            mainSection.style.display = "flex";
        },2000);
    }, 1000);
};

function press(number){
    const textbox = document.getElementById("textbox");
    text = textbox.innerHTML;
    if (text == "DD/MM/YYYY"){
        text = "";
    };

    if (text.length < 8){
        textbox.innerHTML = text + String(number);
    };
    if (number == -1){
        textbox.innerHTML = text.slice(0,-1);
    };

    if (textbox.innerHTML == ""){
        textbox.innerHTML = "DD/MM/YYYY";
    };

    if (textbox.innerHTML == "18022024"){
        allowAccess();
    };
};

const buttonWidth = 250;
const buttonHeight = 55;

window.addEventListener("DOMContentLoaded", () => {
    const maxWidth = window.innerWidth - buttonWidth;
    const maxHeight = window.innerHeight - buttonHeight;

    const button = document.getElementById("nono");
    const yesButton = document.getElementById("yes");
    const msg = document.getElementById("nope");
    const randomButton = document.getElementById("outerNono");

    msg.style.display = "none";

    button.addEventListener('mouseover', () => {
        button.style.display = "none";
        randomButton.style.display = "inline";
        randomButton.style.position = "fixed";
        randomButton.style.left = Math.floor(Math.random() * (maxWidth + 1)) + "px";
        randomButton.style.top = Math.floor(Math.random() * (maxHeight + 1)) + "px";
        msg.style.display = "inline";
        setInterval(() => {
            if (randomButton.matches(":hover")){
                randomButton.style.left = Math.floor(Math.random() * (maxWidth + 1)) + "px";
                randomButton.style.top = Math.floor(Math.random() * (maxHeight + 1)) + "px";
        }
        }, 1000);
        randomButton.addEventListener('mouseover', () => {
            randomButton.style.left = Math.floor(Math.random() * (maxWidth + 1)) + "px";
            randomButton.style.top = Math.floor(Math.random() * (maxHeight + 1)) + "px";
        });
    });

    yesButton.addEventListener('click', () => {
        const rect = yesButton.getBoundingClientRect();
        const xPos = (rect.x + (rect.width/2)) / window.innerWidth
        const yPos = (rect.y + (rect.height/2)) / window.innerHeight

        const defaults = {
        spread: 360,
        ticks: 100,
        gravity: 0,
        decay: 0.94,
        startVelocity: 10,
        shapes: ["heart"],
        colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
        origin: {
            x: xPos,
            y: yPos
        }
        };

        confetti({
        ...defaults,
        particleCount: 50,
        scalar: 2,
        });

        confetti({
        ...defaults,
        particleCount: 25,
        scalar: 3,
        });

        confetti({
        ...defaults,
        particleCount: 10,
        scalar: 4,
        });
        const button = document.getElementById("outerNono");
        const mainSection = document.getElementById("main");
        const msgSection = document.getElementById("message");
        setTimeout(() => {
            button.style.display = "none";
            mainSection.style.opacity = "0";
            setTimeout(() => {
                mainSection.style.display = "none";
                msgSection.style.display = "inline";
                msgSection.classList.add("fadeIn");
            }, 1000);
        }, 500);
    });
});
