let a=[1,'Infosys','c++','congnizant',4,5,89,'12 strong'];
let companies;
function filterCompanies()
{
  companies=a.filter(com=>{
      return typeof(com)!="number";
  });
}
filterCompanies();
console.log(companies);
let integers;
filerIntegers=()=>{
  integers=a.filter(num=>{
      return typeof(num)==="number";
  });
}
filerIntegers();
console.log(integers);