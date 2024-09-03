 window.addEventListener("load", function() {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) { // Firefox
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
                document.documentElement.msRequestFullscreen();
            }
        });

        // Optional: Exit fullscreen when pressing the escape key
        document.addEventListener("fullscreenchange", function() {
            if (!document.fullscreenElement) {
                console.log("Exited fullscreen mode");
            }
        });



//page1 onclick
function tampilkanHalaman() {
    document.getElementById('page1').classList.add('projectku');
    document.getElementById('projectku').classList.remove('projectku');

    const page1 = document.getElementById('page1');
    const projectku = document.getElementById('projectku');

    page1.classList.add('page1');
    page1.addEventListener('animationend', () => {
        page1.classList.add('projectku');
        projectku.classList.remove('projectku');
        projectku.classList.add('projectku');
    }, { once: true });
};

//audio
// script untuk audio button play pause
const audio = document.getElementById('myAudio');
const button = document.getElementById('audioControl');
const iconImage = document.getElementById('iconImage');

audio.muted = false;

button.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
        iconImage.src = 'asset/image/pause-circle-fill.svg'; // Gambar ikon pause
        iconImage.alt = 'Pause';
    } else {
        audio.pause();
        iconImage.src = 'asset/image/play-circle-fill.svg'; // Gambar ikon play
        iconImage.alt = 'Play';
    }
});

// scrip untuk menjalankan autoplay audio ketika target (div) muncul di viewport
document.addEventListener('DOMContentLoaded', function() {
    const targetDiv = document.getElementById('projectku'); //target id div
    const audio = document.getElementById('myAudio');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                audio.play();
            } else {
                audio.pause();
            }
        });
    });

    observer.observe(projectku);
});
