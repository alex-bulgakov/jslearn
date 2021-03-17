function debug(obj) {
    console.log(obj);
}

export function isEmpty(obj) {
    for (let key in obj) {
        return true;
    }
    return false;
}

export default debug;