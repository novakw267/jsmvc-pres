//Controler portion
//This is setting up the Controler
// Could have an entire app on one page
// usually you would have three seperate controllers
// Angular does a router
//Passing this a named function
//$scope (object) state of everything you're working on - dependancy injection this will analyze the name of your params
// and inject the correct parameters as long as you have the correct name
ngTodo.controller('NgTodoCtrl', function NgTodoCtrl($scope) {
  $scope.todos = [
    { val: "A new cool thing", completed: false},
    { val: "A newer cool thing", completed: true},
    { val: "A new cool thing", completed: false},
    { val: "A newer cool thing", completed: false},
    { val: "A newest cool thing", completed: false},
    { val: "A new cool thing", completed: true},

  ];
});
