getUser=(id)=>{
    const url='/artist/get/'+id;
    const xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload=()=>{
        if(xhr.readStatus==4||xhr.status==200)
        {
           const result=JSON.parse(xhr.responseText);
           console.log(result);

          // document.getElementById('editid').value=result.artist.id;
          // document.getElementById('editname').value=result.artist.Name;
          let editgenre= document.getElementById('editgenre').selectedIndex;
          console.log(editgenre);
          // document.getElementById('edittype').selectedIndex=result.artist.type;
            } 
    }
    xhr.send();
}

getUser();