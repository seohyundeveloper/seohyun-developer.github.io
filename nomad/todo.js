const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
//const toDoInput = toDoForm.querySelector("input"); //위와 동일함.
const toDoList = document.getElementById("todo-list");

function hadleToDoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value)
    const newTodo = toDoInput.value; //비우기 전에 저장하기.(새로운 변수에 복사하기)
    toDoInput.value = ''; //입력하고 엔터 치면 비우도록 하기 
    console.log(newTodo, toDoInput.value)  //여기서 위의 toDoInput.value와는 다르게 찍힌다!! 
    // 8라인의 toDoInput 과 newTodo 와는 같이 같다.
}

toDoForm.addEventListener("submit", hadleToDoSubmit);