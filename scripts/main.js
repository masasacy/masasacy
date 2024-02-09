// Scroll to the bottom when click "Contact" button on aside ("Contents")
document.getElementById("scroll-to-bottom").addEventListener("click", function() {
    document.body.scrollIntoView ( {
        behavior: "smooth",
        block: "end"
    });
});

// Switch mode
document.getElementById("mode").addEventListener('click',() => {
    document.body.classList.toggle('dark');
});

// Change mode icon
function switchMode() {
    const modeIcon = document.getElementById('mode');

    if (modeIcon.src.endsWith('img/icon-dark-mode.svg')) {
        modeIcon.src = 'img/icon-light-mode.svg';
    } else {
        modeIcon.src = 'img/icon-dark-mode.svg';
    }
}