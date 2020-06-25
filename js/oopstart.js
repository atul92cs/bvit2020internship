//es 5 method
function Bike(name,modelno,company)
{
   this.name=name;
   this.modelno=modelno;
   this.company=company;
}
let bike1=new Bike('Tiger','xca','Truimph');
console.log(bike1);
Bike.prototype.getBikename=function()
{
  return this.name;
}

console.log(bike1.getBikename());

//es6 method
class Car{
  constructor(name,model,company,origin)
  {
    this.name=name;
    this.model=model;
    this.company=company;
    this.origin=origin;
  }
  getCarOrigin()
  {
    return this.origin;
  }
  getCarName()
  {
    return this.name;
  }
}
let car1=new Car('Kicks','xv','Nissan','Japan');
console.log(car1.getCarOrigin());
console.log(car1.getCarName());
//es5
console.log(document.getElementById('welcome-message'));
let header=document.getElementById('welcome-message');
header.innerHTML='<strong>Text made strong by javascript</strong>';
console.log(header);
header.innerText='Inner text used';
header.style.color='red';
header.style.backgroundColor='blue';
let input=document.getElementById('userinput');
console.log(input.value);
//es6
let secondheader=document.querySelector('#second-message');
secondheader.innerText='This is one of the queryselector';
let secondMessage=document.querySelector('.header-class');
secondMessage.innerHTML='<i>Text turned italic by class query selector</i>';
