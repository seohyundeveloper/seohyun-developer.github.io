const images = [ "0.jpg", "1.jpg","2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)]
//console.log(chosenImage, '893487598374598')
const bgImage = document.createElement("img"); //img 태그 만들기
bgImage.src= `img/${chosenImage}`;
//const container = document.querySelector(".container");
document.body.appendChild(bgImage);  // 이미지를 바디에 붙이기
//container.appendChild(bgImage)