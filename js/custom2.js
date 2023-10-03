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


let womenProducts = [
    {
        name: "Bata",
        title: "Bata REMON Men's Casual Loafer",
        image: "show8.jpg",
        price: "2,369.00",
        inCart:0
    },

    {
        name: "Bata Red Label",
        title: "Bata Red Label NELSON Casual Lace-Up Sneaker",
        image: "show9.jpg",
        price: "5,529.00",
        inCart:0
    },

    {
        name: "Bata",
        title: " Bata TOKYO Loafer for Men",
        image: "show10.jpg",
        price: "2,369.00",
        inCart:0
    },

    {
        name: "Bata",
        title: " Bata SHELDON Casual Sneaker for Men",
        image: "show11.jpg",
        price: "2,606.00",
        inCart:0
    },
    {
        name: "North Star",
        title: "  North Star ARGON Lace-Up Lifestyle Sneaker for Men",
        image: "show12.jpg",
        price: "2,369.00",
        inCart:0
    },
    {
        name: "North Star",
        title: " North Star PAOLO Slip-On Lifestyle Sneaker for Men",
        image: "show13.jpg",
        price: "2,369.00",
        inCart:0
    },
    {
        name: "Bata",
        title: "North Star MAIRO Lace-Up Lifestyle Sneaker for Men",
        image: "show14.jpg",
        price: "2,764.00",
        inCart:0
    }
];

let bestSellerProducts = [
    {
        name: "Bata",
        title: "Bata REMON Men's Casual Loafer",
        image: "show15.jpg",
        price: "2,369.00",
        inCart:0
    },

    {
        name: "Bata Red Label",
        title: "Bata Red Label NELSON Casual Lace-Up Sneaker",
        image: "show16.jpg",
        price: "5,529.00",
        inCart:0
    },

    {
        name: "Bata",
        title: " Bata TOKYO Loafer for Men",
        image: "show17.jpg",
        price: "2,369.00",
        inCart:0
    },

    {
        name: "Bata",
        title: " Bata SHELDON Casual Sneaker for Men",
        image: "show18.jpg",
        price: "2,606.00",
        inCart:0
    },
    {
        name: "North Star",
        title: "  North Star ARGON Lace-Up Lifestyle Sneaker for Men",
        image: "show19.jpg",
        price: "2,369.00",
        inCart:0
    },
    {
        name: "North Star",
        title: " North Star PAOLO Slip-On Lifestyle Sneaker for Men",
        image: "show20.jpg",
        price: "2,369.00",
        inCart:0
    },
    {
        name: "Bata",
        title: "North Star MAIRO Lace-Up Lifestyle Sneaker for Men",
        image: "show21.jpg",
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
            <a href="../other-index/ProductCard.html">Shop Now</a>
          </div>
      </div>
    `
  });
  
};

showMenProducts(MenProducts);


// Product Showing Function
const showWomenProducts = (womenProducts) => {
    womenProducts.map(womenProduct => {
    justCardSlider.innerHTML += `
      <div class="ju-card swiper-slide">
          <div class="card-image">
              <img src="images/Men's-show/${womenProduct.image}" alt="Images">
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
            <a href="../other-index/ProductCard.html">Shop Now</a>
          </div>
      </div>
    `
  });
  
};

showWomenProducts(womenProducts);



// Product Showing Function
const showkidsProducts = (bestSellerProducts) => {
    bestSellerProducts.map(kidsProduct => {
    bestCardSlider.innerHTML += `
      <div class="best-card swiper-slide">
          <div class="card-image">
              <img src="images/Men's-show/${kidsProduct.image}" alt="Images">
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
            <a href="../other-index/ProductCard.html">Shop Now</a>
          </div>
      </div>
    `
  });
  
};

showkidsProducts(bestSellerProducts);



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













