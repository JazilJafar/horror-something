const partstochange = document.querySelectorAll(".story-part");
const prevbtn = document.getElementById('prevbtn');
const nexbtn = document.getElementById('nexbtn');
const hoversounddiv = document.querySelectorAll('.story-part');
const horrorsoundone = document.getElementById('hover-sound');

let currentpag = 0;
function updatepage() {
    partstochange.forEach((part, index) => {
        part.style.display = index === currentpag ? 'block' : 'none';
    });
    if (prevbtn) prevbtn.disabled = currentpag === 0;
    if (nexbtn) nexbtn.disabled = currentpag === partstochange.length - 1;
};
if (nexbtn) {
    nexbtn.addEventListener('click', () => {
        if (currentpag < partstochange.length - 1) {
            currentpag++;
            updatepage();
        }
    })
};
if (prevbtn) {
    prevbtn.addEventListener('click', () => {
        if (currentpag > 0) {
            currentpag--;
            updatepage();
        }
    });
}
if (hoversounddiv && horrorsoundone) {
    hoversounddiv.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            horrorsoundone.currentTime = 0;
            horrorsoundone.play().catch((err) => {
                console.warn("Audio play blocked until initial click interaction:", err);
            });
        });
    });
};
updatepage();