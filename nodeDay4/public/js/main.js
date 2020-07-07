deleteCar=(id)=>{
   const url="/car/delete/"+id;
   const xhr=new XMLHttpRequest();
   xhr.open('DELETE',url,true);
   xhr.onload=function(){
    if(xhr.readyState===4||xhr.status===200)
    {
        alert('car deleted');
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
deleteCountry=(e)=>{
    const parent=e.parentElement;
    console.log(parent);
    /*const url="/country/delete/"+id;
   const xhr=new XMLHttpRequest();
   xhr.open('DELETE',url,true);
   xhr.onload=function(){
    if(xhr.readyState===4||xhr.status===200)
    {
        alert('country deleted');
        window.location.reload();
    }
    else
    {
         alert('error occured');
         window.location.reload();
    }
   }
   xhr.send(null);
*/
}
loadCountries=()=>
{
    const url="/country/get";
    const xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload=function()
    {
        if(this.status===200)
        {
            let countries=JSON.parse(this.responseText).countries;
            let table=document.getElementById('table-body');
            countries.forEach(country => {
               let tablerow=document.createElement('tr');
               let tablecolumn1=document.createElement('td');
               let iddata=document.createTextNode(country.id);
               let tablecolumn2=document.createElement('td');
               let namedata=document.createTextNode(country.name);
               let tablecolumn3=document.createElement('td');
               let deleteButton=document.createElement('button');
               let buttontext=document.createTextNode('Delete');
               deleteButton.appendChild(buttontext);
               deleteButton.addEventListener('click',deleteCountry(this));
               tablecolumn1.appendChild(iddata);
               tablecolumn2.appendChild(namedata);
               tablecolumn3.appendChild(deleteButton);
               tablerow.appendChild(tablecolumn1);
               tablerow.appendChild(tablecolumn2);
               tablerow.appendChild(tablecolumn3);
               table.appendChild(tablerow);
            
            });
           
        }
    }
    xhr.send();
}
loadCountries();
let countryform=document.querySelector('#country-form');
addCountry=(e)=>{
    e.preventDefault();
    let name=document.getElementById('name').value;
    let url='/country/add';
    let params="name="+name;
    let xhr=new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload=function()
    {
        if(xhr.readyState===4||xhr.status===200)
        {
            alert('country created');
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
countryform.addEventListener('submit',addCountry);
//deleteButton=document.querySelector('.deleteButton');
//deleteButton.addEventListener('click',deleteCountry(this));
