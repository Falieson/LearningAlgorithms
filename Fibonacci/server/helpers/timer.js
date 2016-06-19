// https://www.npmjs.com/package/microseconds
import μs from 'microseconds';

export default class Timer {
  constructor() {
    startT  = 0;
    stopT   = 0;
    deltaT  = 0;
    result  = {};
  }
  calcDelta() {
    if(!this.stopT){
      this.end();
    }
    this.delta = μs.since(this.startT).toFixed(2);
    return this.delta;
  }
  begin() {
    this.startT = μs.now();
  }
  end() {
    this.stopT = μs.now();
    return this.calcDelta();
  }
  getDelta() {
    if(!this.deltaT){
      this.end();
    }
    return this.deltaT;
  }
  get() {
    this.result = μs.parse(this.deltaT);
    if(!this.result){
      return this.end();
    } else {
      return this.result;
    }
  }
}



// export default class Timer {
//   constructor() {
//     seconds       = 0;
//     microseconds  = 0;
//     startT  = 0;
//     stopT   = 0;
//     deltaT  = 0;
//   }
//   begin() {
//   }
//   end() {
//      let output = Measure.end("i", true);
//     output = output.substring(output.lastIndexOf("~ ")+2,output.lastIndexOf("\n"));
//      console.log("OUTPUT> ", output);
//
//     //  str.substring();
//
//       // '.*
//     this.seconds = output.substring(0,1);
//     console.log("seconds> ", this.seconds);
//     this.seconds = parseFloat(this.seconds).toFixed(0);
//     console.log("seconds> ", this.seconds);
//
//     this.microseconds = output.substring(3,7);
//     console.log("microseconds> ", this.microseconds);
//     this.microseconds = parseFloat(this.microseconds).toFixed(2);
//     console.log("microseconds> ", this.microseconds);
//
//   }
//   get() {
//     return this.seconds;
//   }
//   getMicroSeconds() {
//     return this.microseconds;
//   }
// }
