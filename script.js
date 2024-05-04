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
    let h1 = document.getElementById("restit")
    let cookInput = document.getElementById("cookInput")
    if(counter == 0){
        counter++;
 
        let text = cookInput.value
 
        if(text == "мука"){
            h1.innerHTML = "мука есть, что дальше?"
            if(text == "яйцо"){
                h1.innerHTML = "яйцо есть, что дальше?"
                if(text == "молоко"){
                    h1.innerHTML = "молоко есть, что дальше?"
                    if(text == "масло"){
                        h1.innerHTML = "масло есть, что дальше?"
                        if(text == "корсахар"){
                            h1.innerHTML = "корсахар есть, что дальше?"
                            if(text == "выпекать"){
                                h1.innerHTML = "молодец, нажми кнопку снизу!"
                            }
                            else {
                                h1.innerHTML = "не правильно, посмотри рецепт!"
                            }
                        }
                        else {
                            h1.innerHTML = "не правильно, посмотри рецепт!"
                        }
                    }
                    else {
                        h1.innerHTML = "не правильно, посмотри рецепт!"
                    }
                }
                else {
                    h1.innerHTML = "не правильно, посмотри рецепт!"
                }
            }
            else {
                h1.innerHTML = "не правильно, посмотри рецепт!"
            }
        }
        else {
            h1.innerHTML = "не правильно, посмотри рецепт!"
        }
    }
    if(counter == 1){
         
    }
}
function bakeCake() {
    document.getElementById('result').style.display = 'block';
}



