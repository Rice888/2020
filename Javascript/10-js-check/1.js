; (function () {
    'use strict';

    window.riceCheck =
    {
        isUsername,
        isEmail,
        isPhone,
        isPassword,
        between,
        betweenLength,
    };

    function isUsername(str) {

        if (!betweenLength(str, 4, 12) ||
            str.includes('辣鸡')) {
            return false;
        } else {
            return true;
        }
    }

    function isEmail(str) {

        if (!str.includes('@')) {
            return false;
        } else {
            return true;
        }
    }

    function isPhone(str) {
        if (!betweenLength(str, 11, 11) ||
            // (
            //     str.length != 11 &&
            //     str.length != 13 &&
            //     str.length != 14
            // )
            // ||
            !str.startsWith('1')) {
            return false;
        } else {
            return true;
        }
    }

    function isPassword(str) {
        if (!betweenLength(str, 6, 30)) {
            return false;
        } else {
            return true;
        }
    }

    function between(num, min, max) {
        return num >= min && num <= max;

    }

    function betweenLength(str, min, max) {
        return between(str.length, min, max)
    }






})();
