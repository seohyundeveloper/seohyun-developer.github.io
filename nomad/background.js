const images = [ "0.jpg", "1.jpg","2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)]

const bgImage = document.createElement("img"); //img 태그 만들기
bgImage.src= `img/${chosenImage}`;

document.body.appendChild(bgImage);  // 이미지를 바디에 붙이기
