const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
//const toDoInput = toDoForm.querySelector("input"); //위와 동일함.
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");  //삭제버튼 생성
    button.innerText = "X";
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function hadleToDoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value)
    const newTodo = toDoInput.value; //비우기 전에 저장하기.(새로운 변수에 복사하기)
    toDoInput.value = ''; //입력하고 엔터 치면 비우도록 하기 
    console.log(newTodo, toDoInput.value)  //여기서 위의 toDoInput.value와는 다르게 찍힌다!! 
    // 8라인의 toDoInput 과 newTodo 와는 같이 같다.
    paintToDo(newTodo); //요소를 만들어서 입력된 todo-list를 담아서 함수를 호출해준다.
}

toDoForm.addEventListener("submit", hadleToDoSubmit); 