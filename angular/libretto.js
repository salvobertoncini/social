var app= angular.module('libretto',['ngRoute']);

angular.module('libretto', [])
  .controller('librettoCtrl', function() {
    var todoList = this;
    todoList.todos = [{nome:"Diritto Penale", crediti:"12", voto:"30", data:"21-03-2015", prof:"M. Bianchi", note:"Eccellente!", done:false}];
 
    todoList.addTodo = function() {
      todoList.todos.push({nome:todoList.todoNome, crediti:todoList.todoCrediti, voto:todoList.todoVoto, data:todoList.todoData, prof:todoList.todoProf, note:todoList.todoNote, done:false});
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.media = function(){
      var media=0;
      angular.forEach(todoList.todos, function(todo){
        media += todo.crediti;
      });
      media/=todoList.todos.length;
      return media;
    }
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });