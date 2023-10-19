

const products = [
  {
    name: "HOOVER H-POWER Cylinder Vaccum Cleaner",
    price: 129.99,
    stars: 4,
    seller: "HbVacuum",
    image: "images/cylinder1.png",
  },
  {
    name: "HOOVER HENRY HVR160 Cylinder Vacuum Cleaner",
    price: 129.49,
    stars: 5,
    seller: "AtlanticCleaners",
    image: "images/cylinderhenry.png",
  },
  {
    name: "HOOVER NUMATIC HENRY PET 200 Cylinder Vaccum Cleaner",
    price: 179.09,
    stars: 3,
    seller: "VacuumExpert",
    image: "images/cylinderhenry1.png",
  },
  {
    name: "HOOVER Upright 300PET Vaccum Cleaner",
    price: 119.89,
    stars: 3,
    seller: "LGCleaners",
    image: "images/pet.png",
  },
  {
    name: "HOOVER H-POWER 300PET HP320PET Vaccum Cleaner",
    price: 114.69,
    stars: 4,
    seller: "HbVacuum",
    image: "images/pet1.png",
  },
  {
    name: "HOOVER Breeze Evo PETS TH31B002 Vaccum Cleaner",
    price: 89.90,
    stars: 4,
    seller: "AtlanticCleaners",
    image: "images/pet2.png",
  },
  {
    name: "HOOVER Shark Lift-Away NV612UKT Vaccum Cleaner",
    price: 159.90,
    stars: 5,
    seller: "VacuumExpert",
    image: "images/bagless1.png",
  },
  {
    name: "HOOVER BEL01731TT Upright Bagless Vaccum Cleaner",
    price: 54,
    stars: 3,
    seller: "LGCleaners",
    image: "images/bagless.png",
  },
  {
    name: "HOOVER Anti-Twist Cordless Vaccum Cleaner",
    price: 249.99,
    stars: 5,
    seller: "HbVacuum",
    image: "images/cordless.png",
  },
  {
    name: "HOOVER Anti-Twist HF410H Cordless Vaccum Cleaner",
    price: 229.49,
    stars: 4,
    seller: "AtlanticCleaners",
    image: "images/cordless1.png",
  },
];


// PRODUCT CARDS
const startItems = (name, image, stars, reviews, seller, price) => {
  return `<div class="product-card">
  <h3>${name}</h3>
  <div class="product-image">
  <img src=${image} alt=""/>
  </div>
  <div>${stars} stars</div>
  <div>${seller} reviews</div>
  <p class="price">${price}</p>
  <div class="product-card-footer">
  <button>Buy Now!</button>
  </div> `;
    
};

const listProducts = document.getElementById("constructCards");

const productsContainer = () => {
  for (let i = 0; i < products.length; i++) {
    const currentProducts = products[i];
    listProducts.innerHTML += startItems(
      currentProducts.name,
      currentProducts.image,
      currentProducts.stars,
      currentProducts.reviews,
      currentProducts.seller,
      currentProducts.price
      );
    }
  };
  productsContainer();
  
  
  
  // SELLER FILTER
  const SellerName = document.getElementById('SellerName');
  
  SellerName.addEventListener('click', (evt) => {
    const allSellers = [...document.querySelectorAll('option')]
    let sellerSelected = allSellers.filter((el) => {
      return el.selected
    })
    
    sellerSelected = sellerSelected[0]
    //const onceSelected = sellerSelected.textContent
    //console.log(allSellers)
    //console.log(onceSelected)
    console.log(sellerSelected)
   
  });
  
  // PRICE FILTER
  
const filteredPrices = document.getElementById('listprices');

filteredPrices.addEventListener('enter', (evt) => {
  const allPrices = [...document.querySelectorAll('input')]
  let priceSelected = allPrices.filter((el) => {
    if (el.price <= 150) {
      return true;
    } else if (el.price >= 151) {
      return true;
    } else (el.price <= 250)
    return true;
  
  });
});
