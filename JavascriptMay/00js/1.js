/*
 * @Author: your name
 * @Date: 2020-05-03 15:20:21
 * @LastEditTime: 2020-07-05 08:36:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /RiceProgram/2020/javascriptMay/00js/1.js
 */
; (function () {
    'use strict';
    
    let arr = ['ooo','eee','yoo0','yo','a','2'];

    function eachNumber(x,fn) {
        for(let i of x){
            fn(i);
        }
    }
    
    function evenNumber(x) {
        let odd = []
        let result = [];
        eachNumber(x, (it)=>{
            if(it % 2) { //能被2除尽的数
                odd.push(it);    //运算[1,2]不能被整除推到odd
                return;     // [2,4]继续传递
            }
            result.push(it);    //运算返回[2,4]推到result
        });
        console.log(odd);
        console.log(result);
    }
    
    function sum(x) {
        let sum = 0;
        eachNumber(x, (it)=>{
            sum += it;
        });
        console.log(sum);
    }

    function maxMin(x){
        let result;
        let result2;
        eachNumber(x, (it)=>{
            if(result === undefined) {
                result = it;
            }
            if(it < result){
                result = it;
            }
            if(it > result){
                result2 = it;
            }
        });
        console.log(result);
        console.log(result2);
        
    }
    
   function getYo(x) {
       let result = [];
       eachNumber(x, (it)=>{
           if(it.includes('y')) {     
               result.push(it);
               return;
           }
       });
       console.log(result);
       
   }
   function shortLong(x) {
       let short = [];
       let long = [];
       console.log(short == 0);
       eachNumber(x, (it)=>{
           if(short == 0){
               short = it;
           }
           if(it.length < short.length){
               short = it;
           }
           console.log('it:'+it.length);
           console.log('long:'+short.length);
           
           if(it.length > short.length){
                long = it;
           }
       });
       console.log(short);
       console.log(long);
    }

   function join(x) {
       let result = '';
       eachNumber(x, (it)=>{
           result += it;
       });
       return result;
   }

   function search(x) {
       let result = [];
        eachNumber(x, (it)=>{
            if(it.includes('oo')) {
                return;
            }
            result.push(it);
        });
        return result;
   }

   console.log(
        search(arr)
   );
   

})();