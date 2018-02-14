"use strict";

var app = angular.module("app", ['ui.router']);

app.config(function($stateProvider) {
    //$stateProvider
        //.state('budgetForm', { url: '/budget-form', templateUrl: 'html/budget-form.html', controller: 'budgetFormCtrl'})

}).controller("appCtrl", function($scope, $state) {

  $scope.lowElement = null;
  $scope.middleElement = null;
  $scope.highElement = null;

  $scope.currentGuess = null;
  $scope.number = -1;
  $scope.lowGuess = 0;
  $scope.highGuess = 100;

  $scope.guesses = [];


    $scope.init = function (){
        console.log("Version 0.0.3");

        $scope.lowElement = angular.element('#low');
        $scope.middleElement = angular.element('#middle');
        $scope.highElement = angular.element('#high');

        $scope.number = 1;//(Math.floor(Math.random() * 98) + 1);
    };

    $scope.guess = function(){
        if(isNaN($scope.currentGuess) || $scope.currentGuess <= $scope.lowGuess || $scope.currentGuess >= $scope.highGuess){
          alert('Please Enter a Number between ' + $scope.lowGuess + '-' + $scope.highGuess + '. You entered: \'' + $scope.currentGuess + '\'');

          console.log('is nan: ' + isNaN($scope.currentGuess));
          console.log('Number: ' + $scope.number);
        }
        else{
          //is valid guess
          if($scope.currentGuess == $scope.number){
            alert('You win! The number was ' + $scope.number + ' You won in ' + ($scope.guesses.length + 1) + ($scope.guesses.length === 0 ? ' guess!' : ' guesses!'));
            $scope.middleElement.html($scope.number);

          }
          else if($scope.currentGuess < $scope.number){
            $scope.adjustLow($scope.currentGuess);
          }
          else{
            $scope.adjustHigh($scope.currentGuess);
          }
        }

        $scope.currentGuess = "";
    }



    $scope.adjustLow = function(guess){
      $scope.lowElement.html(guess);
      $scope.lowGuess = guess;

      $scope.lowElement.css('width', (guess) + '%');
      $scope.middleElement.css('width', 94-(100-$scope.highGuess)-$scope.lowGuess+ '%');

      $scope.guesses.push(guess);
    }
    $scope.adjustHigh = function(guess){
      $scope.highElement.html(guess);
      $scope.highGuess = guess;

      $scope.highElement.css('width', (100-guess) + '%');
      $scope.middleElement.css('width', 94-(100-$scope.highGuess)-$scope.lowGuess+ '%');

      $scope.guesses.push(guess);
    }
});
