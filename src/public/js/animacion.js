let open = document.getElementById('hamburger');
let changeIcon = true;

open.addEventListener("click", function() {

    let overlay = document.querySelector('.overlay');
    let nav = document.querySelector('nav');
    let icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});


let countDowDate = new Date("Dec 25, 2020 00:00:00").getTime();

let x = setInterval(function() {
    let now = new Date().getTime();

    var distance = countDowDate - now;



    let day = Math.floor(distance / (1000 * 60 * 90 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 90 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById('launch').innerHTML = day + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('launch').innerHTML = 'EXPIRED';
    }
}, 1000);