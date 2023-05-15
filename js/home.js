(async () => {
  const res = await fetch(
    `https://data-nail-hl-default-rtdb.firebaseio.com/home/0.json`
  );
  const product = await res.json();

  const banner = document.querySelector(".banner");

  if (product) {
    banner.innerHTML += `
        <img src="${product.banner}" alt="" width="100%">
        `;
  }
})();

(async () => {
  const res = await fetch(
    `https://data-nail-hl-default-rtdb.firebaseio.com/services.json`
  );

  const product = await res.json();


 
  const services = document.querySelector("#services");
  
  if (product) {


    for (const [key, value] of Object.entries(product)) {
      services.innerHTML += `
      <div class="product-item col-6 col-md-3">
      <div class="product-mini">
          <a href="./detail-services.html?id=${key}">
              <div class="img-product">
                  <img src="${value.img1}" alt="" width="100%">
              </div>
          </a>
        
          <div class="name-product">
              <h2>${value.name}</h2>
          </div>
          <div class="price-product">
              <h2>$${value.price} USD</h2>
          </div>
          <div class="btn-add-cart">
              <a href="https://www.fresha.com/fr/a/hl-beauty-ottawa-50-westwood-drive-htz1l02f/booking?menu=true" target="_blank" >BOOKING</a>
          </div>

      </div>
      
  </div>   
      `;
    }

   
    
  }
})();

(async () => {
  const res = await fetch(
    `https://data-nail-hl-default-rtdb.firebaseio.com/productfornail.json`
  );

  const product = await res.json();

  const services = document.querySelector("#products-for-nail");

  if (product) {
    for (const [key, value] of Object.entries(product)) {
      services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-product-fornail.html?id=${key}">
                    <div class="img-product">
                        <img src="${value.img1}" alt="" width="100%">
                    </div>
                </a>
              
                
                <div class="name-product">
                    <h2>${value.name}</h2>
                </div>
                <div class="price-product">
                    <h2>$${value.price} USD</h2>
                </div>
                <div class="btn-add-cart">
                    <a  href="./detail-product-fornail.html?id=${key}" >VIEWS DETAILS</a>
                </div>

            </div>
            
        </div>   
            `;
    }
  
  }
})();
