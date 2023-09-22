"use strict";

let products = [
    {
        name: "Bata",
        title: "Bata REMON Men's Casual Loafer",
        image: "images/Men's-show/show1.jpg",
        price: 60,
        inCart:0
    },

    {
        name: "Bata Red Label",
        title: "Bata Red Label NELSON Casual Lace-Up Sneaker",
        image: "images/Men's-show/show2.jpg",
        price: 40,
        inCart:0
    },

    {
        name: "Bata",
        title: " Bata TOKYO Loafer for Men",
        image: "images/Men's-show/show3.jpg",
        price: 30,
        inCart:0
    },

    {
        name: "Bata",
        title: " Bata SHELDON Casual Sneaker for Men",
        image: "images/Men's-show/show4.jpg",
        price: 50,
        inCart:0
    },
    {
        name: "North Star",
        title: "  North Star ARGON Lace-Up Lifestyle Sneaker for Men",
        image: "images/Men's-show/show5.jpg",
        price: 50,
        inCart:0
    },
    {
        name: "North Star",
        title: " North Star PAOLO Slip-On Lifestyle Sneaker for Men",
        image: "images/Men's-show/show6.jpg",
        price: 50,
        inCart:0
    },
    {
        name: "Bata",
        title: "North Star MAIRO Lace-Up Lifestyle Sneaker for Men",
        image: "images/Men's-show/show7.jpg",
        price: 50,
        inCart:0
    }
];

const cardSlider = document.querySelector('.card-slider');









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