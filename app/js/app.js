// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

    let a = prompt("Первое число?", 1);
    let b = prompt("Второе число?", 2);

    alert(+a + +b); // 12
})
