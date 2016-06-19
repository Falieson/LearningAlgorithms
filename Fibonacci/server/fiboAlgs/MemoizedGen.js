/*
fibonacci algorithm

get(20) th fibonacci number
check(48) a fibonacci number? get(48) : "not fibo"

algorithm: n=(n-1)+(n-2)
sequences: 0,1,1,2,3,5,8,13,21,34

[Making a Fibo Generator with ES6](https://medium.com/javascript-scene/7-surprising-things-i-learned-writing-a-fibonacci-generator-4886a5c87710#.1z30w575k)


Error: Found 'Infinity' on pass '3297489'
NOTE: In ES6, Number.MAX_SAFE_INTEGER is (2^53)-1, or 9007199254740991.
*/
// 
// // Test Results
// // Passed: ?
// let memo = [];
//
// const fib = (n) => {
//   if (memo[n] !== undefined) return memo[n];
//
//   let current = 0;
//   let next = 1;
//
//   for (let i = 0; i < n; i++) {
//     memo[i] = current;
//     [current, next] = [next, current + next];
//   }
//
//   return current;
// };
//
// export function* Fibo (n) {
//   fib(n);
//   yield* memo.slice(0, n + 1);
// }
//
// // export default gen;
// //
// // export function* Fibo (n) {
// //   const memo = [];
// //   const fib = (n) => {
// //     if (memo[n] !== undefined) return memo[n];
// //
// //     let current = 0;
// //     let next = 1;
// //
// //     for (let i = 0; i < n; i++) {
// //       memo[i] = current;
// //       [current, next] = [next, current + next];
// //     }
// //
// //     return current;
// //   };
// //   // Test Results
// //   // Passed: All Tests
// //   fib(n);
// //   yield* memo.slice(0, n + 1);
// // }
