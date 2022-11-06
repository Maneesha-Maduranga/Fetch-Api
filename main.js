const url = "https://dummyjson.com/carts";

window.addEventListener("load",loadData);


function loadData(){
    
     fetch(url)
    .then((res)=> res.json())
    .then((data)=> {
        
        let output = " "
        //console.log(data["carts"]);
        data["carts"].forEach(element => {
            output += `
            
            <div class="col-sm-3 col-lg-3 p-2">
            <div class="card">
              <div class="card-body">
                <h6 class="card-title">${element.products[0]['title']}</h5>
                <p>
                Price :  ${element.products[0]['price']}</br>
                Quantity : ${element.products[0]['quantity']}</br>
                Toatl : ${element.products[0]['total']} </br>
                Discount : ${element.products[0]['discountPercentage']}</br>
               Discount Price :  ${element.products[0]['discountedPrice']}

                </p>
                <button id=${element.id} type="button" class="btn btn-light" onclick="myFuncton(id)">Remove</button>
              </div>
            </div>
          </div>
        `;
    });
   
       document.getElementById("list").innerHTML = (output)
        
    })
}

function myFuncton(id){
    
    fetch(`https://dummyjson.com/carts/${id}`, {
    method: 'DELETE',
    })
  .then(res => res.json())
  .then(console.log);
}
