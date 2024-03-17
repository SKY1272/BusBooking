
let details=[]


function handleSubmit(event){
  event.preventDefault();
  let name=document.getElementById('name').value
  let email=document.getElementById('email').value
  let phone=document.getElementById('phone').value
  let bus=document.getElementById('bus').value



  console.log(name,email,phone,bus)


  details.push({name,email,phone,bus});


  AddDetails()


  document.getElementById('name').value=''
  document.getElementById('email').value=''
  document.getElementById('phone').value=''
  document.getElementById('bus').value='Bus1'

}
function AddDetails(){
   let detail=document.getElementById('detail')
   detail.innerHTML=''
   details.forEach((item,index)=>{
    let newDiv=document.createElement('div')
    newDiv.classList.add('item')
    newDiv.innerHTML=`
    <p> ${item.name} ${item.email}  ${item.phone} ${item.bus}</p>
    <button onclick="editEntry(${index})">Edit</button>
    <button onclick="deleteEntry(${index})">Delete</button>
    `
    detail.appendChild(newDiv)
   })
   
}
function editEntry(index){
  let x=details[index];
  document.getElementById('name').value=x.name;
  document.getElementById('email').value=x.email;
  document.getElementById('phone').value=x.phone;
  document.getElementById('bus').value=x.bus
  details.splice(index,1)
  AddDetails()
}
function deleteEntry(index) {
   details.splice(index, 1);
   AddDetails()
}
function filterEntries(){
  let filterValue=document.getElementById('filter').value;
  if(filterValue==='All'){
    AddDetails()
  }else{
    let filterDetail=details.filter(item=>item.bus===filterValue)
    let detail=document.getElementById('detail');
    detail.innerHTML='';
    filterDetail.forEach((item,index)=>{
      let newDiv=document.createElement('div');
      newDiv.classList.add('item')
      newDiv.innerHTML=`
      
      <p> ${item.name} ${item.email}  ${item.phone} ${item.bus}</p>
    <button onclick="editEntry(${index})">Edit</button>
    <button onclick="deleteEntry(${index})">Delete</button>
      `
      detail.appendChild(newDiv)
    })
  }
}