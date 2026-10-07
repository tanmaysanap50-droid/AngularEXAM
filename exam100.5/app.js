angular.module("sharedApp", [])
.service("DataService", function () { this.msg = "Hello from the Service!"; })
.controller("FirstController", function ($scope, DataService) { $scope.d = DataService; })
.controller("SecondController", function ($scope, DataService) { $scope.d = DataService; });