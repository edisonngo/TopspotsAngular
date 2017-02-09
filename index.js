var app = angular.module('myFirstApp', [])

app.controller('myCtrl', function($http, $scope) {
  $http.get("topspots.json").success(function(data){
    $scope.items = data
});
});
