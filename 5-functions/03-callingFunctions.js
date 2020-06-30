
function hi() {
    console.log('Ayo');
};

hi();
hi;
console.log(hi());

// Create a function that, when invoked, list out the numbers between 1-10;

(function (x, y) {
    // body...
    if (x <= y) {
      console.log(x);
      x++;
      arguments.callee(x, y);
    }
  })(1, 10);


  // IIFE -> Immediately Invoked Function Expression 
 
  (function () {
   console.log(`abc123`)
 })();