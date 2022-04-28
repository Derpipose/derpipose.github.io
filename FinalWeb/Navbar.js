
window.addEventListener("load", function(){
    const toggle = document.querySelector(".toggle");
    const menu = document.querySelector(".menu");
    const items = document.querySelectorAll(".item");
    //main Nav menu
    function toggleMenu(){
        console.log("Hi I am running.")
        if(menu.classList.contains("active")){
            menu.classList.remove("active");
            //adds the menu icon
            toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
            forEach((items in menu), items.remove("hidden"));
        }
        else{
            menu.classList.add("active");
            //adds the close icon
            toggle.querySelector("a").innerHTML = "<i class = 'fas fa-times'></i>";
            forEach((items in menu), items.add("hidden"));
        }
        
    }
    
    toggle.addEventListener("click", toggleMenu, false);
    
});  




// toggle.addEventListener("click", function(){
//     if(menu.classList.contains("active")){
//         menu.classList.remove("active");
//         //adds the menu icon
//         toggle.querySelector("a").innerHTML = "<iclass = 'fas fa-bars'></i>";
//     }
//     else{
//         menu.classList.add("active");
//         //adds the close icon
//         toggle.querySelector("a").innerHTML = "<i class = 'fas fa-times'></i>";
//     }
// });



