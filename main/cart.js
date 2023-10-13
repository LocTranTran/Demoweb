var cartCount = 0;
var cartCountElement = document.querySelector(".cart-count");

function increaseQuantity() {
  cartCount++;
  cartCountElement.innerText = cartCount;

  var notification = document.getElementById("notification");
  notification.style.display = "block";
  notification.textContent = "Sản phẩm đã được thêm vào giỏ hàng.";

  setTimeout(function() {
    notification.style.display = "none";
  }, 1000);
}

function decreaseQuantity() {
  if (cartCount > 0) {
    cartCount--;
    cartCountElement.innerText = cartCount;
  }
  
  var cartItems = document.querySelectorAll('.cart-item');
  var emptyCartMessage = document.querySelector('.empty-cart-message');
  
  if (cartCount === 0) {
    emptyCartMessage.style.display = 'block';
    //an(); 
    // Ẩn danh sách sản phẩm trong giỏ hàng
  } else {
    emptyCartMessage.style.display = 'none';
    // Hiển thị danh sách sản phẩm trong giỏ hàng
  }
}


var cartContainer = document.getElementById('cartContainer');

function showCart() {
  cartContainer.classList.add('open');
}

function hideCart() {
  cartContainer.classList.remove('open');
}

function removeFromCart(event) {
  var productCard = event.target.closest('.home-product-item'); // Lấy phần tử cha (card sản phẩm) gần nhất của nút "Thêm Vào Giỏ Hàng" được nhấp vào
  productCard.remove();
  decreaseQuantity(); // Giảm số lượng sản phẩm trong giỏ hàng
  tinh(); // Cập nhật giỏ hàng sau khi xóa sản phẩm
}
function handleButtonClick(event) {
  event.stopPropagation();
  // Xử lý hành động khi nhấp vào nút trong card
}
function addToCart() {
  event.stopPropagation();
  var productCard = event.target.closest('.home-product-item');
  var homeproductitemimg = productCard.querySelector('.home-product-item__img img');
  var imageUrl = homeproductitemimg.src;
  var productName = productCard.querySelector('.home-product-item__name').innerText;
  var productitempriceold = productCard.querySelector('.home-product-item__price-old').innerText;
  var productitempricenew = productCard.querySelector('.home-product-item__price-new').innerText;
  var productitemsold = productCard.querySelector('.home-product-item__sold').innerText;
  var cartItem = document.createElement('div');
  cartItem.className = 'cart-item';
  cartItem.innerHTML = `
  <a class="home-product-item ">
  <div class="home-product-item__img">
  <img src=${imageUrl} alt="">
              <h4 class="home-product-item__name">${productName}</h4>
      <div class="home-product-item__price">
            <span class="home-product-item__price-old">${productitempriceold}</span>
            <span class="home-product-item__price-new">${productitempricenew}</span>
      </div>  
      <!-- thả tym ngôi sao -->
        <div class="home-product-item__action">
                <span class="home-product-item__like home-product-item__liked">
                  <!-- <i class="home-product-item__like-icon-no fa-regular fa-heart" style="color: #414244;"></i> -->
                  <i class="home-product-item__like-icon fa-solid fa-heart" style="color: #f00000;"></i>
                </span>     
                  <div class="home-product-item__rating">
                    <i class="fa-solid fa-star" style="color: #ffc800;"></i>
                    <i class="fa-solid fa-star" style="color: #ffc800;"></i>
                    <i class="fa-solid fa-star" style="color: #ffc800;"></i>
                    <i class="fa-solid fa-star" style="color: #ffc800;"></i>
                    <i class="fa-regular fa-star-half-stroke" style="color:#ffc800;"></i>
                  </div>
                  <span class="home-product-item__sold">${productitemsold}</span>
          </div>
          <div class="home-product-item__list-select"> 
            <button onclick="removeFromCart(event)" type="button" class="btn btn-danger" style="font-size: .6rem;">Xóa</button>
          </div> 
          
          <!-- nguồn gốc -->
          <div class="home-product-item__origin">
                <span class="home-product-item__brand" >Whoo</span>
                <span class="home-product-item__origin-name" > America</span>
          </div>
            <!-- ____yêu thích giảm giá -->
            <div class="home-product-item__favourite">
              <i class="fa-solid fa-check" style="color: #ffffff;"></i>
              Yêu Thích

            </div>
            <div class="home-product-item__sale-off">
                  <span class="home-product-item__sale-off-percent" >10%</span>
                  <span class="home-product-item__sale-off-label" >GIẢM</span>
            </div>
  </div>
</a>
  `;

  var cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.appendChild(cartItem);
  var emptyCartMessage = document.querySelector('.empty-cart-message');
  emptyCartMessage.style.display = 'none';
  tinh();
}

function tinh() {
  var cartItems = document.querySelectorAll('.cart-item');
  var total = 0;

  cartItems.forEach(function(cartItem) {
    var productitempricenewElement = cartItem.querySelector('.home-product-item__price-new');
    if (productitempricenewElement) {
        var productitempricenew = productitempricenewElement.innerText;
        var price = parseFloat(productitempricenew.replace('đ', ''));
        total += price;
    }
});


  var checkoutButton = document.querySelector('.checkout-button');
  checkoutButton.innerText = `Thanh toán (${cartCount} sản phẩm - ${total.toFixed(3)} Đ)`;

  // Thực hiện các hoạt động liên quan đến thanh toán
  // Ví dụ: hiển thị thông báo, chuyển hướng trang, v.v.
}
