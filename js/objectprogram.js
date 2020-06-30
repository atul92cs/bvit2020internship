//es6 work
class Movie{
  constructor(id,Name,Year,Country)
  {
    this.id=id;
    this.Name=Name;
    this.Year=Year;
    this.Country=Country;
  }
}

let movies=[];
addMovie=(Name,Year,Country)=>{
  let movie=new Movie(Name,Year,Country);
  movies.push(movie);
}
removeMovie=(name)=>{
  let selectedMovie=movies.filter(movie=>{
    return movie.Name!==name;
  });
  console.log(selectedMovie);
}
addMovie(1,'The dark knight','2008','USA');
addMovie(2,'Parasite','2019','South korea');
addMovie(3,'The Irishman','2019','USA');
console.log(movies);
removeMovie('Parasite');
let numbers=[];
addNumber=(number)=>{
  numbers.push(number);
  numbers.map(num=>{
    return console.log(num);
  });

}
addNumber(2);
addNumber(3);
//let headingTag=document.getElementsByTagName('h3');
//console.log(headingTag);
//headingTag[2].textContent='Content changed';
//let headerTag=document.querySelectorAll('h3');
//console.log(headerTag);
//headerTag[1].textContent='First  Text';
let list=document.querySelector('#element-list');
console.log(list.lastChild);
list.firstChild.nextSibling.textContent='First child';

addElement=(e)=>{
  let newelement=document.createElement('li');
  let newElementtext=document.createTextNode('Arbitary Element');
  newelement.appendChild(newElementtext);
  console.log(newelement);
  list.appendChild(newelement);
}
//addElement('Fourth Element');
addArbitaryElement=(e)=>{
  let newelement=document.createElement('li');
  let newElementtext=document.createTextNode('Fifth Element');
  newelement.appendChild(newElementtext);
  console.log(newelement);
  list.appendChild(newelement);

}
let button=document.querySelector('#add-second-button');
console.log(button);
button.addEventListener('click',addElement);
let listitems=document.querySelector('.list-group-item:first-child');
console.log(listitems);
let nthelement=document.querySelector('.list-group-item:nth-child(2)');
console.log(nthelement);
let listgroup=document.querySelectorAll('.list-group-item');
let oddChild=document.querySelectorAll('.list-group-item:nth-child(odd)');
let evenChild=document.querySelectorAll('.list-group-item:nth-child(even)');
for(i=0;i<oddChild.length;i++)
{
//oddChild[i].style.backgroundColor='blue';
//evenChild[i].style.backgroundColor='teal';
}
let body=document.querySelector('body');
console.log(body);
enterElements=(e)=>{
  e.preventDefault();
  let list=document.querySelector('#element-list');
  let newItem=document.createElement('<li>');
  let newItemText=document.createTextNode('Fourth Element');
  newItem.appendChild(newItemText);
  list.appendChild(newItem);
}
body.addEventListener('load',enterElements);
