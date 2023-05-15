(async () => {
  let params = new URLSearchParams(location.search);
  let id_item = params.get("id");

  const res = await fetch(
    `https://data-nail-hl-default-rtdb.firebaseio.com/single/${id_item}.json`
  );
  const product = await res.json();

  const detail = document.querySelector("#detail");

  if (product) {
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

              <label for="length" id="labelLenght">Length :</label>
              <div class="select">
              <select id="length">

              </select>
              </div>
            
              </div>
              <div class="more-item col-6">
              <label for="diameter" id="labelLenght">Diameter :</label>
              <div class="select">
              <select id="diameter">

              </select>
              </div>
              </div>
              <div class="more-item col-6">
              <label for="curlType" id="labelLenght">curlType :</label>
              <div class="select">
              <select id="curlType">

              </select>
              </div>
              </div>
              <div class="more-item col-6">
              <label>Quantity:</label>

              <div class="quantity">
              <div class="btn-quantity">
              <button id="tru">-</button>
              </div>

              <div class="valQuantity">

              
              <input type="text" value=1 id="valquantity" />
              </div>

              

              <div class="btn-quantity">
              <button id="cong">+</button>
              </div>

              </div>
              </div>
            </div>
            
            <button class="addtoCart"  >ADD TO BAG</button>
        </div>
    
    </div>
    <button class="test">tết</button>
        `;

   

    const length = document.querySelector("#length");
    const diameter = document.querySelector("#diameter");
    const curlType = document.querySelector("#curlType");
    const valquantity = document.querySelector("#valquantity");

    const addtoCart = document.querySelector(".addtoCart");
    addtoCart.addEventListener("click", () => {
      giohang(
        product.id,
        product.name,
        product.price,
        product.img1,
        valquantity.value,
        length.value,
        diameter.value,
        curlType.value
      );
    });

    const lengthData = product.length;
    for (let i = 0; i < lengthData.length; i++) {
      length.innerHTML += `
   <option value="${lengthData[i]}">${lengthData[i]} MM</option>
      `;
    }

    const diameterData = product.diameter;
    for (let i = 0; i < diameterData.length; i++) {
      diameter.innerHTML += `
   <option value="${diameterData[i]}">${diameterData[i]}</option>
      `;
    }

    const curlTypeData = product.curlType;
    for (let i = 0; i < curlTypeData.length; i++) {
      curlType.innerHTML += `
   <option value="${curlTypeData[i]}">${curlTypeData[i]} </option>
      `;
    }
  }
   // Lấy tham chiếu đến các phần tử cần thiết
   const btnQuantityDecrease = document.querySelector(
    "#tru"
  );
 
  const btnQuantityIncrease = document.querySelector(
    "#cong"
  );
  const valQuantity = document.querySelector("#valquantity");

  console.log(btnQuantityDecrease , btnQuantityIncrease);
  // Thiết lập sự kiện click cho nút tăng
  btnQuantityIncrease.addEventListener("click", () => {
    // Tăng giá trị số lượng
    valQuantity.value = parseInt(valQuantity.value) + 1;
  });

  // Thiết lập sự kiện click cho nút giảm
  btnQuantityDecrease.addEventListener("click", () => {
    // Giảm giá trị số lượng không nhỏ hơn 1
    if (parseInt(valQuantity.value) > 1) {
      valQuantity.value = parseInt(valQuantity.value) - 1;
    }
  });

  let listDivImg = document.querySelectorAll(".list-img div");

  let next = document.querySelector(".next");
  let prev = document.querySelector(".prev");
  let imgWrap = document.querySelector(".img-wrap img");

  let currentIndex = 0;

  setCurrent(currentIndex);

  function setCurrent(index) {
    currentIndex = index;
    imgWrap.src = listDivImg[currentIndex].querySelector("img").src;

    // remove all active img
    listDivImg.forEach((item) => {
      item.classList.remove("active");
    });

    // set active
    listDivImg[currentIndex].classList.add("active");
  }

  listDivImg.forEach((img, index) => {
    img.addEventListener("click", (e) => {
      setCurrent(index);
    });
  });

  next.addEventListener("click", () => {
    if (currentIndex == listDivImg.length - 1) {
      currentIndex = 0;
    } else currentIndex++;

    setCurrent(currentIndex);
  });

  prev.addEventListener("click", () => {
    if (currentIndex == 0) currentIndex = listDivImg.length - 1;
    else currentIndex--;

    setCurrent(currentIndex);
  });
})();
