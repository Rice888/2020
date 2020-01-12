; (function () {
    'use strict'
    function eachNumber(A, fn) {
        for (let i = 0; i < A.length; i++) {
            let it = A[i];
            fn(it)
        }
    }


    function evenNumber(A) {
        let result = [];
        eachNumber(A, it => {
            if (it % 2) {
                return;
            }
            result.push(it);
        });
        return result;
    }

    function oddNumber(A) {
        let result = [];
        eachNumber(A,it => {
            if(!(it % 2)){
                return;
            }
            result.push(it);
        });
        return result;
      }

    function sum(A) {
        let sum = 0;
        eachNumber(A,it => sum += it);
        return sum;
      }

    function max(A) {
        let result;
        eachNumber(A,it =>{
            result = it
            if(it > result) {
                 result = it;
              }
        });
        return result;
      }

    function min(A) {
        let result;
        eachNumber(A,it => {
            if(result === undefined) {
                result = it;
                return;
            }
            if(it < result) {
                 result = it;
              }
              
            });
            return result;
      }

    console.log(evenNumber([1, 2, 3, 4, 5, 6]));
    console.log(oddNumber([1, 2, 3, 4, 5, 6]));
    console.log(sum([1, 2, 3, 4, 5, 6, 7]));
    console.log(max([1, 2, 3, 4, 5, 6,7]));
    console.log(min([ 2, 3, 4, 5]));



})();