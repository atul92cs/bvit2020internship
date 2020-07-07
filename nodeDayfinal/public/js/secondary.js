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