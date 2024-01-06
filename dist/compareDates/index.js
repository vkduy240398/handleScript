"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compareDate(current, startTime, endTime) {
    var _a, _b, _c, _d, _e, _f;
    const date_regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    if (current.match(date_regex) && startTime.match(date_regex) && endTime.match(date_regex)) {
        const currentDate = reverseString(current, ((_a = current.match(date_regex)) === null || _a === void 0 ? void 0 : _a[4]) || '/').split(((_b = current.match(date_regex)) === null || _b === void 0 ? void 0 : _b[4]) || '/');
        const start = reverseString(startTime, ((_c = startTime.match(date_regex)) === null || _c === void 0 ? void 0 : _c[4]) || '/').split(((_d = startTime.match(date_regex)) === null || _d === void 0 ? void 0 : _d[4]) || '/');
        const end = reverseString(endTime, ((_e = endTime.match(date_regex)) === null || _e === void 0 ? void 0 : _e[4]) || '/').split(((_f = endTime.match(date_regex)) === null || _f === void 0 ? void 0 : _f[4]) || '/');
        // 
        const newDatesCurr = new Date(parseInt(currentDate[0]), parseInt(currentDate[1]) - 1, parseInt(currentDate[2]));
        const newDatesStart = new Date(parseInt(start[0]), parseInt(start[1]) - 1, parseInt(start[2]));
        const newDatesEnd = new Date(parseInt(end[0]), parseInt(end[1]) - 1, parseInt(end[2]));
        const results = (newDatesCurr.getTime() >= newDatesStart.getTime() && newDatesCurr.getTime() <= newDatesEnd.getTime());
        return results;
    }
    else {
        return false;
    }
}
exports.default = compareDate;
function reverseString(string, characters) {
    const arrayStrings = string.split(characters);
    const reverse = arrayStrings.reverse();
    return reverse.join(characters);
}
