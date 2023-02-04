var isBurgerMenu = true
document.getElementById("BurgerMenu").addEventListener("click", e => {
    if(isBurgerMenu){
        document.getElementById("MenuDesktop").style.display = "flex";

        document.getElementById("MenuCloseIcon").style.display = "none";
        document.getElementById("MenuOpenIcon").style.display = "inline-block";
        isBurgerMenu = false
    }else{
        document.getElementById("MenuDesktop").style.display = "none";

        document.getElementById("MenuCloseIcon").style.display = "inline-block";
        document.getElementById("MenuOpenIcon").style.display = "none";
        isBurgerMenu = true
    }
})