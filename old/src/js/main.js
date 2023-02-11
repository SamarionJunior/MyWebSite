// var isBurgerMenu = true
// document.getElementById("BurgerMenu").addEventListener("click", e => {
//     if(isBurgerMenu){
//         document.getElementById("MenuMobile").style.left = "0";

//         document.getElementById("MenuCloseIcon").style.display = "none";
//         document.getElementById("MenuOpenIcon").style.display = "inline-block";
//         isBurgerMenu = false
//     }else{
//         document.getElementById("MenuMobile").style.left = "-5rem";

//         document.getElementById("MenuCloseIcon").style.display = "inline-block";
//         document.getElementById("MenuOpenIcon").style.display = "none";
//         isBurgerMenu = true
//     }
// })

// window.addEventListener('resize', function(event) {
//     if(window.matchMedia("(min-width: 769px)").matches){
//         document.getElementById("MenuMobile").style.left = "-5rem";

//         document.getElementById("MenuCloseIcon").style.display = "inline-block";
//         document.getElementById("MenuOpenIcon").style.display = "none";
//         isBurgerMenu = true
//     }
// });

// // && window.matchMedia("(max-width: 768px)").matches

// document.getElementsByTagName("body")[0].addEventListener("click", e => {
    
//     // console.log(e.target.classList.contains("ContentLinks"))
    
//     if(window.matchMedia("(max-width: 768px)").matches){
//         console.log(e.target.id)
//         if (e.target.id !== "MenuMobile" && e.target.id !== "BurgerMenu" && e.target.id !== "savearea" && e.target.id !== "MenuCloseIcon" && e.target.id !== "MenuOpenIcon") {
//             console.log("oi")
//             document.getElementById("MenuMobile").style.left = "-5rem";

//             document.getElementById("MenuCloseIcon").style.display = "inline-block";
//             document.getElementById("MenuOpenIcon").style.display = "none";
//             isBurgerMenu = true
//         }
//     }
// })