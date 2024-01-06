"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function combinedArray(arrays, key) {
    const results = arrays.reduce((acc, curr) => {
        const founds = acc.find((v) => v[key] === curr[key]);
        if (!founds) {
            acc.push(Object.assign(Object.assign({}, curr), { children: [curr] }));
        }
        else {
            founds.children.push(curr);
        }
        return acc;
    }, []);
    return results;
}
exports.default = combinedArray;
