/* From Zile: 
    In the code below, we ONLY want to set 'products' to the default list of products,
    if and ONLY if, there is NOT already a list of products on the local storage!

    The reason for this is because once we put the products on the local storage, we are going to
    update, change and delete item in the products list later on, on all of our pages. 
    So if everytime we go to our products page, we reset it to the default products, then we wont
    ever be able to use our updated list of products.

    So instead, when we go to the products page, we want to first try and load the updated list of products
    that is already on our local storage, so that the products dont get reset everytime. 
    But if, and ONLY if, there are no products on the local storage already, only then do we want to reset
    tothe default list of products.

    To achieve this, we will use the or/'||' operator. We want to set the products variable to be equalt to
    'JSON.parse( localStorage.getItem('products') )'... OR, if that does not exist, e.g. it is undefined,
    THEN we just set products to equal the default array.

    Also, I added an 'img' property to each of your products, to make them more dynamic.
*/

// Looping-Over-Objects-and-Array //
let products = JSON.parse(localStorage.getItem('products')) || [
    {
        id: 1,
        name: 'Horizon Zero Dawn',
        price: 300,
        quantity: 3,
        img: 'https://i.postimg.cc/KYtx3N1p/horizonzerodawn-1638924347525.jpg'
    },
    {
        id: 2,
        name: 'Horizon Complete Edition',
        price: 400,
        quantity: 2,
        img: 'https://i.postimg.cc/j5Nw5PTR/j-AT7-Hjp-L49-A62b-U7h-LKXJ96b.webp'
    },
    {
        id: 3,
        name: 'Horizon The Froze Wilds',
        price: 500,
        quantity: 1,
        img: 'https://i.postimg.cc/sDKBv3kG/MV5-BY2-M5-Y2-I4-Mj-It-NWJk-ZC00-M2-Y1-LThm-NTMt-Nj-Vl-ZDhi-YWRj-ODhh-Xk-Ey-Xk-Fqc-Gde-QXVy-Mz-Y0-MTE3-Nz-U-V1.jpg'
    },
    {
        id: 4,
        name: 'Dishonoured',
        price: 300,
        quantity: 3,
        img: 'https://i.postimg.cc/pr5JZpKT/MV5-BYm-Q2-Zj-Zi-ZDAt-ZGNh-ZC00-ZDI5-LTkz-MWQt-MTA2-MTFl-Njky-ODc0-Xk-Ey-Xk-Fqc-Gde-QXVy-Mz-Y0-MTE3-Nz-U-V1.jpg'
    },
    {
        id: 5,
        name: 'Dishonoured The Return Of Daud',
        price: 400,
        quantity: 2,
        img: 'https://i.postimg.cc/90DJnxHc/dishonored-5.jpg'
    },
    {
        id: 6,
        name: 'Dishonoured Definitive Edition',
        price: 500,
        quantity: 1,
        img: 'https://i.postimg.cc/MTFYVyMN/Definitive-Edition-Cover.webp'
    },
    {
        id: 7,
        name: 'Mass Effect',
        price: 300,
        quantity: 3,
        img: 'https://i.postimg.cc/h4J9dQDW/masseffect3-sq-1641945184920.jpg'
    },
    {
        id: 8,
        name: 'Mass Effect Andromeda',
        price: 400,
        quantity: 2,
        img: 'https://i.postimg.cc/qMs6s8WY/uh-Wvgrh-Jk-Mk2-Kt-Srmq-XO6qr-Y7nkey-GMO.jpg'
    },
    {
        id: 9,
        name: 'Mass Effec tAndromeda Deluxe Upgrade',
        price: 500,
        quantity: 1,
        img: 'https://i.postimg.cc/Z5JBVWSq/LYkcxj-G6uj-KJJKUk3-Isx-Psg-Am-AVYTu-MB.webp'
    }
] 

// Local Storage set //
localStorage.setItem('products', JSON.stringify(products));




// Retrieve an write Local Storage
// const ItemNo = document.querySelector("#Itemno").value;
// const Item = document.querySelector("#Item").value;
// const Price = document.querySelector("#Price").value;
// const Qty = document.querySelector("#QTY").value;
// const Totals = document.querySelector("#Total").value;


/* From Zile: 
    This code will not work, as the IDs used above, are not defined anywhere on the HTML document.
    This means that ItemNo = undefined, not "". So your if statement will not work.

    At the same time, you are just statically adding each product to the DOM using innerHTML, instead of dynamically
    changing how many products are added to the DOM and what their properties are, based on what is in your products array.
*/



// if (ItemNo == "" || Item == "" || RefNo == "" || Price == "" || Qty == ""){
// }else{
//     if(products == []){
//         const list = document.querySelector(localStorage.setItem(JSON.stringify("#row-wor")));
//         const row = document.createElement(localStorage.getItem(JSON.parse("tr")));

