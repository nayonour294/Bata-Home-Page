"use strict";

// Object Creating Here
let MenProducts = [
    {
        name: "Bata",
        title: "Bata REMON Men's Casual Loafer",
        image: "show1.jpg",
        price: "2,369.00",
        inCart:0
    },

    {
        name: "Bata Red Label",
        title: "Bata Red Label NELSON Casual Lace-Up Sneaker",
        image: "show2.jpg",
        price: "5,529.00",
        inCart:0
    },

    {
        name: "Bata",
        title: " Bata TOKYO Loafer for Men",
        image: "show3.jpg",
        price: "2,369.00",
        inCart:0
    },

    {
        name: "Bata",
        title: " Bata SHELDON Casual Sneaker for Men",
        image: "show4.jpg",
        price: "2,606.00",
        inCart:0
    },
    {
        name: "North Star",
        title: "  North Star ARGON Lace-Up Lifestyle Sneaker for Men",
        image: "show5.jpg",
        price: "2,369.00",
        inCart:0
    },
    {
        name: "North Star",
        title: " North Star PAOLO Slip-On Lifestyle Sneaker for Men",
        image: "show6.jpg",
        price: "2,369.00",
        inCart:0
    },
    {
        name: "Bata",
        title: "North Star MAIRO Lace-Up Lifestyle Sneaker for Men",
        image: "show7.jpg",
        price: "2,764.00",
        inCart:0
    }
];

let socialImages = ["social1", "social2", "social3", "social4", "social5", "social6", "social7", "social8", "social9", "social10", "social11"];

// Elements Selection 
const socialSlides = document.querySelector('.social-slides');
const cardSlider = document.querySelector('.card-slider');
const justCardSlider = document.querySelector('.just-card-slider');
const bestCardSlider = document.querySelector('.best-card-slider');
// ==============












// Social Slide Function
const socialSlide = () => {
  socialImages.map(socialImage => {
    socialSlides.innerHTML += `
    
    <div class="slide swiper-slide">
        <img src="images/${socialImage}.avif" alt="Social Images">
    </div>

    `
  })
}

socialSlide();


// Product Showing Function
const showMenProducts = (MenProducts) => {
  MenProducts.map(MenProduct => {
    cardSlider.innerHTML += `
      <div class="card swiper-slide">
          <div class="card-image">
              <img src="images/Men's-show/${MenProduct.image}" alt="Images">
          </div>
          <div class="card-content">
              <p>${MenProduct.name}</p>
              <p>${MenProduct.title}</p>
              <span><i class="fa-regular fa-star"></i></span>
              <span><i class="fa-regular fa-star"></i></span>
              <span><i class="fa-regular fa-star"></i></span>
              <span><i class="fa-regular fa-star"></i></span>
              <span><i class="fa-regular fa-star"></i></span>
              <h4>Tk ${MenProduct.price}</h4>
          </div>
          <div class="add-cart">
            <a href="#">Shop Now</a>
          </div>
      </div>
    `
  });
  
};

showMenProducts(MenProducts);


// Product Showing Function
const showWomenProducts = (MenProducts) => {
  MenProducts.map(womenProduct => {
    justCardSlider.innerHTML += `
      <div class="ju-card swiper-slide">
          <div class="card-image">
              <img src="images/feature-img/${womenProduct.image}" alt="Images">
          </div>
          <div class="ju-card-content">
              <p>${womenProduct.name}</p>
              <p>${womenProduct.title}</p>
              <span><i class="fa-regular fa-star"></i></span>
              <span><i class="fa-regular fa-star"></i></span>
              <span><i class="fa-regular fa-star"></i></span>
              <span><i class="fa-regular fa-star"></i></span>
              <span><i class="fa-regular fa-star"></i></span>
              <h4>Tk ${womenProduct.price}</h4>
          </div>
          <div class="add-cart">
            <a href="#">Shop Now</a>
          </div>
      </div>
    `
  });
  
};

showWomenProducts(MenProducts);



// Product Showing Function
const showkidsProducts = (MenProducts) => {
  MenProducts.map(kidsProduct => {
    bestCardSlider.innerHTML += `
      <div class="best-card swiper-slide">
          <div class="card-image">
              <img src="images/best-img/${kidsProduct.image}" alt="Images">
          </div>
          <div class="best-card-content">
              <p>${kidsProduct.name}</p>
              <p>${kidsProduct.title}</p>
              <span><i class="fa-regular fa-star"></i></span>
              <span><i class="fa-regular fa-star"></i></span>
              <span><i class="fa-regular fa-star"></i></span>
              <span><i class="fa-regular fa-star"></i></span>
              <span><i class="fa-regular fa-star"></i></span>
              <h4>Tk ${kidsProduct.price}</h4>
          </div>
          <div class="add-cart">
            <a href="#">Shop Now</a>
          </div>
      </div>
    `
  });
  
};

