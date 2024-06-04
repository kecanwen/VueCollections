// !将一串英文字符串中的大写字母改为小写字母，小写字母改为大写字母
function hyphenate(str) {
    let newStr = '';
    for (var i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char === char.toUpperCase()) {
            newStr += char.toLowerCase();
        }
        if (char === char.toLowerCase()) {
            newStr += char.toUpperCase();
        }
    }
    return newStr;
}