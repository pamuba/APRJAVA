function AppCtrl($scope, $http){
    console.log("Hello from Controller")

    $http.get('/contactlist').success(function(response){
        // console.log("I got the data", response)
        $scope.contactlist = response;
    });
    $scope.addContact = function(){
        console.log($scope.contact)
        $http.post('/contactlist', $scope.contact)
    }

}