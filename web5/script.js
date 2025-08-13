const rocket = document.getElementById('rocket');
let rocketBottom = 150; // vertical position
let rocketLeft = window.innerWidth / 2; // horizontal position
let speedY = 4; // upward speed
let blastTriggered = false;

function moveRocket() {
    // Move upward
    rocketBottom += speedY;

    // Random horizontal drift
    let drift = (Math.random() - 0.5) * 6; // random between -3 and 3 px
    rocketLeft += drift;

    // Keep inside screen horizontally
    if (rocketLeft < 0) rocketLeft = 0;
    if (rocketLeft > window.innerWidth - 120) rocketLeft = window.innerWidth - 120;

    rocket.style.bottom = rocketBottom + 'px';
    rocket.style.left = rocketLeft + 'px';

    // Blast at random height before top
    if (!blastTriggered && rocketBottom >= window.innerHeight * 0.6) {
        explode();
        blastTriggered = true;
        clearInterval(rocketInterval);
    }
}

function explode() {
    rocket.style.display = 'none';
    const blast = document.createElement('div');
    blast.classList.add('blast');
    blast.style.bottom = rocketBottom + 'px';
    blast.style.left = rocketLeft + 'px';
    document.body.appendChild(blast);

    setTimeout(() => {
        blast.remove();
    }, 1000);
}

const rocketInterval = setInterval(moveRocket, 30);
