

let boxes = document.querySelector("#Container").children

function getRandomColor(){
    let roh1 = Math.ceil(50 + Math.random()* 300)
    let roh2 = Math.ceil(50 + Math.random()* 300)
    let roh3 = Math.ceil(50 + Math.random()* 300)
    return  `rgb(${roh1}, ${roh2}, ${roh3})`
}

function updateBoxes(){

Array.from(boxes).forEach(e=>{
e.style.backgroundColor = getRandomColor()
e.style.color = getRandomColor()
e.style.transform = `rotate(${Math.random() * 10 - 5}deg)`
e.style.boxShadow = "10px 12px 10px rgba(9, 12, 11, 0.84)"
e.style.borderRadius = "10px"
e.style.textTransform = "uppercase";
})
}

setInterval(updateBoxes, 500);

const images = [
    "photos/rohit_birthday_1.jpg.jpg",
    "photos/rohit_birthday_2.jpg.jpg ",
    "photos/rohit_birthday_3.jpg.jpg ",
    "photos/rohit_birthday_4.jpg.jpg ",
    "photos/rohit_birthday_5.jpg.jpg ",
    "photos/rohit_birthday_6.jpg.jpg ",
     
     
];

let index = 0;
const imgElement = document.getElementById("slideshow");

function changeImage() {
    index = (index + 1) % images.length;  
    imgElement.style.opacity = 0;  
    setTimeout(() => {
        imgElement.src = images[index];
        imgElement.style.opacity = 1; 
    }, 500);
}

 
setInterval(changeImage, 2000);
