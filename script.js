// carousel
    $('.slider-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplayTimeout: 2000,
    dots: true,
    nav: true,
    navContainer: '.owl-nav',
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    });
prdCarousel();
function prdCarousel(){
    $(".product-carousel").owlCarousel({
        autoplay: false,
        center: false,
        margin: 20,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:3
            },
            1200:{
                items:5
            }
        }
    });
}

    $('.slider-ads-brand').owlCarousel({
    loop:true,
    margin:30,
    autoplayTimeout: 2000,
    nav: true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
    });
    $('.list-gallery').owlCarousel({
        loop:true,
        margin:30,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
        });
// icon dropDown
   
const helpIcon = document.querySelector('.bi-headphones');
const subAction = document.querySelector('.sub-action');

helpIcon.addEventListener("click", function(e){
    e.preventDefault();
    subAction.classList.toggle('db');
})

/// toggle product tab

const exclusiveTab = document.querySelectorAll(".home-new-products .exclusive-tab");
const innerExclusive = document.querySelectorAll(".home-new-products .exclusive-inner");
const carousel = document.querySelectorAll(".home-new-products .exclusive-inner .owl-carousel");

exclusiveTab.forEach((tab, index) => {
    console.log(tab);
    tab.onclick = function(){
        document.querySelector(".home-new-products .exclusive-tab.active").classList.remove("active");
        tab.classList.add("active");
        HandleExclusiveTab(index);
        HandleCarousel(index);
    }

})
function HandleExclusiveTab(index){
    var tabProduct= innerExclusive[index];
    document.querySelector(".home-new-products .exclusive-inner.active").classList.remove("active");
    tabProduct.classList.add("active");
}
function HandleCarousel(index){
    var crs = carousel[index];
    document.querySelector(".home-new-products .owl-carousel.product-carousel").classList.remove("product-carousel");
    crs.classList.add("product-carousel");
    prdCarousel();
}
// Best seller tab
const exclusiveTabSeller = document.querySelectorAll(".home-new-products-seller .exclusive-tab");
const innerExclusiveSeller = document.querySelectorAll(".home-new-products-seller .exclusive-inner");
const carouselSeller = document.querySelectorAll(".home-new-products-seller .owl-carousel");


exclusiveTabSeller.forEach((tab, index) => {
    tab.onclick = function(){
        document.querySelector(".home-new-products-seller .exclusive-tab.active").classList.remove("active");
        tab.classList.add("active");
        HandleExclusiveTabSeller(index);
        HandleCarouselSeller(index);
    }
})
function HandleExclusiveTabSeller(index){
    var tabProduct= innerExclusiveSeller[index];
    document.querySelector(".home-new-products-seller .exclusive-inner.active").classList.remove("active");
    tabProduct.classList.add("active");
}
function HandleCarouselSeller(index){
    var crs = carouselSeller[index];
    document.querySelector(".home-new-products-seller .owl-carousel.product-carousel").classList.remove("product-carousel");
    crs.classList.add("product-carousel");
    prdCarousel();
}

//toggle

var closeBtn = document.querySelector('.close-menu');
var menu = document.querySelector('.menu');

var mobileMenu = document.querySelector('.mobile-menu');
mobileMenu.onclick = function() {
    menu.style.display = 'block';
    
}
closeBtn.onclick = function(){
    menu.style.display = 'none';
}


var cart = document.querySelector('.item-cart a');
var sub_cart = document.querySelector('.sub-action-cart');
cart.addEventListener('click', function(event) {
    event.preventDefault();

    sub_cart.classList.add('open');
    document.querySelector('.main-menu').style.zIndex = "0";

});
var x_cart = document.querySelector('.sub-action-cart .fa-xmark');
x_cart.onclick = function() {
    sub_cart.classList.remove('open');
    document.querySelector('.main-menu').style.zIndex = "2";
}

