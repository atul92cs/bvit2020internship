let heroes=[
  {
    realname:'Bruce wayne',
    name:'batman',
    team:['justice league','batman team']
  },
  {
    realname:'Kal-el',
    name:'superman',
    team:['justice league','superman team']
  },
  {
    realname:'Oliver queen',
    name:'Green arrow',
    team:['justice league','team arrow']
  }
];
//console.log(heroes);
heroes.map(hero=>{
  console.log(hero.name);
});
let newHeroes=heroes.filter(hero=>{
 return  hero.name!='superman'
});
console.log(newHeroes);
let newHero={};
newHero.name='Barry Allen';
newHero.realname='Flash';
let team=['justiceleague','team falsh'];
newHero.team=team;
newHeroes.push(newHero);
console.log(newHeroes);
let cars=['Honda','Nissan','Maruti','Hyundai','Kia'];
function readCars()
{
  cars.map(car=>{
    console.log(car);
  });
}
readCars();
let bikes=['Yamaha','ktm','bajaj','truimph','bmw'];
let newbikes;
filterBikes=()=>{
   newbikes=bikes.filter(bike=>{
    return bike!='Yamaha';
  });

}
filterBikes();
console.log(newbikes);
