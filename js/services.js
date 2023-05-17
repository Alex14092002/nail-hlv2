
(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/services.json`)

    const product = await res.json()

    const services = document.querySelector('#services')
    console.log(services);

    if(product){
        
        for (const [key, value] of Object.entries(product)) {
            if(value != null){
                services.innerHTML += `
                <div class="product-item col-6 col-md-3">
                <div class="product-mini">
                    <a href="./detail-services.html?id=${key}">
                        <div class="img-product">
                            <img src="${value.img1}" alt="${value.img1}" width="100%">
                        </div>
                    </a>
                  
                    
                    <div class="name-product">
                        <h2>${value.name}</h2>
                    </div>
                    <div class="price-product">
                        <h2>$${value.price} USD</h2>
                    </div>
                    <div class="btn-add-cart">
                        <a href="https://www.fresha.com/fr/a/hl-beauty-ottawa-50-westwood-drive-htz1l02f/booking?menu=true" target="_blank">BOOKING</a>
                    </div>
    
                </div>
                
            </div>   
                `
            }
          
        }
       
    }

    


})();