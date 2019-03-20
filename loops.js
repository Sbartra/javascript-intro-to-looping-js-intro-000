function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}

 function whileLoop(n) {
  let countdown = n;

     while (countdown > 0) {
      console.log(--countdown)
    }
    return "done";
  }

 function doWhileLoop(number) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  do {
     console.log();
   } while (number.length > -1 && maybeTrue());

   return number;
 }
