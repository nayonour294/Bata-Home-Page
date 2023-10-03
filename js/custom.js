"use strict";

// Object Creating Here
let menProducts = [
    {
        name: "Bata",
        title: "Bata REMON Men's Casual Loafer",
        image: "show1.jpg",
        comparePrice: "2,999.00",
        price: "2249",
        code: 8546022,
        Availability: "In stock",
        inCart:0,
        size: [10, 9, 8, 7, 6]
    },

    {
        name: "Bata Red Label",
        title: "Bata Red Label NELSON Casual Lace-Up Sneaker",
        image: "show2.jpg",
        comparePrice: "6,999.00",
        price: "2624",
        code: 8211660,
        Availability: "In stock",
        size: [10, 9, 7, 6, 0],
        inCart:0
    },

    {
        name: "Bata",
        title: " Bata TOKYO Loafer for Men",
        image: "show3.jpg",
        comparePrice: "6,999.00",
        price: "2249",
        code: 8544099,
        Availability: "Not stock",
        inCart:0,
        size: [10, 9, 8, 0, 7]
    },

    {
        name: "Bata",
        title: " Bata SHELDON Casual Sneaker for Men",
        image: "show4.jpg",
        comparePrice: "3,299.00",
        price: "2474",
        code: 8219050,
        Availability: "In stock",
        inCart:0,
        size: [10, 9, 8, 7, 6]
    },
    {
        name: "North Star",
        title: "  North Star ARGON Lace-Up Lifestyle Sneaker for Men",
        image: "show5.jpg",
        comparePrice: "2,999.00",
        price: "2249",
        code:  8546099,
        Availability: "Not stock",
        inCart:0,
        size: [0, 9, 8, 7, 6]
    },
    {
        name: "North Star",
        title: " North Star PAOLO Slip-On Lifestyle Sneaker for Men",
        image: "show6.jpg",
        comparePrice: "3,499.00",
        price: "2624",
        code:  8812003,
        Availability: "In stock",
        inCart:0,
        size: [0, 9, 8, 7, 6]
    },
    {
        name: "Bata",
        title: "North Star MAIRO Lace-Up Lifestyle Sneaker for Men",
        image: "show7.jpg",
        comparePrice: "4,999.00",
        price: "3749",
        code:  8813325,
        Availability: "In stock",
        inCart:0,
        size: [10, 9, 8, 7, 6]
    },


    // Woment Freature Product Object


    {
      name: "Bata",
      title: "North Star MAIRO Lace-Up Lifestyle Sneaker for Men",
      image: "show8.jpg",
      comparePrice: "4,999.00",
      price: "3749",
      code:  8813325,
      Availability: "In stock",
      inCart:0,
      size: [10, 9, 8, 7, 6]
  },
  {
    name: "Bata",
    title: "North Star MAIRO Lace-Up Lifestyle Sneaker for Men",
    image: "show9.jpg",
    comparePrice: "4,999.00",
    price: "3749",
    code:  8813325,
    Availability: "In stock",
    inCart:0,
    size: [10, 9, 8, 7, 6]
  },
  {
    name: "Bata",
    title: "North Star MAIRO Lace-Up Lifestyle Sneaker for Men",
    image: "show10.jpg",
    comparePrice: "4,999.00",
    price: "3749",
    code:  8813325,
    Availability: "In stock",
    inCart:0,
    size: [10, 9, 8, 7, 6]
  },
  {
    name: "Bata",
    title: "North Star MAIRO Lace-Up Lifestyle Sneaker for Men",
    image: "show11.jpg",
    comparePrice: "4,999.00",
    price: "3749",
    code:  8813325,
    Availability: "In stock",
    inCart:0,
    size: [10, 9, 8, 7, 6]
  },
  {
    name: "Bata",
    title: "North Star MAIRO Lace-Up Lifestyle Sneaker for Men",
    image: "show12.jpg",
    comparePrice: "4,999.00",
    price: "3749",
    code:  8813325,
    Availability: "In stock",
    inCart:0,
    size: [10, 9, 8, 7, 6]
  },
  {
    name: "Bata",
    title: "North Star MAIRO Lace-Up Lifestyle Sneaker for Men",
    image: "show13.jpg",
    comparePrice: "4,999.00",
    price: "3749",
    code:  8813325,
    Availability: "In stock",
    inCart:0,
    size: [10, 9, 8, 7, 6]
  },
  {
    name: "Bata",
    title: "North Star MAIRO Lace-Up Lifestyle Sneaker for Men",
    image: "show14.jpg",
    comparePrice: "4,999.00",
    price: "3749",
    code:  8813325,
    Availability: "In stock",
    inCart:0,
    size: [10, 9, 8, 7, 6]
  }
];

