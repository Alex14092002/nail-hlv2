// var cart = JSON.parse(localStorage.getItem("cart")) || [];




// function giohang(id, ten, gia, hinh){
//   var cart = JSON.parse(localStorage.getItem("cart"));
//   if (cart==null) {
//     cart=[];
//       console.log("Thêm vào giỏ hàng thành công!");
//       cart.push({
//         id:id,
//         name:ten,
//         price:gia,
//         img1:hinh
//         });
//   }else{
//       var item = cart.find(item => item.id === id );
      
//       if(item) { 
//           console.log("Sản phẩm đã có trong giỏ hàng!");
         
         
//       }
//       else {
//           console.log("Thêm vào giỏ hàng thành công!");
         
//           cart.push({
            
//             id:id,
//             name:ten, 
//             price:gia,
//             img1:hinh
//             })
//       };
//   }
//       var cartLength = cart.length;
//       document.querySelector('.booking span').textContent = cartLength;

// }

var cart = JSON.parse(localStorage.getItem("cart")) || [];
 // khởi tạo 1 cái item tên cart trong localstorarge với kiểu là mảng rỗng

function giohang(id, ten, gia, hinh){
  var found = false; // biến để tìm kiếm
  
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      found = true;
      break;
    }
  }
  
  if (!found) {
    console.log("Thêm vào giỏ hàng thành công!");
    cart.push({
      id:id,
      name:ten,
      price:gia,
      img1:hinh,
      soluong: 1
    });
    
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    console.log("Sản phẩm đã có trong giỏ hàng!");
  }
  
  var cartLength = cart.length;
  document.querySelector('.booking span').textContent = cartLength;
}
const header = document.querySelector('#header')






header.innerHTML += `
<nav>
<div class="navbar">
  <i class='bx bx-menu'></i>
  <div class="logo"><a href="index.html"><img src="./image/logov3.jpg" alt="" width="60px"></a></div>
  <div class="nav-links">
    <div class="sidebar-logo">
      <span class="logo-name"><img src="./image/logov3.jpg" alt="" width="60px"></span>
      <i class='bx bx-x' ></i>
    </div>
    <ul class="links">
      <li><a href="index.html">HOME</a></li>
      <li><a href="services.html">SERVICES</a></li>
      <li><a href="product-for-nail.html">PRODUCT FOR NAIL</a></li>
      <li>
        <a href="#">PRODUCT FOR LASH</a>
        <i class='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
        <ul class="htmlCss-sub-menu sub-menu">
            <li><a href="./single.html">SINGLE - LENGTH TRAY</a></li>
            <li><a href="./pre-made-fan.html">PRE-MADE FANS</a></li>
            
        </ul>
      </li>
    
  
      <li><a href="about.html">ABOUT US</a></li>
    </ul>
  </div>
  <div class="booking">
  <a href="./cart.html">
  <i class='bx bxs-shopping-bag' ></i>
  <span>${cart.length}</span>
  </a>
 
  </div>
</div>
</nav>

`










