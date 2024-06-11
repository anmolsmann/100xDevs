"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["right"] = 2] = "right";
    direction[direction["left"] = 3] = "left";
})(direction || (direction = {}));
function doSomething(keypressed) {
    if (keypressed == direction.up) {
        console.log("up");
    }
}
doSomething(direction.up);