// Sample product data (replace this with your actual product data)
const products = [
    { id: 1, name: 'Munich Sword',producCode: '#501144',price:'$324.95',img:'https://www.windlass.com/wp-content/uploads/2017/11/0001318_0.jpeg', description: 'This is product 1.' },
    { id: 1, name: 'LOTR Helmet Stand',producCode:'#805577',price:'$49.95',img:'https://www.medievalcollectibles.com/wp-content/uploads/2019/04/ZS-910942-456x456.jpg', description: 'This is product 1.' },
    { id: 1, name: 'Viking Ship Shot Glass Holder',producCode: '#805569',price:'$29.95',img:'https://assets.catawiki.com/image/cw_normal/plain/assets/catawiki/assets/2023/6/5/a/7/5/a7557c96-4538-4ed0-b5ae-be4772c20b27.jpg', description: 'This is product 1.' },
    { id: 1, name: 'Maleficent Deluxe Horns',producCode: '#201699',price:'$26.95',img:'https://i.pinimg.com/564x/71/96/34/7196349b6272c1977303e888762c0526.jpg', description: 'This is product 1.' },
    { id: 1, name: 'Corina Tiara',producCode: '#201686',price:'$39.95',img:'https://images.pexels.com/photos/2963409/pexels-photo-2963409.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'This is product 1.' },
    { id: 1, name: 'Capt. Jill Pirate Hat',producCode: '#201705',price:'$69.95',img:'https://i.pinimg.com/564x/1f/3e/27/1f3e270f507e5c7d911e7355c2f9a640.jpg', description: 'This is product 1.' },
    
    // Add more products as needed
  ];

// ****************** product list and product page js end ************************************

let productList = document.querySelector(".product-item-list-box");
productList.innerHTML = '';
console.log(products);
products.map(data => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('products-list-item');
    productDiv.innerHTML=`
    <div class="product-item-image">
                            <img src="${data.img}"
                                        alt="">
                            </div>
                            <div class="details">
                                <div class="product-name">
                                    <h6>${data.name}</h6>
                                </div>
                                <p>${data.producCode}</p>
                                <div class="rating-stars">
                                    
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    
                                </div>
                                <div class="price">${data.price}</div>
                                <div class="addToCartBtn">
                                    <input type="button" value="ADD TO CART">
                                    <div class="heartBtn">
                                        <a href="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                class="bi bi-heart" viewBox="0 0 16 16">
                                                <path
                                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
    `

    // Attach a click event to each product element
    productDiv.addEventListener('click', () => {
        showProductDetails(data);
      });

      productList.appendChild(productDiv);
    })
    
    // Function to display product details on the product page
function showProductDetails(product) {
    // Save the selected product to local storage
    localStorage.setItem('selectedProduct', JSON.stringify(product));
  
    // Redirect to the product page
    window.location.href = 'productPage.html';
  }
// ****************** product list and product page js end************************************
















  

// sticky nav bar scrolling function 
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

// ******************************** Rating stars *************************************
// *********** products rating start *********
const ratingStars = document.querySelectorAll(".rating-starts i");

ratingStars.forEach((star, index1) => {
    
    star.addEventListener("click", () =>{

        ratingStars.forEach((star, index2) => {

            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        })
    })
})

// cart prduct quantity increase decrease

// window.addEventListener("load",function(){
    const decrease = document.getElementById("decrease");
    const increase = document.getElementById("increase");
    const productQuantity = document.getElementById("product-quantity")
    const shopingCartPanel = document.getElementById("shopingcartpanel")
    let count =1;
    function updateValue(){
     productQuantity.value = count
    }

    increase.addEventListener('click', () =>{
        count++
        updateValue();
    })

    decrease.addEventListener('click', () =>{
        count--
        if(count <= 0){
            shopingCartPanel.style.display= 'none'
        }
        updateValue();
    })


// } )

