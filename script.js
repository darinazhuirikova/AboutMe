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



