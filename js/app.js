"use strict";

var app = angular.module("app", ['ui.router']);

app.config(function($stateProvider) {
    //$stateProvider
        //.state('budgetForm', { url: '/budget-form', templateUrl: 'html/budget-form.html', controller: 'budgetFormCtrl'})

}).controller("appCtrl", function($scope, $state) {

    $scope.init = function (){
        console.log("test");
    };


    $scope.number = 50;
    $scope.lowGuess = 0;
    $scope.highGuess = 100;

    $scope.guesses = [];

    $scope.guess = function(number){
        alert(number);
    }

});
