// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $
// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')
import debug, {isEmpty} from "./lib";


document.addEventListener('DOMContentLoaded', () => {

    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }

    let empty = {}

    let sum = (obj) => {
        let sum = 0;
        for (let key in obj) {
            sum += obj[key];
        }
        return sum;
    }

    debug(sum(salaries));
    debug(sum(empty));

})
