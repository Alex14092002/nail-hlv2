const deleteCart = (id) =>{


    let cart = JSON.parse(localStorage.getItem('cart'));
   
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            cart.splice(i, 1);
        };
    }
    localStorage.setItem("cart",JSON.stringify(cart));
   
    setTimeout(function(){
        window.location.reload();  
    } ,100)

}

var cart = JSON.parse(localStorage.getItem("cart"));
const test = document.querySelector('.test-btn')


// test.addEventListener('click', () =>{
//     cart[0].soluong ++;
//     localStorage.setItem('cart', JSON.stringify(cart));
// })

const formCustomer = document.querySelector('.info-customer')
var sum = 0;

if(cart != null && cart.length >0){
    
    cart.map((value,key) =>{
        document.querySelector("#cart-main").innerHTML += `
    <div class="cart-main row">
    <div class="item-cart-main col-3">
        <img src="${value.img1}" alt=""  >
    </div>
    <div class="item-cart-main col-4">
        <h3>${value.name}</h3>

        <div class="btn-amout">
            <button   class='btnAdd'>+</button>
            <input readonly class="inputAmount" type="number"   value = 1 />
            <button  class='btnMinus'> -</button>
        </div>

    </div>
    <div class="item-cart-main col-3">
        <h2>${value.price} CAD</h2>
    </div>   
    <div class="item-cart-main col-2">
        <button onclick="deleteCart(${value.id})"><i class="fa fa-times" aria-hidden="true"></i>
        </button>
    </div>          
</div>

    `;
    sum += value.price;
   
    })   

    formCustomer.innerHTML += `
      <div class="row layout-form">
            <div class="input-item col-12 col-md-6">
                <label for="">First Name</label> 
                <input type="text" name="" id="firstName" placeholder="Enter First Name" value="">
            </div>
            <div class="input-item col-12 col-md-6">
                <label for="">Last Name</label> 
                <input type="text" name="" id="lastName" placeholder="Enter Last Name">
            </div>
            <div class="input-item col-12 col-md-6">
                <label for="">Company Name</label> 
                <input type="text" name="" id="companyName" placeholder="Enter Company Name">
            </div>
            <div class="input-item col-12 col-md-6">
                <label for="">Address 1</label> 
                <input type="text" name="" id="address1" placeholder="Enter Address 1">
            </div>
            <div class="input-item col-12 col-md-6">
                <label for="">Address 2</label> 
                <input type="text" name="" id="address2" placeholder="Enter Address 2">
            </div>
            <div class="input-item col-12 col-md-6">
                <label for="">City</label> 
                <input type="text" name="" id="city" placeholder="Enter City">
            </div>
            <div class="input-item col-12 col-md-6">
                <label for="">Postal code </label> 
                <input type="text" name="" id="postalCode" placeholder="Enter Postal Code">
            </div>
            <div class="input-item col-12 col-md-6">
                <label for="">State </label> 
                <input type="text" name="" id="state" placeholder="Enter State">
            </div>
            <div class="input-item col-12 col-md-6">
                <label for="">Country/Region </label> 
                <input type="text" name="" id="country" placeholder="Enter Country/Region">
            </div>
            <div class="input-item col-12 col-md-6">
                <label for="">Phone Number </label> 
                <input type="number" name="" id="phoneNumber" placeholder="Enter Phone Number" >
            </div>
        </div>
        <div class="btn-pushData">
            <button id="btn-push">Order Now</button>
        </div>
    `
    if(sum >= 175){
        document.querySelector("#cart-main").innerHTML += `
       
        <div class="sumPrice"> 
        <h1>
        Total amount : <strong> ${sum} CAD</strong>
    </h1>
            <h1>Free Ship</h1>
          

        </div>
    `
    } else{
        document.querySelector("#cart-main").innerHTML += `
        
        


        <div class="sumPrice"> 

            <h1>
                Total amount : <strong class="sumProduct"> ${sum} CAD</strong>
            </h1>
            <h1>Ship 20$</h1>
        </div>
    `
    }
    
   

} else{
    document.querySelector("#cart-main").innerHTML += `
        <div class="no-cart">
            <h1>There are no products in the cart. Please purchase !</h1>
        </div>  
    `
}






////control amount 
var input = document.querySelectorAll(".inputAmount");
var btnAdd = document.querySelectorAll(".btnAdd");
var btnMinus = document.querySelectorAll(".btnMinus");
var numberProduct = document.querySelector('.sumPrice h1 strong')

for (let i = 0; i < input.length; i++) {

  let valueAmount = parseInt(input[i].value, 10);

    

  btnAdd[i].addEventListener("click", () => {
    valueAmount = isNaN(valueAmount) ? 0 : valueAmount;

    valueAmount++;

    input[i].value = valueAmount;

    sum = 0;
    for (let j = 0; j < cart.length; j++) {
        
      const itemPrice = parseInt(input[j].value) * cart[j].price;
      sum += itemPrice;
   
    }   
    
    
    document.querySelector('.sumPrice h1 strong').innerHTML = ` ${sum} CAD`;
  });

  btnMinus[i].addEventListener("click", () => {
    valueAmount = isNaN(valueAmount) ? 0 : valueAmount;
    valueAmount < 1 ? (valueAmount = 1) : "";
    valueAmount--;
    input[i].value = valueAmount;
    sum = 0;
    for (let j = 0; j < cart.length; j++) {
      const itemPrice = parseInt(input[j].value) * cart[j].price;
      sum += itemPrice;
    }
    console.log(sum);
    document.querySelector('.sumPrice h1 strong').innerHTML = ` ${sum} CAD`;
  });
 
}






let customerCount = 0;
const btnPush = document.querySelector('#btn-push')
btnPush.addEventListener('click', () => {
  // Lấy thông tin khách hàng
  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const companyName = document.querySelector('#companyName').value;
  const address1 = document.querySelector('#address1').value;
  const address2 = document.querySelector('#address2').value;
  const city = document.querySelector('#city').value;
  const postalCode = document.querySelector('#postalCode').value;
  const state = document.querySelector('#state').value;
  const country = document.querySelector('#country').value;
  const phoneNumber = document.querySelector('#phoneNumber').value;

  const cartItems = JSON.parse(localStorage.getItem('cart'));

  // Tạo ID duy nhất cho khách hàng
  const customerId = customerCount++;

  const customerCart = {
    firstName: firstName,
    lastName: lastName,
    companyName: companyName,
    address1: address1,
    address2: address2,
    city: city,
    postalCode: postalCode,
    state: state,
    country: country,
    phoneNumber: phoneNumber,
    cartItems: cartItems,
  };

  // PUT dữ liệu khách hàng lên realtime database
  fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/customer/${customerId}.json`, {
    method: 'PUT',
    body: JSON.stringify(customerCart),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});











  




