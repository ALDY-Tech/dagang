const products = [
  {
    id: 1,
    name: "Aqua Bottle 1,5L",
    price: 6000,
    image: "asset/image/product1.webp",
  },
  {
    id: 2,
    name: "Vit Bottle 1,5L",
    price: 5000,
    image: "asset/image/product2.jpeg",
  },
];

const cart = [];
const productContainer = document.getElementById("products");
const cartList = document.getElementById("cart-list");
const totalElement = document.getElementById("total");

function displayProducts() {
  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Harga: Rp ${product.price}</p>
                <button onclick="addToCart(${product.id})">Beli</button>
            `;
    productContainer.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCart();
}

function removeFromCart(productId) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity--;
    if (cartItem.quantity === 0) {
      const index = cart.indexOf(cartItem);
      cart.splice(index, 1);
    }
  }
  updateCart();
}

function updateCart() {
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
    const li = document.createElement("li");
    li.innerHTML = `
                ${item.name} - Rp ${item.price} x ${item.quantity} 
                <button onclick="addToCart(${item.id})">+</button>
                <button onclick="removeFromCart(${item.id})">-</button>
            `;
    cartList.appendChild(li);
  });
  totalElement.textContent = total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Keranjang belanja kosong!");
    return;
  }

  let message = "Pesanan Saya:%0A";
  cart.forEach((item) => {
    message += `${item.name} - Rp ${item.price} x ${item.quantity}%0A`;
  });
  message += `Total: Rp ${totalElement.textContent}`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=+6281905534664&text=${message}`;
  window.open(whatsappUrl, "_blank");
}

displayProducts();
