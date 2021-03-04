// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

    console.log(5 > 4);
    console.log("ананас" > "яблоко");
    console.log("2" > "12");
    console.log(undefined == null);
    console.log(undefined === null);
    console.log(null == "\n0\n");
    console.log(null === +"\n0\n");

    /*
5 > 4                   true
"ананас" > "яблоко"     true
"2" > "12"              false
undefined == null       true
undefined === null      false
null == "\n0\n"         false
null === +"\n0\n"       false
     */
})
