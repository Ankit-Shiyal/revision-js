let products = [

  { id: 1, name: "Shoes", price: 999, img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg" },
  { id: 2, name: "Watch", price: 1499, img: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg" },
  { id: 3, name: "Headphones", price: 799, img: "https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg" },
  { id: 4, name: "T-shirt", price: 499, img: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg" },
  { id: 5, name: "Laptop", price: 45000, img: "https://images.pexels.com/photos/18105/pexels-photo.jpg" },
  { id: 6, name: "Mobile", price: 20000, img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg" },
  { id: 7, name: "Bag", price: 1200, img: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg" },
  { id: 8, name: "Sunglasses", price: 699, img: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg" },
  { id: 9, name: "Camera", price: 30000, img: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg" },
  { id: 10, name: "Keyboard", price: 999, img: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg" },
  { id: 11, name: "Mouse", price: 499, img: "https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg" },
  { id: 12, name: "Speaker", price: 1500, img: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg" },
  { id: 13, name: "Chair", price: 3500, img: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg" },
  { id: 14, name: "Table", price: 5000, img: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg" },
  { id: 15, name: "Bottle", price: 299, img: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg" },
  { id: 16, name: "Shoes Sport", price: 1299, img: "https://images.pexels.com/photos/19090/pexels-photo.jpg" },
  { id: 17, name: "Jacket", price: 1999, img: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg" },
  { id: 18, name: "Cap", price: 399, img: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg" },
  { id: 19, name: "Smart TV", price: 35000, img: "https://images.pexels.com/photos/678256/pexels-photo-678256.jpeg" },
  { id: 20, name: "Tablet", price: 15000, img: "https://images.pexels.com/photos/5082565/pexels-photo-5082565.jpeg" }

];
function renderProducts() {
  const productlist = document.getElementById("productlist");
  productlist.innerHTML = "";

  products.forEach((p) => {
    productlist.innerHTML += `
      <div class="col-md-3 mt-3">
        <div class="card">
          <img src="${p.img}" class="card-img-top" style="height:200px;object-fit:cover;">
          <div class="card-body text-center">
            <h5>${p.name}</h5>
            <p>₹${p.price}</p>

            <div class="d-grid gap-2 d-md-block mb-2">
              <button class="btn btn-outline-secondary" onclick="updateModal(${p.id})">Update</button>
              <button class="btn btn-outline-danger" onclick="removeProduct(${p.id})">Remove</button>
            </div>

            <div class="d-grid gap-2">
              <button class="btn btn-outline-primary" onclick="addToCart(${p.id})">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

let cartItems = JSON.parse(localStorage.getItem("cartData")) || []

if (!Array.isArray(cartItems)) {
  cartItems = [];
}
// console.log("cartItems", cartItems)

function addToCart(id) {

  try {
    let product = cartItems.find((p) => p.id === id)


    // console.log("pro",product)

    if (product) {
      product.qty++;
    } else {
      let product = products.find((prod) => prod.id === id);
      cartItems.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cartData", JSON.stringify(cartItems));

    alert("product added")
  }
  catch (error) {
    console.log(error)
  }



}

function showModal() {

  const cartItemList = document.getElementById("cartItem-list")

  showCartData();

  const modal = new bootstrap.Modal(cartItemList)
  modal.show()
}

function showCartData() {
  try {

    const cartTable = document.getElementById("cartData");

    cartTable.innerHTML = "";

    cartItems.forEach((p) => {
      cartTable.innerHTML += `
      
      <tr>
      <td><img src="${p.img}" class=img-thumbnail style=" height:60px; object-fit:cover;"></td>
      <td class="align-self-center">${p.name}</td>
      <td>
      <div class="d-flex gap-2">

      <button class="btn btn-outline-success" onclick="increaseQty(${p.id})" >+</button>
      
      <h5>${p.qty}</h5>
 <button class="btn btn-outline-danger" onclick="decreaseQty(${p.id})" >-</button>
      
      </div>
      </td>
      <td><h4>₹ ${p.price * p.qty}</h4></td>
      <td><button class="btn btn-outline-danger"  onclick="removeItem(${p.id})">remove</button></td>
      
      </tr>
      

      `;
    });
  } catch (error) { }
}


function increaseQty(id) {
  let item = cartItems.find((p) => p.id === id);

  item.qty++;

  localStorage.setItem("cartData", JSON.stringify(cartItems));

  showCartData();
}


function decreaseQty(id) {

  let item = cartItems.find((p) => p.id === id);

  if (item.qty <= 1) {
    cartItems = cartItems.filter((p) => p.id !== id);

  } else {
    item.qty--;
  }

  localStorage.setItem("cartData", JSON.stringify(cartItems));

  showCartData();
}

function removeItem(id) {
  cartItems = cartItems.filter((p) => p.id !== id);

  localStorage.setItem("cartData", JSON.stringify(cartItems));

  showCartData();
}



document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("pname").value;
  let price = document.getElementById("pprice").value;
  let img = document.getElementById("pimg").value;

  let newProduct = {
    id: products.length + 1,
    name: name,
    price: Number(price),
    img: img
  };

  products.push(newProduct);

  addProductToUI(newProduct);

  this.reset();
  const addProductModal = document.getElementById("addProductModal")

  const modal = new bootstrap.Modal(addProductModal)
  modal.hide();
});


function addProductToUI(p) {
  const productlist = document.getElementById("productlist");

  productlist.innerHTML += `
    <div class="col-md-3 mt-3">
      <div class="card">
        <img src="${p.img}" class="card-img-top" style="height:200px;object-fit:cover;">
        <div class="card-body text-center">
          <h5>${p.name}</h5>
          <p>₹${p.price}</p>
          <button class="btn btn-outline-primary" onclick="addToCart(${p.id})">
            Add To Cart
          </button>
          
        </div>
      </div>
    </div>
  `;
}

function removeProduct(id) {

  const product = products.find((p) => p.id === id)

  if (!product) {
    return alert("product is note found")
  }

  products = products.filter((p) => p.id !== id)
  renderProducts();

}

renderProducts()


function updateModal(id) {

  const updateProduct = document.getElementById("updateProduct")

  let modal = new bootstrap.Modal(updateProduct)

  modal.show();

  const product = products.find((p) => p.id === id)

  if (!product) {
    return alert("product is note found")
  }

  let index = products.findIndex((p) => p.id === id)

  if (index === -1) {
    return alert("product is note found")

  }

  document.getElementById("updateName").value = products[index].name
  document.getElementById("updatePrice").value = products[index].price
  document.getElementById("updateImg").value = products[index].img

  const form = document.getElementById("UpdateForm")


  form.onsubmit = function (e) {
    e.preventDefault();

    let name = document.getElementById("updateName").value
    let price = document.getElementById("updatePrice").value
    let img = document.getElementById("updateImg").value


    products[index] = {
      ...products[index],
      name, price, img
    }

    modal.hide();


    renderProducts();

  };


}

// document.getElementById("searchInput").addEventListener("input", function () {
//   let value = this.value.toLowerCase();

//   let filteredProducts = products.filter((p) =>
//     p.name.toLowerCase().includes(value)
//   );

//   displayFilteredProducts(filteredProducts);
// });


// function displayFilteredProducts(data) {
//   const productlist = document.getElementById("productlist");
//   productlist.innerHTML = "";

//   data.forEach((p) => {
//     productlist.innerHTML += `
//       <div class="col-md-3 mt-3">
//         <div class="card">
//           <img src="${p.img}" class="card-img-top" style="height:200px;object-fit:cover;">
//           <div class="card-body text-center">
//             <h5>${p.name}</h5>
//             <p>₹${p.price}</p>

//             <button class="btn btn-outline-primary" onclick="addToCart(${p.id})">
//               Add To Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     `;
//   });
// }

// function searchProduct() {
//   let value = document.getElementById("searchInput").value.toLowerCase();

//   let filteredProducts = products.filter((p) =>
//     p.name.toLowerCase().includes(value)
//   );

//   displayFilteredProducts(filteredProducts);
// }