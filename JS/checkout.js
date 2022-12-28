// Retrieve an write Local Storage
// if (ItemNo == "" || Item == "" || RefNo == "" || Price == "" || Qty == ""){
// }else{
//     if(products == []){
//         const list = document.querySelector("#row");
//         const row = document.createElement("tr");

//         row.innerHTML = `
//         <td>${ItemNo}</td>
//         <td>${Item}</td>
//         <td>${Price}</td>
//         <td>${Qty}</td>
//         <td>${Total}</td>
//         <td>
//         <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
//         <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
//         `;
//         list.appendChild(row);
//     }else{
//         chosen.children[0].textContent = ItemNo;
//         chosen.children[1].textContent = Item;
//         chosen.children[2].textContent = Price;
//         chosen.children[3].textContent = Qty;
//         chosen.children[4].textContent = Total;
//     }
//     updatePage();
// };


/* From Zile: 
    Here Is my attempt at the table using the same method as I did on product.js
*/

const tbody = document.querySelector('tbody.checkout-list')
let checkoutList = JSON.parse( localStorage.getItem('checkout items') )
let checkoutListFinal = []
checkoutList.forEach(item => {
    let list = checkoutList.filter(li => li.id == item.id)
    item.qty = list.length
    // Changing the quantity of the item, based on how many was added
    checkoutListFinal.push(item)   
})

let usedIds = []
// Checking if we already used/Added an item to to the table (to prevent duplicates)
checkoutListFinal.forEach(item => {
    if (!usedIds.includes(item.id)) {
        tbody.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>R${item.price}</td>
                <td>${item.qty}</td>
                <td>R${item.price * item.quantity}</td>
                <td></td>
            </tr>
        `    
        usedIds.push(item.id)
    }
})



// Alerts //

//Data-logging removal //

// Adding Customer-Data //

// Retrieving Info //
// let tbody = document.querySelector('tbody');
//     Object.keys(data).forEach( (item)=>{
//         if(data[item].length){
//             console.log(`${item}: ${data[item]}`);
//             tbody.innerHTML +=
//             `
//                 <tr>
//                     <td>${item}</td>
//                     <td>${data[item]}</td>
//                 </tr>
//             `
//         }
//         console.log(item);
//     } );
// OK-It //

// Editing Information //

//  Update Price Total //

