function checkIngredient() {
    var ingredientInput = document.getElementById("ingredientInput");
    var ingredient = ingredientInput.value.trim().toLowerCase();

    var validIngredients = ["flour", "sugar", "egg", "butter", "milk", "cream"];
    
    if (validIngredients.includes(ingredient)) {
        document.getElementById("result").innerText = "This ingridient suits for your cake!";
    } else {
        document.getElementById("result").innerText = "This ingridient doesn't suit for your cake, Try again!";
    }
}


counter = 0; 
function cook(){ 
    let h9 = document.getElementById("restit") 
    let cookInput = document.getElementById("cookInput") 
 
        let text = cookInput.value 
 
        if(text == "мука"){
            h9.innerHTML = "мука есть, что дальше?" 
            if(text == "яйцо"){
                h9.innerHTML = "яйцо есть, что дальше?" 
                if(text == "молоко"){
                    h9.innerHTML = "молоко есть, что дальше?" 
                    if(text == "масло"){
                        h9.innerHTML = "масло есть, что дальше?" 
                        if(text == "корсахар"){
                            h9.innerHTML = "корсахар есть, что дальше?" 
                            if(text == "выпекать"){
                                h9.innerHTML = "молодец, нажми кнопку снизу!" 
                                btn2.classList.remove("hidden")
                            }
                            else {
                                h9.innerHTML = "не правильно, посмотри рецепт!" 
                            }
                        }
                        else {
                            h9.innerHTML = "не правильно, посмотри рецепт!" 
                        }
                    }
                    else {
                        h9.innerHTML = "не правильно, посмотри рецепт!" 
                    }
                }
                else {
                    h9.innerHTML = "не правильно, посмотри рецепт!" 
                }
            }
            else {
                h9.innerHTML = "не правильно, посмотри рецепт!" 
            }
        }
        else {
            h9.innerHTML = "не правильно, посмотри рецепт!" 
        }
    } 
function bakeCake() {
    if(counter == 0){ 
        counter++; 
        h9.innerHTML = "молодцы, вы сделали торт!" 
    } 
    if(counter == 1){ 
         
    } 
}

