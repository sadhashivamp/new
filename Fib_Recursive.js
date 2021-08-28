//Recursive Method

function fibRc(n) {
    if (n < 2) {
      return n;
    }
    return fibRc(n - 1) + fibRc(n - 2); // Fn-1 + Fn-2
  }

  console.log(fibRc(0));
  console.log(fibRc(1));
  console.log(fibRc(2));
  console.log(fibRc(3)); 
  console.log(fibRc(4)); 
  console.log(fibRc(5));
  console.log(fibRc(6));
  console.log(fibRc(7));
  console.log(fibRc(8)); 