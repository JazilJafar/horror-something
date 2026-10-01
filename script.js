const partstochange = document.querySelectorAll(".story-part");
const prevbtn = document.getElementById('prevbtn');
const nexbtn = document.getElementById('nexbtn');
const horrorsoundone = document.getElementById('hover-sound');
const volumeSlider = document.getElementById('volumeSlider');

let currentpag = 0;
let isAudioStarted = false;
function startAudio() {
    if (!isAudioStarted && horrorsoundone) {
        horrorsoundone.play().then(() => {
            isAudioStarted = true;
        }).catch((err) => {
            console.warn("Autoplay blocked until user interaction:", err);
        });
    }
}

function updatepage() {
    partstochange.forEach((part, index) => {
        part.style.display = index === currentpag ? 'block' : 'none';
    });
    if (prevbtn) prevbtn.disabled = currentpag === 0;
    if (nexbtn) nexbtn.disabled = currentpag === partstochange.length - 1;
}

if (nexbtn) {
    nexbtn.addEventListener('click', () => {
        startAudio();
        if (currentpag < partstochange.length - 1) {
            currentpag++;
            updatepage();
        }
    });
}

if (prevbtn) {
    prevbtn.addEventListener('click', () => {
        startAudio();
        if (currentpag > 0) {
            currentpag--;
            updatepage();
        }
    });
}
if (volumeSlider && horrorsoundone) {
    horrorsoundone.volume = parseFloat(volumeSlider.value);

    volumeSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        
        horrorsoundone.volume = val;
        horrorsoundone.muted = (val === 0);
    });
}
document.addEventListener('click', startAudio, { once: true });

updatepage();