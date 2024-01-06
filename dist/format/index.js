"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function money(number) {
    var _a;
    let str = String(number).replace(/[\s]/g, "");
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    if (((_a = str.match(/[a-zA-z|ぁ-んァ-ン|ｧ-ﾝﾞﾟ|一-龥]/i)) === null || _a === void 0 ? void 0 : _a.index) === undefined) {
        const p = parseInt(str).toFixed(2).split(".");
        const num = p[0]
            .split("")
            .reverse()
            .reduce(function (acc, num, i) {
            return num + (num != "-" && i && !(i % 3) ? "," : "") + acc;
        }, "");
        return num;
    }
    return str;
}
exports.default = money;