// let socialImages = ["social1", "social2", "social3", "social4", "social5", "social6", "social7", "social8", "social9", "social10", "social11"];




// Select Elements Here
const shopNowBtn = document.querySelectorAll('.add-cart');
const  totalProduct = document.querySelector('#totalProductNumber');


const minusButtons = document.querySelectorAll('.fa-minus');
const plusButtons = document.querySelectorAll('.fa-plus');



// Adding Event Listener All Button
for ( let btnNum = 0; btnNum < shopNowBtn.length; btnNum++ ) {
  shopNowBtn[btnNum].addEventListener("click", () => {

      showCartNumber(menProducts[btnNum]);
      getTotalCost(menProducts[btnNum]);
      
      
  });
}


// Display Total Porduct add
const loadCartNumber = () => {
  let getCartNumber = Number(localStorage.getItem("cartNumber"));
  if ( getCartNumber ) {
    totalProduct.textContent = getCartNumber;
  }
};


// Get Total Product Number add to card 
const showCartNumber = (menProducts) => {
  let getCartNumber = Number(localStorage.getItem("cartNumber"))

  if ( getCartNumber ) {
      localStorage.setItem("cartNumber", getCartNumber + 1);
      totalProduct.textContent = getCartNumber + 1;
  } else {
      localStorage.setItem("cartNumber", 1);
      totalProduct.textContent = 1;
  }

  setProduct(menProducts);
  
};



// Get Products
const setProduct = (menProducts) => {
  let cartProduct = localStorage.getItem("productCart");
  cartProduct = JSON.parse(cartProduct);

  if ( cartProduct != null ) {

      if (cartProduct[menProducts.image] == undefined) {
          cartProduct[menProducts.image] = menProducts;
          
      }
      cartProduct[menProducts.image].inCart += 1;

  } else {
    menProducts.inCart = 1;
      cartProduct = {
          [menProducts.image]: menProducts
      };
  }


  
  localStorage.setItem("productCart", JSON.stringify(cartProduct));

};


const getTotalCost = (menProducts) => {
  let costValue = Number(localStorage.getItem("totalCost"));

  if (costValue != null) {
      localStorage.setItem("totalCost",costValue + menProducts.price);
  } else {
      localStorage.setItem("totalCost", menProducts.price);
  }
};

const  selectPorduct = document.querySelector('.selected-product-container');

