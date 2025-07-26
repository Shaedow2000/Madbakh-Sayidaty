"use strict";
let navigationBar = document.getElementById('navigation');
let upBtn = document.getElementById('up');
let navFixing = () => {
    if (scrollY >= 180) {
        navigationBar.style.width = '100%';
        navigationBar.style.position = 'fixed';
    }
    else {
        navigationBar.style.width = '85%';
        navigationBar.style.position = 'static';
    }
};
let upButton = () => {
    if (scrollY >= 500) {
        upBtn.style.right = '10px';
    }
    else {
        upBtn.style.right = '-100px';
    }
};
let goUp = () => {
};
window.addEventListener('scroll', () => {
    navFixing();
    upButton();
});
