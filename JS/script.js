let myDynamicFields = document.querySelector('.myDynamicFields');
const arrayOfFields = ["Web Development", "UI/UX Design","Frontend Development","Backend Development","Web Designing"];
const typingSpeed = 100; // Typing speed in ms
const pauseBetweenFields =1000; // Pause before switching to next field

let fieldIndex = 0;
let charIndex = 0;

// const clientSatisfaction=document.querySelector(".clientSatisfaction")
// const deliveryTime=document.querySelector(".deliveryTime")
// const designAndProgramming=document.querySelector(".designAndProgramming")

function typeWriter() {
    if (fieldIndex < arrayOfFields.length) {
        let currentField = arrayOfFields[fieldIndex];

        if (charIndex < currentField.length) {
            myDynamicFields.textContent += currentField.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            setTimeout(() => {
                deleteText();
            }, pauseBetweenFields);
        }
    }
}

function deleteText() {
    if (charIndex > 0) {
        myDynamicFields.textContent = myDynamicFields.textContent.slice(0, -1);
        charIndex--;
        setTimeout(deleteText, 50);
    } else {
        fieldIndex = (fieldIndex + 1) % arrayOfFields.length; 
        setTimeout(typeWriter, typingSpeed);
    }
}

window.addEventListener("load", () => {
    typeWriter();

  
});




let acc = document.getElementsByClassName("accordion");
    let i;
    
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    let servicesButton=document.getElementById("servicesButton")
    let homeButton=document.getElementById("homeButton")
    let blogsButton=document.getElementById("blogsButton")
    let  qabWhy=document.getElementsByClassName("qab")[0]
    let  qabContact=document.getElementsByClassName("qab")[1]
    servicesButton.addEventListener("click",()=>{
        window.open("services.html","_self")
    })
    homeButton.addEventListener("click",()=>{
window.open("index.html","_self")
    })
    blogsButton.addEventListener("click",()=>{
        window.open("blogs.html","_self")
    })
    qabWhy.addEventListener("click",()=>{
window.open("services.html","_self")
    })
    qabContact.addEventListener("click",()=>{
        window.open("mailto:itismubashiratcode@gmail.com","_blank")
    })
