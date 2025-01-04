// // Cart functionality
//  document.addEventListener("DOMContentLoaded", () => {
//     const cartIcon = document.querySelector(".cart a"); // Select the cart icon
//     let cart = []; // Array to store cart items
  
//     // Simulating product details
//     const product = {
//       id: 1,
//       name: "CDS22 Formula",
//       price: 29.99, 
//       quantity: 1,
//     };
  
//     // Add to Cart Function
//     const addToCart = (product) => {
//       const existingProductIndex = cart.findIndex((item) => item.id === product.id);
//       if (existingProductIndex !== -1) {
//         cart[existingProductIndex].quantity += 1;
//       } else {
//         cart.push(product);
//       }
  
//       // Update cart display or counter (you can enhance this part)
//       updateCartDisplay();
//     };
  
//     // Update Cart Display
//     const updateCartDisplay = () => {
//       // Display the number of items in the cart
//       const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
//       const cartBadge = document.querySelector(".cart-badge");
  
//       // Update badge or create it if it doesn't exist
//       if (!cartBadge) {
//         const badge = document.createElement("span");
//         badge.classList.add("cart-badge");
//         badge.style.position = "absolute";
//         badge.style.top = "20px";
//         badge.style.right = "100px";
//         badge.style.backgroundColor = "#FF41B3";
//         badge.style.color = "white";
//         badge.style.borderRadius = "50%";
//         badge.style.padding = "5px 10px";
//         badge.style.fontSize = "12px";
//         badge.textContent = cartCount;
//         cartIcon.appendChild(badge);
//       } else {
//         cartBadge.textContent = cartCount;
//       }
//     };
  
//     // Handle Cart Icon Click
//     cartIcon.addEventListener("click", (e) => {
//       e.preventDefault(); // Prevent default behavior (e.g., navigating)
  
//       // Add product to cart when icon is clicked
//       addToCart(product);
  
//       // Optionally, show cart contents in console
//       console.log("Cart Contents:", cart);
//     });
//   });
  

document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.querySelector(".cart a"); // Select the cart icon
    const shopNowButton = document.querySelector(".shop-now"); // Select the "Shop Now" button
    let cart = []; // Array to store cart items
  
    // Simulating product details
    const product = {
      id: 1,
      name: "CDS22 Formula",
      price: 29.99,
      quantity: 1,
    }
    ;
  
    // Add to Cart Function
    const addToCart = (product) => {
      const existingProductIndex = cart.findIndex((item) => item.id === product.id);
      if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
      } else {
        cart.push({ ...product }); // Use a copy of the product object
      }
  
      // Update cart display or counter
      updateCartDisplay();
    };
  
    // Update Cart Display
    const updateCartDisplay = () => {
      const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
      const cartBadge = document.querySelector(".cart-badge");
  
      // Update badge or create it if it doesn't exist
      if (!cartBadge) {
        const badge = document.createElement("span");
        badge.classList.add("cart-badge");
        badge.style.position = "absolute";
        badge.style.top = "22px";
        badge.style.right = "125px";
        badge.style.backgroundColor = "#FF41B3";
        badge.style.color = "white";
        badge.style.borderRadius = "50%";
        badge.style.padding = "4px 8px";
        badge.style.fontSize = "10px";
        badge.textContent = cartCount;
        cartIcon.appendChild(badge);
      } else {
        cartBadge.textContent = cartCount;
      }
    };
  
    // Handle Cart Icon Click
    cartIcon.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default behavior (e.g., navigating)
  
      // Show cart contents in console (optional)
      console.log("Cart Contents:", cart);
    });
  
    // Handle "Shop Now" Button Click
    shopNowButton.addEventListener("click", () => {
      // Add product to cart when "Shop Now" is clicked
      addToCart(product);
  
      // Optionally, log the cart contents
      console.log("Product added via Shop Now:", product);
    });
  });
  