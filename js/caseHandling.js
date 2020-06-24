let musicians=[
  {
    name:'Post malone',
    Origin:'Usa'
  },
  {
    name:'Chad kroeger',
    Origin:'Canada'
  },
  {
    name:'Matthew tuck',
    Origin:'UK'
  },
  {
    name:'Lucky ali',
    Origin:'India'
  },
  {
    name:'Shaan',
    Origin:'India'
  }
];
let inMusic=[];
let usMusic=[];
let ukMusic=[];
let cnMusic=[];
let indiMusic;
filterIndi=()=>{
indiMusic=musicians.filter(musician=>{
    return musician.Origin==='India';
  });
}
filterIndi();
console.log(indiMusic);
filterMuscians=()=>{
  musicians.forEach(musician=>{
    if(musician.Origin==='India')
    {
      inMusic.push(musician);
    }
    else if (musician.Origin==='Usa') {
      usMusic.push(musician);
    }
    else if (musician.Origin==='UK') {
      ukMusic.push(musician);
    }
    else {
      cnMusic.push(musician);
    }

  });
}
filterMuscians();
console.log(inMusic);
console.log(usMusic);
console.log(ukMusic);
console.log(cnMusic);