const showSelectedProduct = () => {
  let cartProduct = localStorage.getItem("productCart");
  cartProduct = JSON.parse(cartProduct);

  if ( cartProduct && selectPorduct ) {
    selectPorduct.innerHTML = "";

    Object.values(cartProduct).map(item => {

      selectPorduct.innerHTML = `
      
      
      
      <div class="breadcum-section">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Home <em> > </em> </a></li>
                  <li class="breadcrumb-item active" aria-current="page">Bata REMON Men's Casual Loafer</li>
                </ol>
              </nav>
        </div>

        <div class="selected-product-row">
            <div class="left-content">
                <img src="../images/Men's-show/${item.image}" alt="Product">
            </div>
            <div class="right-content">
                <div class="product-title">
                    <h2>${item.title}</h2>
                </div>
                <div class="primary-info">
                    <div class="tag-name">
                        <div class="left">
                            <span>Brand: </span>
                            <span>Product Code: </span>
                            <span>Availability: </span>
                        </div>
                        <div class="right">
                            <span>Bata</span>
                            <span>${item.code}</span>
                            <span>${item.Availability}</span>
                        </div>
                    </div>
                    <div class="price">
                        <span>Tk ${item.comparePrice}</span>
                        <span>Tk ${item.price}.00</span>
                        <span>25%</span>
                    </div>
                    <div class="message">
                        <span>* Offer is valid only for batabd.com</span>
                    </div>
                    <div class="product-text">
                        <p>PRODUCT DETAILS: A pair of stylish Bata casual loafers for comfort & fashion. The black casual loafer is suitable for any man in any profession. Let it be... </p>
                    </div>
                    <div class="product-size">
                        <h5>Size <em>*</em> </h5>
                        <span>${item.size[0]}</span>
                        <span>${item.size[1]}</span>
                        <span>${item.size[2]}</span>
                        <span>${item.size[3]}</span>
                        <span>${item.size[4]}</span>
                    </div>
                    <div class="color">
                        <h5>Color <em>*</em> </h5>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="cupon-code">
                        <h5>Promocode <em>*</em> </h5>
                        <p>#MPde#28</p>
                    </div>
                    <div class="quantity">
                        <h5>Quantity: </h5>
                        <i class="fa-solid fa-minus" onclick="changeQuantity('${item.image}')"></i>
                        <span>${item.inCart}</span>
                        <i class="fa-solid fa-plus" onclick="changeQuantityPlus('${item.image}')"></i>
                    </div>
                    <div class="total">
                        <span>Subtotal: <b>TK ${item.inCart * item.price}.00</b></span>
                    </div>
                    <div class="get-payment-form">
                        <h5>add to cart</h5>
                        <span><i class="fa-regular fa-heart"></i></span>
                    </div>
                </div>
            </div>
        </div>


      
      
      `



    })
  }

}

function changeQuantity(image) {
  let cartProduct = localStorage.getItem("productCart");
  cartProduct = JSON.parse(cartProduct);

  if (cartProduct && cartProduct[image]) {
      if (cartProduct[image].inCart > 1) {
          cartProduct[image].inCart--;
          
      } else {
          delete cartProduct[image];

      }
      localStorage.setItem("productCart", JSON.stringify(cartProduct));


      
      if (isEmptyCart(cartProduct)) {
          emptyText.style.display = "block";
          
          
      } else {
          emptyText.style.display = "none";
      } 

      

      showSelectedProduct();
      updateTotalCost();
  }

  let getCartNumber = Number(localStorage.getItem("cartNumber"));
  if (getCartNumber > 1) {
      localStorage.setItem("cartNumber", getCartNumber - 1);
      loadCartNumber();
  } else {
      localStorage.removeItem("cartNumber");
      totalProduct.textContent = "0"; 
  }
}


function changeQuantityPlus(image) {
  let cartProduct = localStorage.getItem("productCart");
  cartProduct = JSON.parse(cartProduct);

  if (cartProduct && cartProduct[image]) {
      cartProduct[image].inCart++;
      localStorage.setItem("productCart", JSON.stringify(cartProduct));
      showSelectedProduct();
      updateTotalCost();
  }

  let getCartNumber = Number(localStorage.getItem("cartNumber"));
  if (getCartNumber) {
      localStorage.setItem("cartNumber", getCartNumber + 1);
      loadCartNumber(); 
  } else {
      localStorage.setItem("cartNumber", "1");
      totalProduct.textContent = "1"; 
  }
  
}


function updateTotalCost() {
  let cartProduct = localStorage.getItem("productCart");
  cartProduct = JSON.parse(cartProduct);

  let totalCost = 0;

  if (cartProduct) {
      Object.values(cartProduct).forEach(item => {
          totalCost += item.inCart * item.price;
      });
  }

  localStorage.setItem("totalCost", totalCost);
}


loadCartNumber();
showSelectedProduct();

