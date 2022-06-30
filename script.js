var animalImg = document.querySelector("#fav-animal");

console.log(animalImg);

function pickNeila(element) {
    // console.log(element.style);
    //element.style.backgroundColor = "goldenrod";
    element.remove();
    animalImg.src = "Neila.jpeg";
}    
function pickGoose(element) {
    console.log(element.classList);
    element.classList.add("btn");
    animalImg.src = "Goose.jpeg";
}
