const menu = document.querySelector('.menu');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const cart = document.querySelector('.shopping-cart');
const cartContents = document.querySelector('.shopping-cart-modal');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const numOfItems = document.querySelector('.num-of-items');
const deleteBtn = document.querySelector('.delete');
const addTo = document.querySelector('.add-to');
const itemsInCart = document.querySelector('.items-in-cart');
const cartContent = document.querySelector('.cart-contents');
const cartText = document.querySelector('.cart-text');
let itemNumber = document.querySelector('.item-number');
let total = document.querySelector('.total');
let cartInterior = document.querySelector('.cart-interior');
let image = document.querySelector('.image');
let modal2 = document.querySelector('.modal-2');
let thumbnail = document.querySelector('.thumbnail');
let modalClose = document.querySelector('.modal-close');
let value = numOfItems.innerHTML;

menu.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);
cart.addEventListener('click', openCart);
deleteBtn.addEventListener('click', deleteItem);
addTo.addEventListener('click', updateCart);
image.addEventListener('click', openModal2);
modalClose.addEventListener('click', closeModal2);
plus.addEventListener('click', incrementButton);
minus.addEventListener('click', decrementButton);

function openMenu() {
    modal.style.display = 'block';
}

function closeMenu() {
    modal.style.display = 'none';
}

function deleteItem() {
    cartInterior.style.display = 'none';
    cartText.style.display = 'flex';
    itemsInCart.innerHTML = 0;
    numOfItems.innerHTML = 0;
}

function openCart() {
    cartContents.style.display = 'block';
}

function incrementButton() {
    value++;
    numOfItems.innerHTML = value;
}

function decrementButton() {
    value--;
    numOfItems.innerHTML = value;
    if(value < 1){
        value++;
    }
}

function updateCart() {
    itemsInCart.innerHTML = value;
    itemNumber.innerHTML = value;
    total.innerHTML = `$${(value * 125)}.00`;
    if(cartText.style.display == 'flex'){
        cartText.style.display = 'none';
        cartInterior.style.display = 'block';
    }
}

function openModal2() {
    modal2.style.display = 'block';
}

function closeModal2() {
    modal2.style.display = 'none';
}

window.onclick = function(e){
    if(e.target == modal2){
        modal2.style.display = 'none';
    }
}

window.onclick = function(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

window.onclick = function(e) {
    if(e.target == cartContents) {
        cartContents.style.display = 'none';
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function openModal() {
    document.querySelector(".modal-1").style.display = "block";
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let modalImg = document.getElementsByClassName('modal-img');
    if (n > modalImg.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = modalImg.length;
    } 
    for (i = 0; i < modalImg.length; i++){
        modalImg[i].style.display = "none";
    }
    if (n > slides.length){
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    modalImg[slideIndex-1].style.display = "block";
}