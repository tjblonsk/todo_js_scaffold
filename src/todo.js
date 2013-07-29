var todoApp = {
// - Implement the todoApp createTask method to:
//   - create a new instance of a todoItem object
//   - Use the new task objects setTaskText method to set the task text from the argument
//   - call the todoApp appendTask method passing the new task object as an argument
  todos: [],
  createTask: function(){
    var newTodo = Object.create(todoItem);
    console.log("creating newTodo" + newTodo);
    newTodo.setTaskText(input);
    this.todos.push(newTodo);
  },
  createCompleteButton: function(){
    var completeButton = document.createElement('button');
    completeButton.className = "completeButton";
    completeButton.innerText = "Task completed";
  },
  appendTask: function(){
    var parent = document.getElementById('todo-items');
    var tag = document.createElement('li');
    for (var i = 0; i < this.todos.length; i++) {
    tag.innerText = this.todos[i].taskText;
    parent.appendChild(tag);
    tag.appendChild(completeButton);
    }
  }
};




var todoItem = {
  taskText: "",
  setTaskText: function(taskInput){
    this.taskText = taskInput;
  }
};




if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}


  var addItemButton;
  var input;
window.onload = function(){

  // - Use the window.onload event to pick out an 'add-item' button
// - Add an onclick event handler that will call a todoApp createTask method and input from the 'new-task-field' field as an argument
  addItemButton = document.getElementById('add-item');
  addItemButton.onclick = function(event) {
    input = document.getElementById('new-task-field').value;
    todoApp.createTask();
    console.log(input);
    todoApp.appendTask();
  };

};