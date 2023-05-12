


  (async () => {
    let params = new URLSearchParams(location.search);
    let id_item = params.get('id')



    const res = await fetch(`https://data-nail-hl-default-rtdb.firebaseio.com/single/${id_item}.json`)
    const product = await res.json()

    const detail = document.querySelector('#detail')

    if(product){
        detail.innerHTML += `
        <div class="main-detail row " >
        <div class="item-detail col-12 col-md-6" id="slider-product">
            <div class="main">
                <span class="control prev">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </span>
                <span class="control next" id="next">
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
                <div class="img-wrap">
                  <img src="${product.img1}" alt="" />
                </div>
              </div>
              <div class="list-img">
                <div>
                  <img src="${product.img1}" alt="" />
                </div>
                <div>
                  <img src="${product.img2}" alt="" />
                </div>
                <div>
                  <img src="${product.img3}" alt="" />
                </div>
                <div>
                  <img src="${product.img4}" alt="" />
                </div>
                <div>
                  <img src="${product.img5}" alt="" />
                </div>
                
              </div>
        </div>
        <div class="item-detail col-12 col-md-6" id="content-product">
            <h1>${product.name}</h1>
            <p>${product.describe}</p>
            <h3>$${product.price} USD</h3>
            <div class="more-info row">
              <div class="more-item col-6">
              <h5>Length : ${product.length}</h5>
              </div>
              <div class="more-item col-6">
              <h5>Diameter : ${product.diameter}</h5>
              </div>
              <div class="more-item col-6">
              <h5>Curltype : ${product.curlType}</h5>
              </div>
              <div class="more-item col-6">
              <h5>Quanity : ${product.quanity}</h5>
              </div>
            </div>
            
            <a href="./thanhtoan-single.html?id=${id_item}" >BUY NOW</a>
        </div>
    
    </div>
        `
    }
  
    let listDivImg =  document.querySelectorAll('.list-img div')
   
    let next = document.querySelector('.next')
    let prev = document.querySelector('.prev')
    let imgWrap = document.querySelector('.img-wrap img')
    
    
  
    let currentIndex = 0
    
    setCurrent(currentIndex)
    
    function setCurrent(index) {
      currentIndex = index
      imgWrap.src = listDivImg[currentIndex].querySelector('img').src
    
      // remove all active img
      listDivImg.forEach((item) => {
        item.classList.remove('active')
      })
    
      // set active
      listDivImg[currentIndex].classList.add('active')
    }
    
    listDivImg.forEach((img, index) => {
      img.addEventListener('click', (e) => {
        setCurrent(index)
      })
    })
    
    next.addEventListener('click', () => {
      if (currentIndex == listDivImg.length - 1) {
        currentIndex = 0
      } else currentIndex++
    
      setCurrent(currentIndex)
    })
    
    prev.addEventListener('click', () => {
      if (currentIndex == 0) currentIndex = listDivImg.length - 1
      else currentIndex--
    
      setCurrent(currentIndex)
    })
    

    


})();










