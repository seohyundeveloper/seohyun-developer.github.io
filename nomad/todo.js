const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
//const toDoInput = toDoForm.querySelector("input"); //위와 동일함.
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; 

let toDos = [];  //todo-list가 저장되도록 하기 위해서 ( 업데이트를 하기위해 let을 사용)
//항상 함수가 호출되면서 빈배열에 추가하다보니 업데이트 되면 기존꺼는 사라지는 문제점이 있음
//해결책은 라인 57에 toDos = parsedToDos; 그전것을 미리 담아준다!!!
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  //로컬스토리지에 저장하기
                                //JSON.stringify()는 텍스트를 스트링으로 바꿔준다.
}

function deleteTodo(event){
  //  console.dir(event.target.parentElement);   //event일어나는 버튼의 부모가 나온다.
  //   console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement; 
     // console.log(li.id) //삭제시 id를 얻을 수 있다.
    li.remove();    //li를 지운다.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos(); // 로컬스토리지에서 지운후에 저장하기 함수를 한번더 호출해줘야 한다
}

function paintToDo(newTodo){  //여기서 오브젝트를 받는다.
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; 
    const button = document.createElement("button");  //삭제버튼 생성
    button.innerText = "X";
    button.addEventListener("click", deleteTodo), //그냥 식제버튼을 누르면 어떤 버튼인지 모름!
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function hadleToDoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value)
    const newTodo = toDoInput.value; //비우기 전에 저장하기.(새로운 변수에 복사하기)
    toDoInput.value = ''; //입력하고 엔터 치면 비우도록 하기 
    console.log(newTodo, toDoInput.value)  //여기서 위의 toDoInput.value와는 다르게 찍힌다!! 
    // 8라인의 toDoInput 과 newTodo 와는 같이 같다.
    
    const newTodoObj = {   //id를 유니크하게 주기위해서 Date.now()함수 사용
        text: newTodo,    // 오브젝트형태로 만들어준다.
        id: Date.now()
    }

    toDos.push(newTodoObj);   // 배열에 todo-list를 추가해서 저장해주기
    paintToDo(newTodoObj); //요소를 만들어서 입력된 todo-list를 담아서 함수를 호출해준다.
    saveToDos();   // 입력한 todo-list를  로컬 스토리지에 저장하기 위해서 함수를 호출한다.
}

toDoForm.addEventListener("submit", hadleToDoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);  // 배열로 만들어주는것
    console.log(parsedToDos);
    // parsedToDos.forEach((item) => {  //각가의 todo-list에 작용하도록 반복문을 돌려준다.
    //     console.log("this is the turn of", item);
    // });
    toDos = parsedToDos; // 로컬스토리지에 todo-list가 있으면 전에있던 todo-list를 복원시켜준다.
    parsedToDos.forEach(paintToDo)
}
