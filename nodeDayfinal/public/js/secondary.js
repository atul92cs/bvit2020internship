deleteArtist=(id)=>{
    const url='/artist/delete/'+id;
    const xhr=new XMLHttpRequest();
    xhr.open('DELETE',url,true);
    xhr.onload=function()
    {
        if(xhr.readyState==4||xhr.status==200)
        {
            alert('artist deleted');
            window.location.reload();
        }
        else
        {
            alert('error occured');
            window.location.reload();
        }
    }
    xhr.send(null);
}
getArtist=(id)=>{
    const url='/artist/get/'+id;
    const xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload=()=>{
        if(xhr.readyState==4||xhr.status==200)
        {
           const result=JSON.parse(xhr.responseText);
           document.getElementById('editid').value=result.artist.id;
           document.getElementById('editname').value=result.artist.name;
           document.getElementById('editgenre').selectedIndex=result.artist.genre;
           document.getElementById('edittype').selectedIndex=result.artist.type;
            } 
    }
    xhr.send();
}
