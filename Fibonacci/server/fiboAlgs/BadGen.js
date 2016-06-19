/*
fibonacci algorithm

get(20) th fibonacci number
check(48) a fibonacci number? get(48) : "not fibo"

algorithm: n=(n-1)+(n-2)
sequences: 0,1,1,2,3,5,8,13,21,34

Error: Found 'Infinity' on pass '3297489'
NOTE: In ES6, Number.MAX_SAFE_INTEGER is (2^53)-1, or 9007199254740991.
*/


// Test Results
// Passed: 1,000 in 141ms
// Failed: Max Iterations


export function* Fibo (n, current = 0, next = 1) {

  if (n === 0) {
    return 0;
  }

  yield current;
  yield* Fibo(n - 1, next, current + next);
}
