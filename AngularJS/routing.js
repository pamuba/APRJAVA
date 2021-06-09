var app = angular.module('app', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/first-msg', {
        // template:'<b>This is the First Message</b>'
        templateUrl:'msg1.html',
        controller: 'message1'
    })
    .when('/second-msg', {
        template:'<b>This is the Second Message</b>'
    })
    .when('/', {
        template:'<b>The Root URL</b>'
    })
}]);

app.controller('message1', function($scope){
    $scope.a = 10;
    $scope.b = 20;
})