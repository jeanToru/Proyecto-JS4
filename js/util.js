function getDistance(object1, object2) {
    let x = object1.x - object2.x;
    let y = object1.y - object2.y;
    return Math.sqrt(x * x + y * y);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getContext() {
    return document.getElementById('canvas').getContext('2d');
}

export {
    getDistance,
    randomInt,
    getContext
};