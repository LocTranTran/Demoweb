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
    an(); // Ẩn danh sách sản phẩm trong giỏ hàng
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
  var cartItem = event.target.closest('.cart-item');
  cartItem.remove();
  decreaseQuantity(); // Giảm số lượng sản phẩm trong giỏ hàng
  tinh(); // Cập nhật giỏ hàng sau khi xóa sản phẩm
}

function addToCart() {
  var productCard = event.target.closest('.product-card'); // Lấy phần tử cha (card sản phẩm) gần nhất của nút "Thêm Vào Giỏ Hàng" được nhấp vào
  var productName = productCard.querySelector('.product-card-title').innerText;
  var productDescription = productCard.querySelector('.product-card-description').innerText;
  var productPrice = productCard.querySelector('.product-card-price').innerText;
  var productimg = productCard.querySelector('.product-card-img img');
  var imageUrl = productimg.src;

  var cartItem = document.createElement('div');
  cartItem.className = 'cart-item';
  cartItem.innerHTML = `
    <div class="product-card">
      <div class="product-card-img">
        <img src=${imageUrl} alt="">
      </div>
      <div class="product-card-info">
        <p class="product-card-title">${productName}</p>
        <p class="product-card-description">${productDescription}</p>
      </div>
      <div class="product-card-footer">
        <span class="product-card-price">${productPrice}</span>
        <button onclick="removeFromCart(event)">Xóa</button>    
      </div>
    </div> 
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
    var priceElement = cartItem.querySelector('.product-card-price');
    var price = parseFloat(priceElement.innerText.replace('$', ''));
    total += price;
  });

  var checkoutButton = document.querySelector('.checkout-button');
  checkoutButton.innerText = `Thanh toán (${cartCount} sản phẩm - ${total.toFixed(2)}$)`;

  // Thực hiện các hoạt động liên quan đến thanh toán
  // Ví dụ: hiển thị thông báo, chuyển hướng trang, v.v.
}
