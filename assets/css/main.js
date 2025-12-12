/* =============================
   MUSIC TOGGLE
============================= */
function toggleMusic() {
    const music = document.getElementById("bgm");
    if (music.paused) music.play();
    else music.pause();
}

/* =============================
   PARTICLE SYSTEM (floating pixels)
============================= */
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.2
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.y -= p.speed;
        if (p.y < 0) p.y = canvas.height;
        ctx.fillStyle = "#39f0e6";
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#39f0e6";
        ctx.fillRect(p.x, p.y, p.size, p.size);
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();
