const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active');
    document.querySelector('.ham-menu').classList.toggle('is-active');
});

const navBar = document.querySelector('.nav-bar');

const height = window.innerHeight * .75;

window.onscroll = () => {
    "use strict";

    

    if(document.body.scrollTop >= height || document.documentElement.scrollTop >= height){
        navBar.classList.add("scroll");
    }
    else{
        navBar.classList.remove('scroll');
    }
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

