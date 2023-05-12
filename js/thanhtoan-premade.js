(async () =>{
    let params = new URLSearchParams(location.search);
    let id_item = params.get('id')
    
    const thanhtoan = document.querySelector('#thanhtoan')

    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade/${id_item}.json`)
    const product = await res.json()

    if(product){
        thanhtoan.innerHTML += `
        <div class="rows">
        <div class="col-75">
          <div class="containers">
            <form action="">
            
              <div class="row">
                <div class="col-50">
                  <h3>Billing Address</h3>
                  <div class="row">
                    <div class="col-50">
                      <label for="First Name"><i class="fa fa-user"></i>First Name</label>
                      <input type="text" id="FirstName" name="First Name" placeholder="Enter First Name">
                    </div>
                    <div class="col-50">
                      <label for="Last Name"><i class="fa fa-user"></i>Last Name</label>
                      <input type="text" id="LastName" name="Last Name" placeholder="Enter Last Name">
                    </div>
                  </div>
                  <label for="email"><i class="fa fa-envelope"></i> Email (optional)</label>
                  <input type="text" id="email" name="email" placeholder="Enter Your Email (optional)">
                  <label for="company"><i class="fa fa-address-card-o"></i> Company Name</label>
                  <input type="text" id="company" name="address" placeholder="Enter Your Company">
                  <label for="adr1"><i class="fa fa-address-card-o"></i> Address1 </label>
                  <input type="text" id="adr1" name="address" placeholder="Enter Your Address1">
                  <label for="adr1"><i class="fa fa-address-card-o"></i> Address2 </label>
                  <input type="text" id="adr1" name="address" placeholder="Enter Your Address2">
                  <label for="city"><i class="fa fa-institution"></i> City</label>
                  <input type="text" id="city" name="city" placeholder="Enter Your City">
      
                  <div class="row">
                    <div class="col-50">
                      <label for="postal">Postal code</label>
                      <input type="text" id="postal" name="state" placeholder="Enter Your Postal Code">
                    </div>
                    <div class="col-50">
                      <label for="state">State</label>
                      <input type="text" id="state" name="zip" placeholder="Enter Your Postal Code">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-50">
                      <label for="country">Country</label>
                      <input type="text" id="country" name="state" placeholder="Enter Your Country">
                    </div>
                    <div class="col-50">
                      <label for="phone">Phone</label>
                      <input type="text" id="phone" name="zip" placeholder="Enter Your Phone Number">
                    </div>
                  </div>
                </div>
      
                
                
              </div>
              <label>
                <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing
              </label>
              <input type="submit" value="Order Now" class="btn">
            </form>
          </div>
        </div>
        <div class="col-25">
          <div class="containers">
            <h4>Cart <span class="price" style="color:black"><i class="fa fa-shopping-cart"></i> <b>1</b></span></h4>
            <p>${product.name} <span class="price">$${product.price}</span></p>
            
            <hr>
            <p>Total <span class="price" style="color:black"><b>$${product.price}</b></span></p>
          </div>
        </div>
      </div>
        `
    }






    
})()