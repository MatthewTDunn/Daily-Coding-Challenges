// for loop is one of the most frequently used loop statements in JS. It works like while loop. In lesson 9, we wrote a while loop:

// function sum1_100(){
//   var sum=0,num=1
//   while (num<=100){
//     sum+=num;
//     num++;
//   }
//   return sum;
// }
// We can rewrite it by using for loop, like this:

// function sum1_100(){
//   for (var sum=0,num=1;num<=100;num++){
//     sum+=num;
//   }
//   return sum;
// }
// As you see, there are three parts in the brackets, separated by ";". The first part is the initialization variable, this part will run before the loop starts. The second part is the conditional expressions, check the expression before the start of each time loops, when the value of the expression is false, loop will be terminated. The third part is the statement about increasing and decreasing variables, they will run after the code block.

// For the example above, the running order of the code is:

//                               <--- back to part 2
//                   -------------------------------------------
//                   |                 true                    |
// var sum=0,num=1  --->  num<=100 ?  ------> code block---> num++
//                                 |  
//                            false|
//                        loop terminated
// When you need to traverse an array, you can use the for loop. look this example:

// function displayElements(array){
//   for (var i=0;i<array.length;i++){
//     console.log(array[i]);
//   }
// }
// This function will display every element of array on your screen.

// Ok, lesson is over, let's us do some task with for.

// Task
// Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

// I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

// If you forgot how to push an element to array, please refer to lesson 4.

// Series
// ( ↑↑↑ Click the link above can get my newest kata list, Please add it to your favorites)

// #1: create your first JS function helloWorld
// #2: Basic data types--Number
// #3: Basic data types--String
// #4: Basic data types--Array
// #5: Basic data types--Object
// #6: Basic data types--Boolean and conditional statements if..else
// #7: if..else and ternary operator
// #8: Conditional statement--switch
// #9: loop statement --while and do..while
// #10: loop statement --for
// #11: loop statement --break,continue
// #12: loop statement --for..in and for..of
// #13: Number object and its properties
// #14: Methods of Number object--toString() and toLocaleString()
// #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
// #16: Methods of String object--slice(), substring() and substr()
// #17: Methods of String object--indexOf(), lastIndexOf() and search()
// #18: Methods of String object--concat() split() and its good friend join()
// #19: Methods of String object--toUpperCase() toLowerCase() and replace()
// #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
// #21: Methods of String object--trim() and the string template
// #22: Unlock new skills--Arrow function,spread operator and deconstruction
// #23: methods of arrayObject---push(), pop(), shift() and unshift()
// #24: methods of arrayObject---splice() and slice()
// #25: methods of arrayObject---reverse() and sort()
// #26: methods of arrayObject---map()
// #27: methods of arrayObject---filter()
// #28: methods of arrayObject---every() and some()
// #29: methods of arrayObject---concat() and join()
// #30: methods of arrayObject---reduce() and reduceRight()
// #31: methods of arrayObject---isArray() indexOf() and toString()
// #32: methods of Math---round() ceil() and floor()
// #33: methods of Math---max() min() and abs()
// #34: methods of Math---pow() sqrt() and cbrt()
// #35: methods of Math---log() and its family
// #36: methods of Math---kata author's lover:random()
// #37: Unlock new weapon---RegExp Object
// #38: Regular Expression--"^","$", "." and test()
// #39: Regular Expression--"?", "*", "+" and "{}"
// #40: Regular Expression--"|", "[]" and "()"
// #41: Regular Expression--""
// #42: Regular Expression--(?:), (?=) and (?!)

describe("Tests", () => {
    it("test", () => {
      Test.assertSimilar(pickIt([1,2]),[[1],[2]]);
      Test.assertSimilar(pickIt([1,2,3]),[[1,3],[2]]);
      Test.assertSimilar(pickIt([3,2,1]),[[3,1],[2]]);
      Test.assertSimilar(pickIt([10,20,30]),[[],[10,20,30]]);
      Test.assertSimilar(pickIt([11,21,31]),[[11,21,31],[]]);
      Test.assertSimilar(pickIt([8,1,5,4,6,1,1]),[[1,5,1,1],[8,4,6]]);
    });
  });
  

// 
// @param: int array
// @return: two indexed 2D array split by odd/even values of input arr
// 

function pickIt(arr){
    var odd=[],even=[];
    for (let i=0;i<arr.length;i++){
      (arr[i]%2 == 0) ? even.push(arr[i]) : odd.push(arr[i])
    }
    return [odd,even];
}