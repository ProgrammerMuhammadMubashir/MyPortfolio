let servicesButton=document.getElementById("servicesButton")
let homeButton=document.getElementById("homeButton")
let blogsButton=document.getElementById("blogsButton")
let silverTierBtn=document.querySelector(".silverTierBtn")
let goldTierBtn=document.querySelector(".goldTierBtn")
let platinumTierBtn=document.querySelector(".platinumTierBtn")
    servicesButton.addEventListener("click",()=>{
        window.open("services.html","_self")
    })
    homeButton.addEventListener("click",()=>{
window.open("index.html","_self")
    })
    blogsButton.addEventListener("click",()=>{
        window.open("blogs.html","_self")
    })
    const mailOpener=(btn,type)=>{
        btn.addEventListener("click",()=>{
window.open(`mailto:itismuabshiratcode@gmail.com&subject=${type}&body=Write here about your website`,"_blank")
        })
    }
    mailOpener(silverTierBtn,"Silver Tier Plan")
    mailOpener(goldTierBtn,"Gold Tier Plan")
    mailOpener(platinumTierBtn,"Platinum Tier Plan")