showkidsProducts(MenProducts);



// Slide Function Here
const sliderOne = () => {
  var swiper = new Swiper('.slide-content', {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loopFillGroupWithBlank: true,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }
}

sliderOne();

  // =============================================================

// Slide Function Here
const slidertwo = () => {
  var justSwiper = new Swiper('.just-slide-content', {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loopFillGroupWithBlank: true,
    direction: getDirection2(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        justSwiper.changeDirection(getDirection2());
      },
    },
  });

  function getDirection2() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }
}

slidertwo();


// =============================================================

// Slide Function Here
const sliderthree = () => {
  var bestSwiper = new Swiper('.best-slide-content', {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loopFillGroupWithBlank: true,
    direction: getDirection2(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        bestSwiper.changeDirection(getDirection2());
      },
    },
  });

  function getDirection2() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }
}

sliderthree();


// ==============================================================

// Slide Function Here
const socialSlider = () => {
  var socialSwiper = new Swiper('.social-slide-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loopFillGroupWithBlank: true,
    direction: getDirection2(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        socialSwiper.changeDirection(getDirection2());
      },
    },
  });

  function getDirection2() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }
}

socialSlider();


// Select Elements Here
const shopNowBtn = document.querySelectorAll('.add-cart');
const  totalProduct = document.querySelector('#totalProductNumber');


const minusButtons = document.querySelectorAll('.fa-minus');
const plusButtons = document.querySelectorAll('.fa-plus');



// Adding Event Listener All Button
for ( let btnNum = 0; btnNum < shopNowBtn.length; btnNum++ ) {
  shopNowBtn[btnNum].addEventListener("click", () => {

      showCartNumber(MenProducts[btnNum]);
      getTotalCost(MenProducts[btnNum]);
      
      
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
const showCartNumber = (MenProducts) => {
  let getCartNumber = Number(localStorage.getItem("cartNumber"))

  if ( getCartNumber ) {
      localStorage.setItem("cartNumber", getCartNumber + 1);
      totalProduct.textContent = getCartNumber + 1;
  } else {
      localStorage.setItem("cartNumber", 1);
      totalProduct.textContent = 1;
  }

  setProduct(MenProducts);
  
};



// Get Products
const setProduct = (MenProducts) => {
  let cartProduct = localStorage.getItem("productCart");
  cartProduct = JSON.parse(cartProduct);

  if ( cartProduct != null ) {

      if (cartProduct[MenProducts.image] == undefined) {
          cartProduct[MenProducts.image] = MenProducts;
          
      }
      cartProduct[MenProducts.image].inCart += 1;

  } else {
    MenProducts.inCart = 1;
      cartProduct = {
          [MenProducts.image]: MenProducts
      };
  }


  
  localStorage.setItem("productCart", JSON.stringify(cartProduct));

};


const getTotalCost = (MenProducts) => {
  let costValue = Number(localStorage.getItem("totalCost"));

  if (costValue != null) {
      localStorage.setItem("totalCost",costValue + MenProducts.price);
  } else {
      localStorage.setItem("totalCost", MenProducts.price);
  }
};

const  selectPorduct = document.querySelector('.selected-product-container');

const showSelectedProduct = () => {
  let cartProduct = localStorage.getItem("productCart");
  cartProduct = JSON.parse(cartProduct);

  if ( cartProduct && selectPorduct ) {
    selectPorduct.innerHTML = "";

    Object.values(cartProduct).map(item => {

      selectPorduct.innerHTML += `
      
      
      
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
                <img src="images/Men's-show/${item.image}" alt="Product">
            </div>
            <div class="right-content">
                <div class="product-title">
                    <h2>Bata REMON Men's Casual Loafer </h2>
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
                            <span>8546022</span>
                            <span> In stock</span>
                        </div>
                    </div>
                    <div class="price">
                        <span>Tk 2,999.00</span>
                        <span> Tk 2,249.00</span>
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
                        <span>10</span>
                        <span>9</span>
                        <span>8</span>
                        <span>7</span>
                        <span>6</span>
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
                        <i class="fa-solid fa-minus"></i>
                        <span>0</span>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div class="total">
                        <span>Subtotal:</span>
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

