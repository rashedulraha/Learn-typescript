"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function testType(value) {
    console.log(value);
}
const newArray = [2, 2, 3, 4, 5, 6, 7, 5];
const characters = ["a", "b"];
let userData = ["Hello", 423424];
var color;
(function (color) {
    color[color["red"] = 3] = "red";
    color[color["green"] = 4] = "green";
    color[color["blue"] = 5] = "blue";
})(color || (color = {}));
var size;
(function (size) {
    size[size["small"] = 0] = "small";
    size[size["medium"] = 1] = "medium";
    size[size["large"] = 2] = "large";
})(size || (size = {}));
const startSize = size.large;
function add(a, b) {
    return a + b;
}
const result = add(2, 2);
console.log(result);
//# sourceMappingURL=index.js.map