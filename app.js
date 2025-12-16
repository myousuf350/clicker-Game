

const startBtn = document.getElementById("startBtn");
const clickBtn = document.getElementById("clickBtn");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const msgEl = document.getElementById("msg");

let time = 5;
let score = 0;
let timer;

clickBtn.disabled = true;

startBtn.addEventListener("click", function() {
    time = 5;
    score = 0;
    timeEl.textContent = time;
    scoreEl.textContent = score;
    msgEl.textContent = "";
    msgEl.style.color = "#e5e7eb";

    clickBtn.disabled = false;
    clearInterval(timer);

    timer = setInterval(function() {
        time--;
        timeEl.textContent = time;


        if(time <= 2) {
            timeEl.style.color = "#f87171";
        } else {
            timeEl.style.color = "#e5e7eb";
        }

        if(time === 0) {
            clearInterval(timer);
            clickBtn.disabled = true;


            if(score >= 10) {
                msgEl.style.color = "#22c55e"; 
                msgEl.textContent = "🔥 Pro Clicker! Score: " + score;
            } else {
                msgEl.style.color = "#f87171"; 
                msgEl.textContent = "Game Over! Your Score: " + score;
            }
        }
    }, 1000);
});

clickBtn.addEventListener("click", function() {
    score++;
    scoreEl.textContent = score;
});