//         row.innerHTML = `   <div class="text-dark text-shadow-dark rounded-3 py-5 bible">
//         <div class="row d-flex justify-content-around">
//             <div class="card" style="width: 18rem;">
//                 <img src="https://i.postimg.cc/KYtx3N1p/horizonzerodawn-1638924347525.jpg" class="card-img-top" alt="Meh">
//                 <div class="card-body">
//                   <h5 class="card-title mshadow">Horizon Zero Dawn<br>(Game)</h5>
//                   <h3 class="mshadow">•Price•</h3>
//                   <h4 class="h4-mshadow">|R500|</h4>
//                   <a href="../html/checkout.html" class="btn btn-info" id="view-product">Add To Checkout</a>
//                 </div>
//             </div>
//             <div class="card" style="width: 18rem;">
//                 <img src="https://i.postimg.cc/j5Nw5PTR/j-AT7-Hjp-L49-A62b-U7h-LKXJ96b.webp" class="card-img-top" alt="Meh">
//                 <div class="card-body">
//                   <h5 class="card-title mshadow">Horizon Complete Edition<br> (Game)</h5>
//                   <h3 class="mshadow">•Price•</h3>
//                   <h4 class="mshadow">|R500|</h4>
//                   <a href="../html/checkout.html" class="btn btn-info" id="view-product">Add To Checkout</a>
//                 </div>
//             </div>
//             <div class="card" style="width: 18rem;">
//                 <img src="https://i.postimg.cc/sDKBv3kG/MV5-BY2-M5-Y2-I4-Mj-It-NWJk-ZC00-M2-Y1-LThm-NTMt-Nj-Vl-ZDhi-YWRj-ODhh-Xk-Ey-Xk-Fqc-Gde-QXVy-Mz-Y0-MTE3-Nz-U-V1.jpg" class="card-img-top" alt="Meh">
//                 <div class="card-body mshadow">
//                   <h5 class="card-title">Horizon The Frozen Wilds<br>(Game)</h5>
//                   <h3 class="mshadow">•Price•</h3>
//                   <h4 class="mshadow">|R500|</h4>
//                   <a href="../html/checkout.html" class="btn btn-info" id="view-product">Add To Checkout</a>
//                 </div>
//               </div>
//         </div>
//     </div>
//     <div class="text-dark text-shadow-dark rounded-3 py-5 bible">
//         <div class="row d-flex justify-content-around">
//             <div class="card" style="width: 18rem;">
//                 <img src="https://i.postimg.cc/pr5JZpKT/MV5-BYm-Q2-Zj-Zi-ZDAt-ZGNh-ZC00-ZDI5-LTkz-MWQt-MTA2-MTFl-Njky-ODc0-Xk-Ey-Xk-Fqc-Gde-QXVy-Mz-Y0-MTE3-Nz-U-V1.jpg" class="card-img-top" alt="Meh">
//                 <div class="card-body">
//                     <h5 class="card-title mshadow">Dishonoured<br>(Game)</h5>
//                     <h3 class="mshadow">•Price•</h3>
//                     <h4 class="mshadow">|R500|</h4>
//                   <a href="../html/checkout.html" class="btn btn-info" id="view-product">Add To Checkout</a>
//                 </div>
//             </div>
//             <div class="card" style="width: 18rem;">
//                 <img src="https://i.postimg.cc/90DJnxHc/dishonored-5.jpg" class="card-img-top" alt="Meh">
//                 <div class="card-body">
//                   <h5 class="card-title mshadow">Dishonoured The Return Of Daud<br> (Game)</h5>
//                   <h3 class="mshadow">•Price•</h3>
//                   <h4 class="mshadow">|R500|</h4>
//                   <a href="../html/checkout.html" class="btn btn-info" id="view-product">Add To Checkout</a>
//                 </div>
//             </div>
//             <div class="card" style="width: 18rem;">
//                 <img src="https://i.postimg.cc/MTFYVyMN/Definitive-Edition-Cover.webp" class="card-img-top" alt="Meh">
//                 <div class="card-body">
//                   <h5 class="card-title mshadow">Dishonoured Definitive Edition<br>(Game)</h5>
//                   <h3 class="mshadow">•Price•</h3>
//                   <h4 class="mshadow">|R500|</h4>
//                   <a href="../html/checkout.html" class="btn btn-info" id="view-product">Add To Checkout</a>
//                 </div>
//               </div>
//         </div>

