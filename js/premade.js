
(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()
    const arr = Object.entries(product).map(([key, value]) => ({ key, value }));
    
    

    const isFilter = []
    
    
    for(let i = 0 ; i < arr.length ; i++)
    {
        if( arr[i].value.type === "3D"){
            isFilter.push(arr[i])
        }
       
       
    }

  
  
    
    const services = document.querySelector('#pre3d')
    

    if(isFilter){
                isFilter.map((value) => {
                    if(value != null){
                        services.innerHTML += `
                    <div class="product-item col-6 col-md-3">
                    <div class="product-mini">
                        <a href="./detail-premade.html?id=${value.value.id}">
                            <div class="img-product">
                                <img src="${value.value.img1}" alt="${value.value.name}" width="100%">
                            </div>
                        </a>
                      
                        
                        <div class="name-product">
                            <h2>${value.value.name}</h2>
                        </div>
                        <div class="price-product">
                            <h2>$${value.value.price} USD</h2>
                        </div>
        
                        <div class="btn-add-cart">
                            <button>ADD TO BAG</button>
                        </div>
        
                    </div>
                    
                </div>   
                    `
                    }
                })
         
           
                
            
            }
     
      
    

    


})();

(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()
    const arr = Object.entries(product).map(([key, value]) => ({ key, value }));
    
    const isFilter = []
    
    
    for(let i = 0 ; i < arr.length ; i++)
    {
        if( arr[i].value.type === "4D"){
            isFilter.push(arr[i])
        }
       
       
    }
   

    const services = document.querySelector('#pre4d')
    

    if(isFilter){
        isFilter.map((value) => {
            if(value != null){
                services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.value.id}">
                    <div class="img-product">
                        <img src="${value.value.img1}" alt="${value.value.name}" width="100%">
                    </div>
                </a>
              
                
                <div class="name-product">
                    <h2>${value.value.name}</h2>
                </div>
                <div class="price-product">
                    <h2>$${value.value.price} USD</h2>
                </div>

                <div class="btn-add-cart">
                    <button>ADD TO BAG</button>
                </div>

            </div>
            
        </div>   
            `
            }
        })
 
   
        
    
    }
    


})();


(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()
    const arr = Object.entries(product).map(([key, value]) => ({ key, value }));
    

    const isFilter = []
    
    
    for(let i = 0 ; i < arr.length ; i++)
    {
        if( arr[i].value.type === "5D"){
            isFilter.push(arr[i])
        }
       
       
    }

  

    const services = document.querySelector('#pre5d')
    

    if(isFilter){
        isFilter.map((value) => {
            if(value != null){
                services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.value.id}">
                    <div class="img-product">
                        <img src="${value.value.img1}" alt="${value.value.name}" width="100%">
                    </div>
                </a>
              
                
                <div class="name-product">
                    <h2>${value.value.name}</h2>
                </div>
                <div class="price-product">
                    <h2>$${value.value.price} USD</h2>
                </div>

                <div class="btn-add-cart">
                    <button>ADD TO BAG</button>
                </div>

            </div>
            
        </div>   
            `
            }
        })
 
   
        
    
    }


})();

