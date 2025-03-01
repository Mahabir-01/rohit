//  Function to generate a random color
// function getRandomColor() {
//     let letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// // Select all elements with ID "Box"
// document.querySelectorAll(".Box").forEach((box) => {
//     box.style.backgroundColor = getRandomColor();
//     box.style.color = getRandomColor();
// });

 

//   let boxes = document.getElementsByClassName("Box")
// let boxes = document.querySelector("#Container").children;
//   console.log(boxes);

//    function getRandomColor(){
//     let val1 = Math.ceil(0 + Math.random()* 255);
//     let val2 = Math.ceil(0 + Math.random()* 255);
//     let val3 = Math.ceil(0 + Math.random()* 255);
//     return `rgb(${val1}, ${val2}, ${val3})`
//    }


// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getRandomColor()
//     e.style.color = getRandomColor()
// })



// let boxes = document.querySelector("#Container").children

// console.log(boxes);


// function getRandomColor(){
//     let val1 = Math.ceil(50 + Math.random()* 300)
//     let val2 = Math.ceil(50 + Math.random()* 300)
//     let val3 = Math.ceil(50 + Math.random()* 300)
//     return `rgb(${val1}, ${val2}, ${val3})`
// }

// Array.from(boxes).forEach(e=>{
//      e.style.backgroundColor = getRandomColor()
//     //  e.style.color = getRandomColor()
// })


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
    index = (index + 1) % images.length; // Loop back to the first image
    imgElement.style.opacity = 0; // Fade out
    setTimeout(() => {
        imgElement.src = images[index];
        imgElement.style.opacity = 1; // Fade in
    }, 500);
}

// Change image every 3 seconds
setInterval(changeImage, 2000);
