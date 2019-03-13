// Exercise:  Rabbits and Recurrence Relations
// Number:    04

export const fib = (n, k) => {

  if(n === 0 || k === 0) { throw Error('n or k must be greater than 0'); }
  else if(n > 40 || k > 5) { throw Error('n ≤ 40 or k ≤ 5'); }

  let fibSeq = [1, 1, 2, 3, 5, 8];

  var fibSum = 2;
  var count = 4;

  while(count <= n) {
    fibSum += (count - 1) + (count - 2);
    count++;
  }

  // console.log(fibSum);
}

// fib(3, 1)