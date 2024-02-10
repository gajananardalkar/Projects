


let cart=document.querySelectorAll(".add-cart");

let Products = [
    {
        name:"computer-keyboard" ,
        Price:70,
        Available:5,
        incart:0
    },
    {
        name:"black-canon" ,
        Price:700,
        Available:3,

        incart:0
    },
    {
        name:"aperture" ,
        Price:300,
        Available:8,

        incart:0
    },
    {
        name:"camera" ,
        Price:750,
        Available:7,

        incart:0
    }
];


for(let i=0;i< cart.length;i++)

{
    cart[i].addEventListener('click',()=>{

        Cartnumbers(Products[i]);
        totalCost(Products[i]);
        // quantity(Products[i]);
    })
}

 function Cartnumbers(product){
    // console.log("product is :",product);
    let ProductNumbers = localStorage.getItem('Cartnumbers');
    // console.log(ProductNumbers);
    // console.log(typeof ProductNumbers);

    ProductNumbers = parseInt(ProductNumbers);
    // console.log(typeof ProductNumbers);

    if(ProductNumbers){

        localStorage.setItem('Cartnumbers', ProductNumbers + 1);
        // document.querySelector('.nav span').innerHTML= ProductNumbers + 1;
        document.getElementById('cartproduct').innerText= ProductNumbers +1;
    }
    else{
        localStorage.setItem('Cartnumbers',1);
        // document.querySelector('.nav span').innerHTML=1;
        document.getElementById('cartproduct').innerText= 1;
        
    }
     

    setItem(product);

    }

 function loadedcart(){
        let ProductNumbers = localStorage.getItem('Cartnumbers');
        ProductNumbers = parseInt(ProductNumbers);

        console.log(ProductNumbers);
        console.log(typeof ProductNumbers);

        if(ProductNumbers){

            // document.querySelector('.nav span').innerHTML = ProductNumbers;
            document.getElementById('cartproduct').innerText= ProductNumbers ;

        }
    }

    
    function setItem(product){
        let cartItems= localStorage.getItem('productCart');
         cartItems = JSON.parse(cartItems);

        if(cartItems!=null){

            if( cartItems[product.name]==undefined){
                cartItems={
                    ...cartItems,
                    [product.name] : product
             }   
            }
            cartItems[product.name].incart += 1;
        }else{
            product.incart=1;
                 cartItems={
                     [product.name] : product
        }  
 
        }
        
         
        // localStorage.setItem("productinCart", cartItems)

        localStorage.setItem("productCart", JSON.stringify(cartItems));
        
    }


 function totalCost(ProductCost){
    //  console.log('produvt cost is', ProductCost.Price);

     let price = localStorage.getItem('totalCost');

     if(price!=null){
        price=parseInt(price);

        localStorage.setItem('totalCost', price + ProductCost.Price);

     }else{
        localStorage.setItem('totalCost',ProductCost.Price);

     } 
 }



 function displaycart(){
     let cartitems = localStorage.getItem('productCart');
     cartitems = JSON.parse(cartitems);
        // console.log(cartitems);
     let productContainer = document.querySelector('.products');
     let price = localStorage.getItem('totalCost');


     if( cartitems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartitems).map(item =>{
            productContainer.innerHTML += `
           <div class="final"  id="remove">
                <div class="img">
                    <img src="${item.name}.jpg">
                    <span class="detail1">${item.name}</span>
                    <button type="button" onclick="remove()" class="btn btn-danger">Remove</button>
                </div>
                <div class="Price">${item.Price}</div>
                <div class="Quantity">${item.incart}</div>
                <div class="Total">${item.incart * item.Price}</div>
            </div>
            `
        });
        productContainer.innerHTML +=`
            <div class="bill">
            <h4>Bascet Total</h4>
            <h4>${price}</h4>
            
        `
     }
 }
 displaycart()
 loadedcart()


function remove(){
 let remove = document.getElementById("remove").remove($);

}


