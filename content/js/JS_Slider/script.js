window.addEventListener('DOMContentLoaded', function () {
    let arr=[];

    for(let i = 1; i < 10; i++) {
        arr.push("./img/space3_0" + i + ".jpg");
    }
    let slider = document.getElementById('slider');
        slider.src = arr[0];
    let navPrev = document.getElementsByClassName('prev')[0],
        navNext = document.getElementsByClassName('next')[0],

        firstSlide = 0,
        arrLength = arr.length;

    function nextSlide() {
        if( firstSlide === arr.length - 1){
            firstSlide = 0;
        } else {
            firstSlide += 1;
        }
        slider.src = arr[firstSlide];
    }
    function prevSlide() {
        if( firstSlide === 0){
            firstSlide = arrLength - 1;
        } else {
            firstSlide -= 1;
        }
        slider.src = arr[firstSlide];
    }
    navNext.addEventListener('click', function () {
        slider.style.transition = '2s';
        nextSlide();
    });
    navPrev.addEventListener('click', function () {
        prevSlide();
    });
//SlideShow
    let letsStart;
    function slideShowStart() {
       if (letsStart) {
            clearInterval(letsStart);
            letsStart = null;
           slideShowBtn.innerHTML = '<i class="fas fa-play"></i>\n' + '<span>START SLIDE SHOW</span>'
        } else {
            letsStart = setInterval(nextSlide, 2000);
           slideShowBtn.innerHTML = '<i class="fas fa-pause"></i>\n' + '<span>STOP SLIDE SHOW</span>'
        }
    }
    let slideShowBtn = document.querySelector('.slideshow-btn');

        slideShowBtn.addEventListener('click', function () {
            slideShowStart();

        })
});