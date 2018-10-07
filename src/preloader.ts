/*tslint:disable*/

let bodyElement = document.querySelector('body');
let preloaderDiv = document.querySelector('.preloader');


bodyElement.style.overflow = 'hidden';

function removePreloaderDiv() {
    preloaderDiv.addEventListener('transitionend', function () {
        preloaderDiv.className = 'preloader-hidden';
    });

    preloaderDiv.className += ' preloader-hidden-add preloader-hidden-add-active';
}

(<any>window).appBootstrap = () => {
    setTimeout(() => {
        removePreloaderDiv();
        bodyElement.style.overflow = '';
    }, 100);
};