(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()
    const arr = Object.entries(product).map(([key, value]) => ({ key, value }));
    

    const isFilter = []
    
    
    for(let i = 0 ; i < arr.length ; i++)
    {
        if( arr[i].value.type === "6D"){
            isFilter.push(arr[i])
        }
       
       
    }

   

    const services = document.querySelector('#pre6d')
    

    if(isFilter){
        isFilter.map((value) => {
            if(value != null){
                services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.value.id}">
                    <div class="img-product">
                        <img src="${value.value.img1}" alt="${value.value.name}" width="100%">
                    </div>
                </a>
              
                
                <div class="name-product">
                    <h2>${value.value.name}</h2>
                </div>
                <div class="price-product">
                    <h2>$${value.value.price} USD</h2>
                </div>

                <div class="btn-add-cart">
                    <button>ADD TO BAG</button>
                </div>

            </div>
            
        </div>   
            `
            }
        })
 
   
        
    
    }
    


})();
(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()
    const arr = Object.entries(product).map(([key, value]) => ({ key, value }));
    

    const isFilter = []
    
    
    for(let i = 0 ; i < arr.length ; i++)
    {
        if( arr[i].value.type === "7D"){
            isFilter.push(arr[i])
        }
       
       
    }

    

    const services = document.querySelector('#pre7d')
    

    if(isFilter){
        isFilter.map((value) => {
            if(value != null){
                services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.value.id}">
                    <div class="img-product">
                        <img src="${value.value.img1}" alt="${value.value.name}" width="100%">
                    </div>
                </a>
              
                
                <div class="name-product">
                    <h2>${value.value.name}</h2>
                </div>
                <div class="price-product">
                    <h2>$${value.value.price} USD</h2>
                </div>

                <div class="btn-add-cart">
                    <button>ADD TO BAG</button>
                </div>

            </div>
            
        </div>   
            `
            }
        })
 
   
        
    
    }

    


})();
(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()
    const arr = Object.entries(product).map(([key, value]) => ({ key, value }));
    

    const isFilter = []
    
    
    for(let i = 0 ; i < arr.length ; i++)
    {
        if( arr[i].value.type === "8D"){
            isFilter.push(arr[i])
        }
       
       
    }

   

    const services = document.querySelector('#pre8d')
    

    if(isFilter){
        isFilter.map((value) => {
            if(value != null){
                services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.value.id}">
                    <div class="img-product">
                        <img src="${value.value.img1}" alt="${value.value.name}" width="100%">
                    </div>
                </a>
              
                
                <div class="name-product">
                    <h2>${value.value.name}</h2>
                </div>
                <div class="price-product">
                    <h2>$${value.value.price} USD</h2>
                </div>

                <div class="btn-add-cart">
                    <button>ADD TO BAG</button>
                </div>

            </div>
            
        </div>   
            `
            }
        })
 
   
        
    
    }
    


})();
(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()
    const arr = Object.entries(product).map(([key, value]) => ({ key, value }));
    

    const isFilter = []
    
    
    for(let i = 0 ; i < arr.length ; i++)
    {
        if( arr[i].value.type === "9D"){
            isFilter.push(arr[i])
        }
       
       
    }

    

    const services = document.querySelector('#pre9d')
    

    if(isFilter){
        isFilter.map((value) => {
            if(value != null){
                services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.value.id}">
                    <div class="img-product">
                        <img src="${value.value.img1}" alt="${value.value.name}" width="100%">
                    </div>
                </a>
              
                
                <div class="name-product">
                    <h2>${value.value.name}</h2>
                </div>
                <div class="price-product">
                    <h2>$${value.value.price} USD</h2>
                </div>

                <div class="btn-add-cart">
                    <button>ADD TO BAG</button>
                </div>

            </div>
            
        </div>   
            `
            }
        })
 
   
        
    
    }

    


})();
(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()
    const arr = Object.entries(product).map(([key, value]) => ({ key, value }));
    

    const isFilter = []
    
    
    for(let i = 0 ; i < arr.length ; i++)
    {
        if( arr[i].value.type === "10D"){
            isFilter.push(arr[i])
        }
       
       
    }

   

    const services = document.querySelector('#pre10d')
    

    if(isFilter){
        isFilter.map((value) => {
            if(value != null){
                services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.value.id}">
                    <div class="img-product">
                        <img src="${value.value.img1}" alt="${value.value.name}" width="100%">
                    </div>
                </a>
              
                
                <div class="name-product">
                    <h2>${value.value.name}</h2>
                </div>
                <div class="price-product">
                    <h2>$${value.value.price} USD</h2>
                </div>

                <div class="btn-add-cart">
                    <button>ADD TO BAG</button>
                </div>

            </div>
            
        </div>   
            `
            }
        })
 
   
        
    
    }

    


})();
(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()
    const arr = Object.entries(product).map(([key, value]) => ({ key, value }));
    

    const isFilter = []
    
    
    for(let i = 0 ; i < arr.length ; i++)
    {
        if( arr[i].value.type === "11D"){
            isFilter.push(arr[i])
        }
       
       
    }



    const services = document.querySelector('#pre11d')
    

    if(isFilter){
        isFilter.map((value) => {
            if(value != null){
                services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.value.id}">
                    <div class="img-product">
                        <img src="${value.value.img1}" alt="${value.value.name}" width="100%">
                    </div>
                </a>
              
                
                <div class="name-product">
                    <h2>${value.value.name}</h2>
                </div>
                <div class="price-product">
                    <h2>$${value.value.price} USD</h2>
                </div>

                <div class="btn-add-cart">
                    <button>ADD TO BAG</button>
                </div>

            </div>
            
        </div>   
            `
            }
        })
 
   
        
    
    }
    


})();
(async () =>{
    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/premade.json`)

    const product = await res.json()
    const arr = Object.entries(product).map(([key, value]) => ({ key, value }));
    

    const isFilter = []
    
    
    for(let i = 0 ; i < arr.length ; i++)
    {
        if( arr[i].value.type === "12D"){
            isFilter.push(arr[i])
        }
       
       
    }

    

    const services = document.querySelector('#pre12d')
    

    if(isFilter){
        isFilter.map((value) => {
            if(value != null){
                services.innerHTML += `
            <div class="product-item col-6 col-md-3">
            <div class="product-mini">
                <a href="./detail-premade.html?id=${value.value.id}">
                    <div class="img-product">
                        <img src="${value.value.img1}" alt="${value.value.name}" width="100%">
                    </div>
                </a>
              
                
                <div class="name-product">
                    <h2>${value.value.name}</h2>
                </div>
                <div class="price-product">
                    <h2>$${value.value.price} USD</h2>
                </div>

                <div class="btn-add-cart">
                    <button>ADD TO BAG</button>
                </div>

            </div>
            
        </div>   
            `
            }
        })
 
   
        
    
    }

    


})();
