var app = angular.module('app',[])
app.controller('msg', function($scope, $rootScope){

    $scope.a = 1;
    $scope.b = 2;
    $scope.c = 3;

    $scope.$watch('a', function(newV, oldV){
        if(newV != oldV)
            console.log('a modified to '+newV)
    })
    $scope.$watch('b', function(newV, oldV){
        if(newV != oldV)
            console.log('b modified to '+newV)
    })
    $scope.$watch('c', function(newV, oldV){
        if(newV != oldV)
            console.log('c modified to '+newV)
    })

    $rootScope.$watch(function(){
        console.log('--digest iteration started---')
    })


//   $scope.emps = [
//       {empno:"1001", ename:"John"},
//       {empno:"1002", ename:"Jim"},
//       {empno:"1003", ename:"Will"},
//       {empno:"1004", ename:"Shawn"}
//   ]

//   $scope.addEmp = function(){
//       var newEmpNo = 1000 + $scope.emps.length +1;
//       var newEname = "ename"+newEmpNo;

//       $scope.emps.push({empno:newEmpNo, ename:newEname})
//   }
//   $scope.modify3rdEmp = function(){
//       $scope.emps[2].ename = "Test"
//   }

  //Deep/equality watcher
//   $scope.$watch('emps', function(newV, oldV){
//       console.log("No of employees: "+ $scope.emps.length)
//   }, true)

// $scope.$watchCollection('emps', function(newV, oldV){
//     console.log("No of employees: "+ $scope.emps.length)
// })
});
