var panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach(function(panel){
panel.addEventListener("click", function(){
    removeActiveClass()
    panel.classList.toggle("active");
})
}

)

function removeActiveClass(){
    panels.forEach(function(panel){
     panel.classList.remove("active");
    })
}