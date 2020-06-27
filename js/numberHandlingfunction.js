numFinder=(num)=>{
  if(num%2===0)
  {
    console.log('number is even');
  }
  else {
    console.log('number is odd');
  }
}
numFinder(3);
numFinder(46);
numFinder(90);
divFinder=(num)=>{
  let a=num;
  let b=0;
 while(a!==0)
 {
   b=b*10+a%10;
   a=Math.floor(a/10);
 }
 if(num===b)
 {

   console.log('the number is palindrome');
 }
 else {
   console.log('the number is not palindrome');
 }
}
divFinder(121);
