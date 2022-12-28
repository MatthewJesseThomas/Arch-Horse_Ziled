// Deletion Of Data //
document.querySelector(".checkout-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        displayAlert("Customer Checkout Deleted", "danger");
    }
});