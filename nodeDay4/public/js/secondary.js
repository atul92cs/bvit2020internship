let updateCompany=document.querySelector('#update-form');
updateDetails=(e)=>{
    let companyname=document.querySelector('#name');
    let companyid=document.querySelector('#id');
    let table= e.parentElement.parentNode;
    let id=table.firstElementChild.innerText;
    let name=table.firstElementChild.nextElementSibling.innerText;
    companyname.value=name;
    companyid.value=id;    
}
updateCompanyDetails=(e)=>{
   e.preventDefault();
   let name=document.getElementById('name').value;
   let id=document.getElementById('id').value;
   let url='/company/'+id;
   let xhr=new XMLHttpRequest();
   let params="name="+name;
   xhr.open('PUT',url,true);
   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

   xhr.onload=function()
   {
       if(xhr.readyState===4||xhr.status===200)
       {
           alert('company details updated');
           window.location.reload();
       }
       else
       {
            alert('error occured');
            window.location.reload();
       }
      
      
   }
   xhr.send(params);

}
updateCompany.addEventListener('submit',updateCompanyDetails);