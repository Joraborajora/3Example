const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");


// cartButton.addEventListener ('click', function(event){ 
//     // console.log ("Ты кликнул по кнопке!");


//     modal.classList.add ("is-open");
// });


// close.addEventListener ('click', function(event){ 
  

//     modal.classList.remove ("is-open");
// });


cartButton.addEventListener ('click', toggleModal);
close.addEventListener ('click', toggleModal);

function toggleModal() {
    modal.classList.toggle ("is-open");
};


new WOW().init();