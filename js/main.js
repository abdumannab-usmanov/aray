var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elResult = document.querySelector(".result");

var tog = []
var juft = []

elForm.addEventListener("submit", function (evt){
    evt.preventDefault()

    if (elInput.value <= 0 || isNaN(elInput.value)) {
     
        elResult.textContent = "nuldan katta son kiriting";
    }

    else if (elInput.value % 2 == 0){
        elResult.textContent = elInput.value + " juft son"
        juft.push(elInput.value) ;
        

    }

    else{
        elResult.textContent = elInput.value + " tog son"
        tog.push(elInput.value) ;
        
    }

    elInput.value=""
})

