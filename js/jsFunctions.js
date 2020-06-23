let availbikes=[];
function newBike()
{
  let bike={};
  bike.name='Himlayan';
  bike.company='Royal endfield';
  availbikes.push(bike);
}
newBike();
console.log(availbikes);
createBikes=()=>{
  let bike={};
  bike.name='Adventure 390';
  bike.company='KTM';
  availbikes.push(bike);
}
createBikes();
console.log(availbikes);
