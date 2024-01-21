
let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
document.body.classList.toggle("dark");
});




const carousel = document.querySelector('.carousel');
let counter = 0;

document.querySelector('.carousel-container').addEventListener('click', () => {
    counter++;
    if (counter > 3) {
        counter = 0;
    }

    carousel.style.transform = `translateX(${-counter * 100}%)`;
});



window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.style.padding = '5px';
        navbar.style.backgroundColor = '#555';
    } else {
        navbar.style.padding = '10px';
        navbar.style.backgroundColor = '#333';
    }
});
