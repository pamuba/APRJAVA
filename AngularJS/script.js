//module
var myapp = angular.module('myModule',[]);

///connect the module with the controller
myapp.controller("myController", function($scope){
    var employee={
        firstName:"John",
        lastName:"Wick",
        dept:"Sales"
    }

    $scope.employee = employee;
})
myapp.controller("myController1", function($scope){
    $scope.message = "Second Controller";
})



