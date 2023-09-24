document.addEventListener("DOMContentLoaded", function() {
    var userAvatar = document.querySelector(".user-avatar");
    var userMenu = document.querySelector(".user-menu");
  
    userAvatar.addEventListener("click", function(event) {
      event.stopPropagation();
      userAvatar.classList.toggle("active");
      userMenu.style.display = userAvatar.classList.contains("active") ? "block" : "none";
    });
  
    document.addEventListener("click", function(event) {
      if (!userAvatar.contains(event.target)) {
        userAvatar.classList.remove("active");
        userMenu.style.display = "none";
      }
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".slideshow img");
    var index = 0;
  
    function changeImage() {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }
  
    setInterval(changeImage, 5000); // Thay đổi ảnh sau mỗi 3 giây (3000ms)
  });

  