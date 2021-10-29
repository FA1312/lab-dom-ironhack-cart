// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = product.querySelector('.subtotal span');
  let result = price * quantity
  subTotal.textContent = result;
  return result
}

// ITERATION 2

function calculateAll() {
  let total = 0
  let allProducts = Array.from(document.getElementsByClassName('product'))
  //he tenido que crear el array.from porque con el getElementsByClassName
  //no me creaba un array per iterarla? no sé que hice mal
  for (var i = 0; i < allProducts.length; i++){
    total += updateSubtotal(allProducts[i])
  }
    
  // ITERATION 3
  document.querySelector("#total-value span").innerText = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  
  }

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
