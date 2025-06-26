// Get all input fields
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");
var productImage = document.getElementById("productImage");


// Array to store all products
var productList;
// Check if productList exists in local storage, if not initialize it
if (localStorage.getItem("productList")) {
    productList = JSON.parse(localStorage.getItem("productList"));
    displayProducts(); // Call function to display products on page load
} else {
    productList = [];
}
// Function to add a new product
function addProduct(){
    // Create object with product info
    var object = {
        name : productName.value,
        price : productPrice.value,
        category : productCategory.value,
        description : productDescription.value,
        image : productImage.files[0].name
    }
        // Add product to the list
    productList.push(object);
    console.log(productList);
        // Save products to local storage
    saveProductsToLocalStorage();
    // Display products
    displayProducts();
    // Clear input fields
    // ClearInputs();
};

// Function to display all products
function displayProducts() {

    var cartonaa = "";
        // Loop through each product and create a card for it
    for(var i = 0 ; i < productList.length ; i++ ){
        cartonaa+= `<div class="col-md-3 mt-3">
                <img src="images/${productList[i].image}" class="img-fluid" alt="">
                <p>product name : ${productList[i].name}</p>
                <p>product price: ${productList[i].price} </p>
                <p>product category: ${productList[i].category}</p>
                <p>product description: ${productList[i].description}</p>
                <button class="btn btn-outline-success">Update</button>
                <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button>
            </div>`
    }
    // Insert the generated HTML into the product list section
    document.getElementById("productList").innerHTML = cartonaa;
}

// Function to clear input fields
function ClearInputs(){
    productName.value = null;
    productPrice.value = null;
    productCategory.value = null;
    productDescription.value = null;
    productImage.value = null;
}

// Function to Delete product
function deleteProduct(index){
    productList.splice(index, 1);
    console.log(productList);
    displayProducts();
    saveProductsToLocalStorage();
}

// Function to save products to local storage
function saveProductsToLocalStorage() {
    localStorage.setItem("productList" , JSON.stringify(productList));
}
