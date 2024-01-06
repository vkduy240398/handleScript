"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseString(string, characters) {
    const arrayStrings = string.split(characters || "");
    const reverse = arrayStrings.reverse();
    return reverse.join(characters);
}
exports.default = reverseString;
