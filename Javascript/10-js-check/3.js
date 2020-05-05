    ; (function () {
    'use strict';

    let is = {

        numeric(value) {
            return !isNaN(parseFloat(value));
        },

        min(value, guide) {
            if (!this.numeric(value)) {
                return false;
            }
            return value >= guide;
        },

        max(value, guide) {
            if (!this.numeric(value)) {
                return false;
            }
            return value <= guide;
        },

        positive(value) {
            if (!this.numeric(value)) {
                return false;
            }
            return value > 0;
        },

        between(value, min, max) {
            return this.min(value, min) && this.max(value, max);
        },

        negative(value) {
            if (!this.numeric(value)) {
                return false;
            }
            return value < 0;
        },


        minLen(value, guide) {
            return value.length >= guide;
        },

        maxLen(value, guide) {
            return value.length <= guide;
        },

        betweenLen(value, min, max) {
            return this.minLen(value, min) && this.maxLen(value, max);
        },

        sWith(value, guide) {
            return value.startsWith(guide);
        },

        eWith(value, guide) {
            return value.endsWith(guide);
        },

        includes(value, guide) {
            return value.includes(guide);
        },

        /**
         * @description: 在数组中
         * @param {mix} value   param参数 mix 混合
         * @param {Array} guide
         */

        in(value, guide) {
            return guide.indexOf(value) !== -1;
        },

        regex(value, reg) {
            if (typeof reg == 'string') {
                reg = new RegExp(reg);
            }
            return reg.test(value);
        },

        email(value) {
            let re = /^\w+@\w+\.\w+$/;
            return re.test(value);
        },

        username(value) {
            let re = /^[a-zA-Z]\w+$/;
            return re.test(value);
        },

        phone(value, country = 'zh') {
            let re;
            switch (country) {
                case 'zh':
                    re = /^(?:\+?(?:86)?)?(\s|-)?1(3|4|5|7|8)\d{9}$/;
                    break;
            }
            return re.test(value);
        }



    }


    function applyRule(value,rules) {
        for(let key in rules){
            let ru = rules[key]
            is[key](value,ru);

        }
      }


    function parseRule(str) {

        let ruleArr = str.split('|');
        let rule = {};



        ruleArr.forEach(it => {
            let itArr = it.split(':');
            let key = itArr[0];
            let guide = itArr[1];

            if (!guide) {
                guide = true;
            }

            rule[key] = guide;
        });

        return rule;
    }




})();