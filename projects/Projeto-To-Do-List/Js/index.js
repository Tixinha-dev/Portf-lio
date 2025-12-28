class Todo {
  constructor() {
    this.totalTasks = document.querySelectorAll(".task");
  }

  addTask(taskText) {
    let template = document.querySelector(".task").cloneNode(true);
    template.classList.remove("hide");

    let templateText = template.querySelector(".task-title");
    templateText.textContent = taskText;

    let list = document.getElementById("task-container");

    list.appendChild(template);
    this.addEvents();
    this.checkTask('add')
  }
  removeTask(task) {
    let parentEl = task.parentElement;
    parentEl.remove();

    this.checkTask('remove')
  }
  completeTask(task) {
    task.classList.add("done");
  }
  addEvents() {
    let removeBtns = document.querySelectorAll(".bi-trash");
    let removeBtn = removeBtns[removeBtns.length - 1];
    let doneBtns = document.querySelectorAll(".bi-check");
    let doneBtn = doneBtns[doneBtns.length - 1];

    removeBtn.addEventListener("click", function () {
      todo.removeTask(this);
    });
    doneBtn.addEventListener("click", function () {
      todo.completeTask(this);
    });
  }
  checkTask(commad) {
    let msg = document.querySelector("#empty-tasks");
    console.log(this.totalTasks.length)
    if(commad === 'add'){
      this.totalTasks+=1
    }else if(commad === 'remove'){
      this.totalTasks -=1
    }
    if(this.totalTasks == 1){
      msg.classList.remove("hide")
    }else{
      msg.classList.add("hide")
    }
  }
}

let todo = new Todo();

let addBtn = document.getElementById("add");

addBtn.addEventListener("click", (ev) => {
  ev.preventDefault();

  let taskText = document.getElementById("task").value;

  if (taskText !== "") {
    todo.addTask(taskText);
  }
  document.getElementById("task").value = "";
});

// class Todo{
//     constructor(){
//         this.totalTask = document.querySelectorAll(".taks")
//     }
// }

// let todo = new Todo

// let addBtn = document.getElementById("add")

// addBtn.addEventListener("click",(ev)=>{
//     ev.preventDefault
//     let taskText = document.getElementById("task")

//     if(taskText !=''){
//         Todo.addTask(taskText.innerText)
//     }
// })
