let servicesButton=document.getElementById("servicesButton")
let homeButton=document.getElementById("homeButton")
let blogsButton=document.getElementById("blogsButton")
servicesButton.addEventListener("click",()=>{
    window.open("/services.html","_self")
})
homeButton.addEventListener("click",()=>{
window.open("/index.html","_self")
})
blogsButton.addEventListener("click",()=>{
    window.open("/blogs.html","_self")
})
