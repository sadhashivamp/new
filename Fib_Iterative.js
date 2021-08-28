//Iterative Method

function fibIt(num) {
    const arr = [0, 1];

    for(let i=2; i<= num; i++) {
        let a = arr[i - 1];
        let b = arr[i - 2];
        arr.push(a+b);
    }
    return arr[num];
}
console.log(fibIt(0));
console.log(fibIt(1));
console.log(fibIt(2));
console.log(fibIt(3));
console.log(fibIt(4));
console.log(fibIt(5));
console.log(fibIt(6));
console.log(fibIt(7));
console.log(fibIt(8));

