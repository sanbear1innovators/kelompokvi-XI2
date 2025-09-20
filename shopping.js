function addToCart(productName, price) {
    alert(`${productName} has been added to your cart for $${price}!`);
  }
  
  function rateProduct(productName, rating) {
    alert(`You rated ${productName} ${rating} stars!`);
  }
  
  function submitComment(productName, textareaId, commentsDivId) {
    const textarea = document.getElementById(textareaId);
    const commentsDiv = document.getElementById(commentsDivId);

    if (textarea && commentsDiv) {
        if (textarea.value.trim()) {
            const comment = document.createElement('p');
            comment.textContent = `${productName}: ${textarea.value}`;
            commentsDiv.appendChild(comment);
            textarea.value = ''; // Clear the textarea after submitting
        } else {
            alert('Please write a comment before submitting.');
        }
    } else {
        console.error('Invalid IDs or elements missing.');
    }
}

  
  function sellProduct(event) {
    event.preventDefault();
  
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productImage = document.getElementById('productImage').files[0];
  
    if (productImage) {
      alert(`Your product "${productName}" priced at $${productPrice} has been submitted!`);
    } else {
      alert('Please upload an image for your product.');
    }
  }
  