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



   loops doWhileLoop(num) {
   function maybeTrue() {
     return Math.random() >= 10
   }

   do {
     console.log("I run once regardless.");
   } while (num.length > 0 && maybeTrue());
     return num;
 }
