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

function Insta() {
    let a = [ 
        "https://img.freepik.com/free-vector/hand-drawn-cartoon-ant-illustration_23-2150362250.jpg", 
        "https://cdn2.vectorstock.com/i/1000x1000/79/61/cartoon-of-ants-colony-on-the-tree-vector-39727961.jpg", 
        "https://cdn5.vectorstock.com/i/1000x1000/99/34/funny-black-ant-climbing-a-tree-with-rope-cartoon-vector-27229934.jpg", 
    ];

    let texts = [
        "Первый текст",
        "Второй текст",
        "Третий текст"
    ];

    let gameBox = document.getElementById("gameBox");

    for(let i = 0; i < 100; i++) {
        let newImg = document.createElement("img");
        newImg.setAttribute("src", a[i]);

        let textDiv = document.createElement("div");
        textDiv.textContent = texts[i];
        textDiv.classList.add("littletext7")

        let containerDiv = document.createElement("div");
        containerDiv.classList.add("image-container");
        containerDiv.appendChild(newImg);
        containerDiv.appendChild(textDiv);

        gameBox.appendChild(containerDiv);
    }
}
