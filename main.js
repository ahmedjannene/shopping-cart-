let carticon=document.querySelector("#cart-icon");
let cart =document.querySelector(".cart");
let closecart=document.querySelector("#close-cart");
//open cart
carticon.onclick =()=>{
    cart.classList.add("active");
};
//close cart
closecart.onclick=()=>{
    cart.classList.remove("active");
};
////////////////////
if(document.readyState=="loading"){
    document.addEventListener('DOMContentLoaded',ready);

}else{
    ready();
};
function ready(){
    var removecartbuttons=document.getElementsByClassName('cart-remove');
    console.log(removecartbuttons)
    for(var i=0;i <removecartbuttons.length;i++){
        var button=removecartbuttons[i];
        button.addEventListener('click',removecartitem);
    };
//quantity change 
var quantityInputs =document.getElementsByClassName('cart-quantity');
var input =quantityInputs[i];
input.addEventListener('change',quantitychanged);
}
function removecartitem(event){
var buttonclicked=event.target;
//updatetotal();
};
//quantity changes
function quantitychanged(event){
    var input=event.target
    if(isNaN(input.value)||(input.value<=0)){
        input.value=1;
    }
updatetotal();
}
//add cart 
var addCart=document.getElementsByClassName('add-cart')
for(var i=0 ;i<add-cart.length;i++){
    var button=addCart[i];
    button.addEventListener('click',addcartclicked);

}
function addcartclicked(event){
    var button=event.target
    var title =shopProducts.getElementsByClassName('product-title')[0].innerText
    var price=shopProducts.getElementsByClassName('price')[0].innerText
   var productImg=shopProducts.getElementsByClassName('product-img')[0].src;
   addproducttocart(title,price,productImg);
   updatetotal();
}
function  addproducttocart(title,price,productImg){
    var cartshopbox=document.createElement('div')
}
//----------total----------
function updatetotal(){
    var cartcontent=document.getElementsByClassName('cart-content')[0];
    var cartboxes=cartcontent.getElementsByClassName('cart-box');
    var total=0;
    for(var i=0;i<cartboxes.length;i++){
        var cartbox=cartboxes[i];
        var priceElement=cartbox.getElementsByClassName('cart-price')[0];
        var quantityelement=cartbox.getElementsByClassName('cart-quantity')[0];
        var price=parseFloat(priceElement.innerText.replace("$",""));
        var quantity=quantityelement.value;
        total=total+(price*quantity);
    }
    document.getElementsByClassName('total-price')[0].innerText="$"+total;
}