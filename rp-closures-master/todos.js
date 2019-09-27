// generateID is a *function* that, when invoked, returns a number representing
// an ID.
var generateID = makeCounter();
// By using a counter, we have a function that will always generate a new number
// -- this is great for generating unique IDs for things.

// Try the following at your console:

// generateID(); // => ?

// What does it return? Try invoking generateID a few more times to be certain
// of how it works.

// EXERCISE 1
var todos = [];
function todoFactory(task) {

  return {
    task: task,
    complete: false,            // todos always start as incomplete
    id: generateID(),
    piriority :0            // use generateID to make an ID for this todo
  };
}

var task1 = todoFactory("task1")
var task2 = todoFactory("task2")
var task3 = todoFactory("task3")
var task4 = todoFactory("task4")
todos.push(task1)
todos.push(task2)
todos.push(task3)
todos.push(task4)

// EXERCISE 2
function displayTodo(todo) {
  // your code here
  return todo.id+"."+todo.task +" "+ todo.complete
}

// var myTodoList = makeTodoList(???);

// makeTodoList accepts an *array* of todo objects as a parameter, and returns
// an object with methods for manipulating todos
function makeTodoList(initialTodos) {
  var todos = initialTodos;
  var archive = [];

  var HIGH_P=3
  var MED_P=2
  var DEFAULT_P =0

  return {
    display: function() {
      // EXERCISE 3
      var str = ""
      for (var i = 0; i < todos.length; i++) {
        str+= displayTodo(todos[i])+"\n"
      }
      return str;
    },
    add: function(task) {
      // EXERCISE 4
      todos.push(todoFactory(task))
      return todos;
    },
    remove: function(id){
      for (var i = 0; i < todos.length; i++) {
        if(todos[i].id === id){
           archive.push(todos[i])
          todos.splice(i,1)
        }
      }
      return todos
    },
    toggleComplete :function(id){
      for (var i = 0; i < todos.length; i++) {
        if(todos[i].id === id){
          todos[i].complete = !todos[i].complete
        }
      }
      return todos;
    },
    removeAll: function(){
      archive = archive.concat(todos)
      console.log(archive)
      todos = [];
      return todos;
    },
    removeComplete: function() {
      var items =[];
      for (var i = 0; i < todos.length; i++) {
        if(todos[i].complete){
            archive.push(todos[i])
        }else{
          items.push(todos[i])
        }
    }
            todos = items
       return todos;
  },
  displayArchive:function (){
    return archive;
  },
  clearArchived : function() {
    archive = [];
  },
  moveTodo(from, to ){
    var item = todos[from]
     todos.splice(from,1)
    todos.splice(to,0,item)
  },
  makePirioriy: function(id,p) {
    for (var i = 0; i < todos.length; i++) {
      todos[i].piriority=p
    }
  }

  };
}

// =============================================================================
// HELPER FUNCTIONS

function makeCounter() {
  var count = 0;
  return function() {
    var t = count;
    count = count + 1;
    return t;
  };
}
