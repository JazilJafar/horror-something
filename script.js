const partstochange = document.querySelectorAll(".story-part");
const prevbtn = document.getElementById('prevbtn');
const nexbtn = document.getElementById('nexbtn');
let currentpag = 0;
function updatepage() {
    partstochange.forEach((part, index) => {
        part.style.display = index === currentpag ? 'block' : 'none';
    });
    prevbtn.disabled = currentpag === 0;
    nexbtn.disabled = currentpag === partstochange.length - 1;
}

nexbtn.addEventListener('click', () => {
    if (currentpag < partstochange.length - 1) {
        currentpag++;
        updatepage();
    }
})
prevbtn.addEventListener('click', () => {
    if (currentpag > 0) {
        currentpag--;
        updatepage();
    }
});
updatepage();