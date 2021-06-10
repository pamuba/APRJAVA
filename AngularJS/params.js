var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/sumurl/:a/:b', {
        templateUrl:'sumurl.html',
        controller:"sumurl"
    })
    .when('/suminput', {
        templateUrl:'suminput.html',
        controller:"suminput"
    })
    .when('/', {
        template:'<b>Welcome to the APP</b><i>Click on the Links</i>'
    })
    .otherwise({
        template:'<b>No Content Available</b><i>Click on the Links</i>'
    })
});

app.controller('sumurl', function($scope, $routeParams){
    $scope.a = $routeParams.a
    $scope.b = $routeParams.b
})


app.controller('suminput', function($scope, $location, $interpolate){
    $scope.a = 0;
    $scope.b = 0;
    $scope.doSum = function(){
        var url = $interpolate('/sumurl/{{a}}/{{b}}')($scope)
        console.log(url)
        $location.path(url);
    }
})