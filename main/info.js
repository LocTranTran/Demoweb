function showInfo(cardNumber) {
    var infoDiv = document.getElementById("info");
    
    if (cardNumber === 1) {
        console.log("hello");
      infoDiv.innerHTML = "<div class='info-card'><h1>Thông tin của card 1</h1></div>";
    } else if (cardNumber === 2) {
      infoDiv.innerHTML = "<div class='info-card'>Thông tin của card 2</div>";
    } else if (cardNumber === 3) {
      infoDiv.innerHTML = "<div class='info-card'>Thông tin của card 3</div>";
    } else if (cardNumber === 4) {
      infoDiv.innerHTML = "<div class='info-card'>Thông tin của card 4</div>";
    } else if (cardNumber === 5) {
      infoDiv.innerHTML = "<div class='info-card'>Thông tin của card 5</div>";
    }
  }
  function flipCard(card) {
    card.classList.toggle('flipped');
  }