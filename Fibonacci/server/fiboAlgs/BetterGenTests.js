// synch environment
import { Meteor } from 'meteor/meteor';

import { Random }   from 'meteor/random';
import { assert, expect } from 'meteor/practicalmeteor:chai';
import Timer from '../helpers/timer.js';
import { Fibo } from './BetterGen.js';
Math.getRandomArbitrary = function(min, max) {
  return Math.random() * (max - min) + min;
};
function testLimit(i,s) {
  const statics = {
    iterations: i,
    seconds: s,
  };
  return Object.assign(
    {},
    statics,
    {time:Date.now()+statics.seconds}
  );
};
function assertion(iter, seconds, res, watch){
  // console.log("ARGS> ", arguments);

  const delta = watch.end();
  const limitMicroseconds = seconds * 1000;
  assert.isBelow(delta, limitMicroseconds, `Found '${res}' on pass '${iter}' which took '${delta/1000} Miliseconds'`);
};
function program() {
  describe('Better Fib Generator', function(){
    it("works", ()=> {
      var fib = Fibo();
      // 0,1,1,2,3,5,8,13,21,34
      assert.equal(fib.next().value, 0);
      assert.equal(fib.next().value, 1);
      assert.equal(fib.next().value, 1);
      assert.equal(fib.next().value, 2);
      assert.equal(fib.next().value, 3);
      assert.equal(fib.next().value, 5);
      assert.equal(fib.next().value, 8);
      assert.equal(fib.next().value, 13);
      assert.equal(fib.next().value, 21);
      assert.equal(fib.next().value, 34);
      assert.equal(fib.next().value, 55);
    });
    it("can do 250 passes <0.01s", ()=> {
      var fib = Fibo();
      const limits = testLimit(1477,10);
      const stopwatch = new Timer();
      stopwatch.begin();
      let result = 0;
      let obj;
      for(i=0; i<limits.iterations; i++){
        result = fib.next().value;
        if(Date.now()>limits.time){
          assertion(i, limits.seconds, result, stopwatch);
        }
      }
      stopwatch.end();
      assertion(limits.iterations, limits.seconds, result, stopwatch);
    });
    it("can do MAX(1477) passes < 1000 μs", ()=> {
      var fib = Fibo();
      const limits = testLimit(1477,1);
      const stopwatch = new Timer();
      stopwatch.begin();
      let result = 0;
      let obj;
      for(i=0; i<limits.iterations; i++){
        result = fib.next().value;
        if(Date.now()>limits.time){
          assertion(i, limits.seconds, result, stopwatch);
        }
      }
      stopwatch.end();
      assertion(limits.iterations, limits.seconds, result, stopwatch);
    });
    it("can do MAX(1477) passes < 500 μs", ()=> {
      var fib = Fibo();
      const limit = testLimit(1477,0.5);
      const stopwatch = new Timer();
      stopwatch.begin();
      let result = 0;
      let obj;
      for(i=0; i<limit.iterations; i++){
        result = fib.next().value;
        if(Date.now()>limit.time){
          assertion(i, limit.seconds, result, stopwatch);
        }
      }
      stopwatch.end();
      assertion(limit.iterations, limit.seconds, result, stopwatch);
    });
    it("can do MAX(1477) passes < 100 μs", ()=> {
      var fib = Fibo();
      const limit = testLimit(1477,0.1);
      const stopwatch = new Timer();
      stopwatch.begin();
      let result = 0;
      let obj;
      for(i=0; i<limit.iterations; i++){
        result = fib.next().value;

        if(Date.now()>limit.time){
          assertion(i, limit.seconds, result, stopwatch);
        }
      }
      stopwatch.end();
      assertion(limit.iterations, limit.seconds, result, stopwatch);
    });
  });
}

export default program();
// setTimeout(function(){
// }, 2000 );
