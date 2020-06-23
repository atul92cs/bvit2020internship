let hero={
  name:'Batman',
  realname:'Bruce Wayne',
  teams:['justice league','team batman'],
  power:'mind & technology',
  age:'35',
  archenemy:{
    main:'bane',
    second:`ra's al ghul`
  }
}
console.log(hero);
console.log(hero.age);
let {name,realname,teams,archenemy:{main}}=hero;
console.log(name,realname,teams,main);
