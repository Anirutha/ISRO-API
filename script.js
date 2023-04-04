var container = document.getElementById("container")
// console.log(container)
fetch("https://isro.vercel.app/api/spacecrafts")
.then((response)=>response.json())
.then((data)=>{ 
  // data.map( (event) => {
    for(var i=0; i<data.spacecrafts.length; i++){

 var box = document.createElement("div")
 box.setAttribute("class", "box")
  box.innerHTML += 
  
    ` <div class="inbox">
     <div><span>Id :</span>${data.spacecrafts[i].id}</div> 
    <div><span>Name :</span> ${data.spacecrafts[i].name}</div>
    </div>
    `
     container.append(box)
      // console.log(box)
    }
    
  })