const a = 7/0;
if(isNaN(a))
  throw new Error('Failed');
console.log(a)
