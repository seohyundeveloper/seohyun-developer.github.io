const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
//    const currentColor = h1.style.color;
//    let newColor;
//     if(currentColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
   // js로 스타일 하는 것은 비효율적임!! 따라서 css파일을 사용해준다.

 //  const clickedClass = "clicked"  //변수에다 넣어서 해줘야 오류룰 줄일 수 있다.
//    if(h1.className === clickedClass){
//        h1.className = "";
//    } else {
//        h1.className = clickedClass;
//    }
//     const clickedClass = "clicked"  //변수에다 넣어서 해줘야 오류룰 줄일 수 있다.
//    if(h1.classList.contains(clickedClass)){ //classList에 clickedClass가 포함되었는지 확인
//         h1.classList.remove(clickedClass); // 제거하기 
//     } else {
//         h1.classList.add(clickedClass);  // 추가하기
//     }

    h1.classList.toggle("clicked");   //위의 내용을 toggle이 대체해준다.
}

h1.addEventListener("click", handleTitleClick);