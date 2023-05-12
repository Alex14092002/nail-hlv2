
(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()

    const isFilter = product.filter(t => t.type === '3D')

    console.log(isFilter);

    const services = document.querySelector('#pre3d')
    

    if(isFilter){
        for (const [key, value] of Object.entries(isFilter)) {
            services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.id}">
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
                    <a>BUY NOW</a>
                </div>

            </div>
            
        </div>   
            `
        }
      
    }

    


})();

(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()

    const isFilter = product.filter(t => t.type === '4D')

    console.log(isFilter);

    const services = document.querySelector('#pre4d')
    

    if(isFilter){
        for (const [key, value] of Object.entries(isFilter)) {
            services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.id}">
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
                    <a>BUY NOW</a>
                </div>

            </div>
            
        </div>   
            `
        }
      
    }

    


})();


(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()

    const isFilter = product.filter(t => t.type === '5D')

    console.log(isFilter);

    const services = document.querySelector('#pre5d')
    

    if(isFilter){
        for (const [key, value] of Object.entries(isFilter)) {
            services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.id}">
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
                    <a>BUY NOW</a>
                </div>

            </div>
            
        </div>   
            `
        }
      
    }

    


})();

(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()

    const isFilter = product.filter(t => t.type === '6D')

    console.log(isFilter);

    const services = document.querySelector('#pre6d')
    

    if(isFilter){
        for (const [key, value] of Object.entries(isFilter)) {
            services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.id}">
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
                    <a>BUY NOW</a>
                </div>

            </div>
            
        </div>   
            `
        }
      
    }

    


})();
(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()

    const isFilter = product.filter(t => t.type === '7D')

    console.log(isFilter);

    const services = document.querySelector('#pre7d')
    

    if(isFilter){
        for (const [key, value] of Object.entries(isFilter)) {
            services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.id}">
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
                    <a>BUY NOW</a>
                </div>

            </div>
            
        </div>   
            `
        }
      
    }

    


})();
(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()

    const isFilter = product.filter(t => t.type === '8D')

    console.log(isFilter);

    const services = document.querySelector('#pre8d')
    

    if(isFilter){
        for (const [key, value] of Object.entries(isFilter)) {
            services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.id}">
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
                    <a>BUY NOW</a>
                </div>

            </div>
            
        </div>   
            `
        }
      
    }
    


})();
(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()

    const isFilter = product.filter(t => t.type === '9D')

    console.log(isFilter);

    const services = document.querySelector('#pre9d')
    

    if(isFilter){
        for (const [key, value] of Object.entries(isFilter)) {
            services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.id}">
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
                    <a>BUY NOW</a>
                </div>

            </div>
            
        </div>   
            `
        }
      
    }

    


})();
(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()

    const isFilter = product.filter(t => t.type === '10D')

    console.log(isFilter);

    const services = document.querySelector('#pre10d')
    

    if(isFilter){
        for (const [key, value] of Object.entries(isFilter)) {
            services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.id}">
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
                    <a>BUY NOW</a>
                </div>

            </div>
            
        </div>   
            `
        }
      
    }

    


})();
(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()

    const isFilter = product.filter(t => t.type === '11D')

    console.log(isFilter);

    const services = document.querySelector('#pre11d')
    

    if(isFilter){
        for (const [key, value] of Object.entries(isFilter)) {
            services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.id}">
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
                    <a>BUY NOW</a>
                </div>

            </div>
            
        </div>   
            `
        }
      
    }

    


})();
(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()

    const isFilter = product.filter(t => t.type === '12D')

    console.log(isFilter);

    const services = document.querySelector('#pre12d')
    

    if(isFilter){
        for (const [key, value] of Object.entries(isFilter)) {
            services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.id}">
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
                    <a>BUY NOW</a>
                </div>

            </div>
            
        </div>   
            `
        }
      
    }

    


})();
