
(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/single.json`)

    const product = await res.json()

    const services = document.querySelector('#services')
    console.log(services);

    if(product){
        for (const [key, value] of Object.entries(product)) {
            services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-single.html?id=${key}">
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
                    <a href="./detail-single.html?id=${key}">VIEWS DETAIL</a>
                </div>

            </div>
            
        </div>   
            `
        }
       
    }

    


})();