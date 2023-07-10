import { productsCategoryContainer } from "./data/productsData.js";

//sticky nav bar scrolling function 
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar-top");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


// ****************** product category container start ************************************

// let productsCategoryList = document.querySelector(".products-category-list");
// // console.log(navProductData)
// let productsCategoryListHTML = '';
// console.log(productsCategoryContainer)
// productsCategoryContainer.map(data => {
//     productsCategoryListHTML += `    
//         <a href="#">
//              <div class="product-category-item">
//                 <div class="product-category-item-img"
//                    <img src="${data.image}" alt="">
//                 </div>
//                 <div class="product-category-item-title">
//                     <p>${data.title}</p>
//                 </div>
//              </div>
//         </a>
//     `
// })
// productsCategoryList.innerHTML = productsCategoryListHTML;

// ******************************** Rating stars *************************************

const ratingStars = document.querySelectorAll(".rating-starts i");

ratingStars.forEach((star, index1) => {

    star.addEventListener("click", () =>{

        ratingStars.forEach((star, index2) => {

            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        })
    })
})