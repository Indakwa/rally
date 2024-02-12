document.addEventListener('DOMContentLoaded', function () {
    const carImage = document.getElementById('carImage');
    const boxes = document.querySelectorAll('.box');
    const container = document.querySelector('.container');

    // Redirect when clicking .container
    container.addEventListener('click', function (event) {
        if (!event.target.classList.contains('box')) {
            window.location.href = 'https://google.com'; // Replace 'https://example.com' with your desired URL
        }
    });

    // Change images when clicking .box
    boxes.forEach((box, index) => {
        box.addEventListener('click', function () {
            carImage.src = `images/${index + 1}.png`;
        });
    });
});

const timeline = gsap.timeline({ default: { duration: 1 }})
timeline
    .from('.container', { y: '-100%', ease: 'bounce' })
    .from('.box', { opacity: 0, stagger: .5 }, '<.8')
    .from('.car', { duration: 5, x: '-100vw', ease: 'back.out' })
    .from('.titles', { opacity: 0 })
    .from('.titles2', { opacity: 0, stagger: .5 })
    //.from('.left', { x: '-100%' }, '<.5')
    ///.to('.footer', { y:0, ease: 'elastic' })
    //.fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })