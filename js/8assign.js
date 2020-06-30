class Person
{
  constructor(name,department,email)
  {
    this.name=name;
    this.department=department;
    this.email=email;
  }
}
let Persons=[];
createUser=(e)=>{
  e.preventDefault();
  let name=document.querySelector('#name').value;
  let department=document.querySelector('#dept').value;
  let email=document.querySelector('#email').value;
  let Per=new Person(name,department,email);
  Persons.push(Per);
  name.value="";
  department.value="";
  email.value="";
  loadUsers();
}
let form=document.querySelector('#register-form');
form.addEventListener('submit',createUser);
loadUsers=()=>{
  let Personslist=document.querySelector('#Persons-list');
  Persons.forEach(person=>{
    let liElement=document.createElement('li');
    let name=document.createTextNode(person.name);
    liElement.appendChild(name);
    Personslist.appendChild(liElement);
  });
}
loadUsers();
