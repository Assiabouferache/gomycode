// Wait for DOM to be loaded
document.addEventListener("DOMContentLoaded", () => {
  const totalPriceElement = document.querySelector(".total");
  const productCards = document.querySelectorAll(".card-body");

  // Helper function to update the total price
  function updateTotalPrice() {
    let total = 0;
    productCards.forEach((cardBody) => {
      // Skip if card is removed (display:none or removed)
      if (!document.body.contains(cardBody)) return;
      const unitPriceText = cardBody.querySelector(".unit-price").textContent;
      const unitPrice = parseFloat(unitPriceText.replace(" $", ""));
      const quantity = parseInt(
        cardBody.querySelector(".quantity").textContent
      );
      total += unitPrice * quantity;
    });
    totalPriceElement.textContent = total + " $";
  }

  productCards.forEach((cardBody) => {
    const plusBtn = cardBody.querySelector(".fa-plus-circle");
    const minusBtn = cardBody.querySelector(".fa-minus-circle");
    const quantityElem = cardBody.querySelector(".quantity");
    const deleteBtn = cardBody.querySelector(".fa-trash-alt");
    const likeBtn = cardBody.querySelector(".fa-heart");

    // Increase quantity
    plusBtn.addEventListener("click", () => {
      let qty = parseInt(quantityElem.textContent);
      qty++;
      quantityElem.textContent = qty;
      updateTotalPrice();
    });

    // Decrease quantity (not below 0)
    minusBtn.addEventListener("click", () => {
      let qty = parseInt(quantityElem.textContent);
      if (qty > 0) {
        qty--;
        quantityElem.textContent = qty;
        updateTotalPrice();
      }
    });

    // Delete item
    deleteBtn.addEventListener("click", () => {
      // Remove entire card-body container
      cardBody.remove();
      updateTotalPrice();
    });

    // Like toggle
    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("liked");
      if (likeBtn.classList.contains("liked")) {
        likeBtn.style.color = "red";
      } else {
        likeBtn.style.color = "black";
      }
    });
  });

  // Initialize total price
  updateTotalPrice();
});
