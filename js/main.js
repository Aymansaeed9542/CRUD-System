var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");
var productImage = document.getElementById("productImage");



var productList = [];
function addProduct(){
    var object = {
        name : productName.value,
        price : productPrice.value,
        category : productCategory.value,
        description : productDescription.value,
        image : productImage.files[0].name
    }
    productList.push(object);
    console.log(productList);
    displayProducts();
};

function displayProducts() {
    var cartonaa = "";
    for(var i = 0 ; i < productList.length ; i++ ){
        cartonaa+= `<div class="col-md-3 mt-3">
                <img src="images/${productList[i].image}" class="img-fluid" alt="">
                <p>product name : ${productList[i].name}</p>
                <p>product price: ${productList[i].price} </p>
                <p>product category: ${productList[i].category}</p>
                <p>product description: ${productList[i].description}</p>
                <button class="btn btn-outline-success">Update</button>
                <button class="btn btn-outline-danger">Delete</button>
            </div>`
    }
    document.getElementById("productList").innerHTML = cartonaa;
}