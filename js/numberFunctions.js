let num=[25,56,36,89,5];
let oddnum=[];
let evenum=[];
filterNumbers=()=>{
  num.forEach(nu=>{
    if(nu%2===0)
    {
      evenum.push(nu);
    }
    else {
      oddnum.push(nu);
    }
  });
}
filterNumbers();
console.log(oddnum);
console.log(evenum);
