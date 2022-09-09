var modalBtn = document.getElementById("modalButton");
var modalBg = document.getElementById("modalBg")


modalBtn.addEventListener("click", () => {
    openModal.reverse();
    scrollEnable();
})

modalBg.addEventListener("click", () => {
    openModal.reverse(); 
    scrollEnable();
})

/*

function getImageHeight() {
    var imageContainer = document.getElementById("imageContainerAboutMe");
    var image = document.getElementById("imageAboutMe");
    var imageHeightTenPercent = image.offsetheight / 10 ;
    var Containerheight = imageHeightTenPercent + image.offsetheight;

    imageContainer.style.height = ContainerHeight;}

    

getImageHeight();*/