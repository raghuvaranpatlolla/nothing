const menuItems = [
    { name: "Burger", description: "Delicious beef burger with lettuce, tomato, and cheese.", price: "₹280" },
    { name: "Pasta", description: "Al dente pasta with homemade tomato sauce.", price: "₹250" },
    { name: "Salad", description: "Fresh garden salad with mixed greens and vinaigrette.", price: "₹319" },
    { name: "Chicken 65", description: "Fiery, crispy, aromatic, Indian delight.", price: "₹ 320" },
    // Add more menu items here
  ];
  
  const menuItemsContainer = document.getElementById("menu-items");
  
  menuItems.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `
      <h2>${item.name}</h2>
      <p>${item.description}</p>
      <p>${item.price}</p>
      <button>Add to Cart</button>
    `;
    menuItemsContainer.appendChild(menuItem);
  });
  