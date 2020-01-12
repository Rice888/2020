;(function() {
    'use strict'

    function eachStr(A,fn) {
        for(let i = 0; i < A.length; i++) {
             let it = A[i];
             fn(it);
            }
      }


    function gotYo(A) {
        let result = [];
        eachStr(A,it => {
            if(!it.startsWith('y')) {
                return;
            }
            result.push(it);
        });

        return result;
      }



      function shortStr(A) {
          let result = [];
          eachStr(A,it =>{
            if(it.length == 1){
                result.push(it);
            }
          });
          return result;
        }


    function join(A) {
        let result = [];
        let str = '';
        eachStr(A,it => {
            str += it;
        });
        result.push(str);
        return result;
      }
    
    function search(A,b) {
        let result = [];
        eachStr(A,it => {
            if(!it.includes(b)) {
                 return;
              }
              result.push(it);
        });
        return result;
      }



    
    console.log(gotYo(['a', 'yo', 'yoo']));
    
       // ['yo', 'yoo']
       console.log(shortStr(['a', 'foo', 'b', 'bar']));
       
    // shortStr()，shortStr(['a', 'foo', 'b', 'bar']) // ['a', 'b']
    // join()，join(['Y', 'o', 'o']) // Yoo
    console.log(join(['Y', 'o', 'o']) );
    
      console.log(search(['背背山', '六六坡', '背背路'], '背背'));
      
    // exclude()，exclude(['背背山', '六六坡', '背背路'], '背背') // ['六六坡']



})();