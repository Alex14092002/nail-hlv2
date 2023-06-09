
  
const deleteCart = (id) => {


    let cart = JSON.parse(localStorage.getItem('cart'));

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            cart.splice(i, 1);
        };
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    setTimeout(function() {
        
        window.location.reload();

    }, 100)

}
var cart = JSON.parse(localStorage.getItem("cart"));

const formCustomer = document.querySelector('.info-customer')
var sum = 0;

if (cart != null && cart.length > 0) {

    cart.map((value, key) => {
        document.querySelector("#cart-main").innerHTML += `
    <div class="cart-main row">
    <div class="item-cart-main col-3 col-md-4">
        <img src="${value.img1}" alt="${value.name}"  >
    </div>
    <div class="item-cart-main col-4 col-md-3">
        <h3>${value.name}</h3>

      <div class="detailType">
        <div class="itemtype">
            <h5>Length : ${value.length}mm</h5>
            <h5>Diameter : ${value.diameter}</h5>
        </div>
        <div class="itemtype">
        <h5>curlType : ${value.curlType}</h5>
        <h5>Quantity : ${value.quantity}</h5>
        </div>
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
                <label for="state">State </label> 
                <select name="" id="state">
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Northwest Territories">Northwest Territories</option>
                <option value="Nunavut">Nunavut</option>
                <option value="Ontario">Ontario</option>
                <option value="Prince Edward Island">Prince Edward Island</option>
                <option value="Quebec">Quebec</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="Yukon">Yukon</option>
              </select>
            
            </div>
            <div class="input-item col-12 col-md-6">
                <label for="">Country/Region </label> 
                <input type="text" name="" id="country" value="Canada" readonly placeholder="Enter Country/Region">
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

    if (sum >= 175) {
        document.querySelector("#cart-main").innerHTML += `
       
        <div class="sumPrice"> 
        <h1>
        Total amount : <strong> ${sum} CAD</strong>
    </h1>
            <h1>Free Ship</h1>
          

        </div>
    `
    } else {
        document.querySelector("#cart-main").innerHTML += `
        
        


        <div class="sumPrice"> 

            <h1>
                Total amount : <strong class="sumProduct"> ${sum} CAD</strong>
            </h1>
            <h1>Ship 20$</h1>
        </div>
    `
    }



} else {
    document.querySelector("#cart-main").innerHTML += `
        <div class="no-cart">
            <h1>There are no products in the cart. Please purchase !</h1>
        </div>  
    `
}





const btnPush = document.querySelector('#btn-push');
btnPush.addEventListener('click',  () => {
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
const status = "Delivering"
  // Tạo đối tượng khách hàng
  const customer = {
    status : status,
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
    total: sum
  };

  // Gửi dữ liệu khách hàng đến máy chủ
  fetch('https://data-nail-hl-default-rtdb.firebaseio.com/customer.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customer),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Xử lý phản hồi từ máy chủ
      
      // Display success notification
      alert('Data has been successfully pushed.');

      // Clear shopping cart in local storage
      localStorage.removeItem('cart');


      // Clear input values
      document.querySelector('#firstName').value = '';
      document.querySelector('#lastName').value = '';
      document.querySelector('#companyName').value = '';
      document.querySelector('#address1').value = '';
      document.querySelector('#address2').value = '';
      document.querySelector('#city').value = '';
      document.querySelector('#postalCode').value = '';
      document.querySelector('#state').value = 'Alberta';
      document.querySelector('#phoneNumber').value = '';
    
       window.location.reload();
    })
    .catch((error) => {
      console.error(error); // Xử lý lỗi
    });
});