//     </div>
//     <div class="text-dark text-shadow-dark rounded-3 py-5 bible">
//         <div class="row d-flex justify-content-around">
//             <div class="card" style="width: 18rem;">
//                 <img src="https://i.postimg.cc/h4J9dQDW/masseffect3-sq-1641945184920.jpg" class="card-img-top" alt="Meh">
//                 <div class="card-body">
//                   <h5 class="card-title mshadow">Mass Effect<br>(Game)</h5>
//                   <h3 class="mshadow">•Price•</h3>
//                   <h4 class="mshadow">|R500|</h4>
//                   <a href="../html/checkout.html" class="btn btn-info" id="view-product">Add To Checkout</a>
//                 </div>
//             </div>
//             <div class="card" style="width: 18rem;">
//                 <img src="https://i.postimg.cc/qMs6s8WY/uh-Wvgrh-Jk-Mk2-Kt-Srmq-XO6qr-Y7nkey-GMO.jpg" class="card-img-top" alt="Meh">
//                 <div class="card-body">
//                   <h5 class="card-title mshadow">Mass Effect Andromeda<br> (Game)</h5>
//                   <h3 class="mshadow">•Price•</h3>
//                   <h4 class="mshadow">|R500|</h4>
//                   <a href="../html/checkout.html" class="btn btn-info" id="view-product">Add To Checkout</a>
//                 </div>
//             </div>
//             <div class="card" style="width: 18rem;">
//                 <img src="https://i.postimg.cc/Z5JBVWSq/LYkcxj-G6uj-KJJKUk3-Isx-Psg-Am-AVYTu-MB.webp" class="card-img-top" alt="Meh">
//                 <div class="card-body">
//                   <h5 class="card-title mshadow">Mass Effect Andromeda Deluxe Upgrade<br>(Game)</h5>
//                   <h3 class="mshadow">•Price•</h3>
//                   <h4 class="mshadow">|R500|</h4>
//                   <a href="../html/checkout.html" class="btn btn-info" id="view-product">Add To Checkout</a>
//                 </div>
//               </div>
//         </div>

//     </div>
// </div>     
// </div>`;
    //     list.appendChild(row);
    // }else{
    //     products.children[0].textContent = ItemNo;
    //     products.children[1].textContent = Item;
    //     products.children[2].textContent = Price;
    //     products.children[3].textContent = Qty;
    //     products.children[4].textContent = Total;
    // }
//     updatePage();
// };



/* From Zile: 
    Here is my own attempt using a forEach loop. First, I removed ALL your products from your 'product.html' page.
    Then, I added a class of "product-cards-div" onto the now empty parent div. (line 54 on HTML).

    Next I wil target that div, using document.querySelector, and finally, I will loop through your products and add 
    a card to this div using '+=', for each product in the array, using a forEach loop:
*/

const productCardsDiv = document.querySelector('.product-cards-div')

products.forEach(product => {
    productCardsDiv.innerHTML += `
        <div class="card mt-2" style="width: 18rem;">
            <img src="${product.img}" class="card-img-top" id="img-resize" alt="Meh" loading="lazy">
            <div class="card-body">
                <h5 class="card-title mshadow">${product.name}<br>(Game)</h5>
                <h3 class="mshadow">•Price•</h3>
                <h4 class="h4-mshadow">|R${product.price}|</h4>
                <button onclick="addToCheckout(${product.id})" class="btn btn-info">Add To Checkout</button>
            </div>
        </div>      
    `
})

let checkoutList = JSON.parse( localStorage.getItem('checkout items') ) || []

function addToCheckout(id) {
    checkoutList.push(products[id-1])
    // putting Checkout Items onto the local storage, so we can access it on checkout page.
    // Note: This is completely seperate from the 'products' on your local stoage
    localStorage.setItem('checkout items', JSON.stringify(checkoutList))
}


;
// Local Storage //
// document.getElementById('view-product').addEventListener("click", function(){
//     window.localStorage.Item('products', 'product');
// });
// Store
// localStorage.setItem("product", "products");
// Event Handling//
// Btn //
// let buttons = document.getElementById('btn-checkout');

// buttons.document.getElementById('view-product').addEventListener("click", function(){
//     window.JSON.parse(localStorage.getItem('products', 'product'));
// });

// buttons.document.getElementById('view-product').addEventListener("click", function(){

// });

// buttons.document.getElementById('retrieve-single-item').addEventListener("click", function(){

// });

// buttons.document.getElementById('remove-single-item').addEventListener("click", function(){

// });

// buttons.document.getElementById('remove-all-items').addEventListener("click", function(){

// });
// // Update Function //
// function updatePage() {
//     let values = [], keys = Object.keys(localStorage), i = keys.length;
    
//         while(i--) { values.push(localStorage.getItem(keys[1]) );
//         }
//         document.getElementById('localized-storage').textContent = values;
// }