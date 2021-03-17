// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $
// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')
import debug, {isEmpty} from "./lib";


document.addEventListener('DOMContentLoaded', () => {

    let multiplyNumeric = (obj) => {
        for (let key in obj) {
            if (typeof obj[key] == "number") {
                obj[key] *= 2;
            }
        }
    }

    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    debug(menu);
    multiplyNumeric(menu);
    debug(menu);

})
