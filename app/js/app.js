// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $
// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')
import debug from "./lib";


document.addEventListener('DOMContentLoaded', () => {
    const user = {name: "Alex"};
    user.name = "Mixa";
    debug(user);
})
