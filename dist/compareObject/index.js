"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compareObject(objectOrigin, object) {
    // objectOrigin: original object
    // object: object to compare
    let arrays = {};
    Object.keys(objectOrigin).forEach((v) => {
        if (Object.keys(object).find(val => val === v)) {
            if (objectOrigin[v] !== object[v]) {
                arrays = Object.assign(Object.assign({}, arrays), { [v]: objectOrigin[v] });
            }
        }
    });
    return arrays;
}
exports.default = compareObject;
