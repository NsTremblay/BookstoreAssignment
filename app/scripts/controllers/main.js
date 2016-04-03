'use strict';

/**
 * @ngdoc function
 * @name yomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yomanApp
 */
angular.module('yomanApp')
  .controller('MainCtrl', ['$scope', '$http',function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.numberInCart = 0;
    $scope.indexForBook=0;

    $scope.addToCart = function(bookToAdd, bookInd){

		$scope.numberInCart++;
		console.log(bookToAdd);
		console.log(bookInd);
		globalCart.push(angular.fromJson(bookToAdd));
		console.log(globalCart);

	};

	$scope.addBook = function(){
		$scope.numberInCart++;
	};
	
    // Simple GET request example:
	$http({
	  method: 'GET',
	  url: 'http://api.nytimes.com/svc/books/v3/lists/animals.json?&api-key='+key
	}).then(function successCallback(response) {
	    // this callback will be called asynchronously
	    // when the response is available
	    var tempBestBooks = [];
	    tempBestBooks = angular.fromJson(response.data).results.books;
	    var indexToIncrement = 0;
	    $scope.bestBooks =[];
	    console.log(tempBestBooks);
	    for (var i = 0; i<tempBestBooks.length; i = i+4) {
	    	$scope.bestBooks[indexToIncrement] = [];
	    	$scope.bestBooks[indexToIncrement][0] = tempBestBooks[i];
	    	$scope.bestBooks[indexToIncrement][0].price = (20+Math.round(Math.random()*20 * 100) / 100).toFixed(2);
	    	$scope.bestBooks[indexToIncrement][1] =tempBestBooks[i+1];
   	    	$scope.bestBooks[indexToIncrement][1].price = (20+Math.round(Math.random()*20 * 100) / 100).toFixed(2);
	    	$scope.bestBooks[indexToIncrement][2] =tempBestBooks[i+2];
	    	$scope.bestBooks[indexToIncrement][2].price = (20+Math.round(Math.random()*20 * 100) / 100-15).toFixed(2);
	    	$scope.bestBooks[indexToIncrement][3] = tempBestBooks[i+3];
	   	    $scope.bestBooks[indexToIncrement][3].price = (20+Math.round(Math.random()*20 * 100) / 100).toFixed(2);

	    	console.log(indexToIncrement);
	    	indexToIncrement++;
	    }
    	console.log($scope.bestBooks);
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.

	  });

		// Simple GET request example:
	$http({
	  method: 'GET',
	  url: 'http://api.nytimes.com/svc/books/v3/lists/culture.json?&api-key='+key
	}).then(function successCallback(response) {
	    // this callback will be called asynchronously
	    // when the response is available
	    var tempBestBooks = [];
	    tempBestBooks = angular.fromJson(response.data).results.books;
	    var indexToIncrement = 0;
	    $scope.newBestBooks =[];
	    console.log(tempBestBooks);
	    for (var i = 0; i<tempBestBooks.length; i = i+4) {
	    	$scope.newBestBooks[indexToIncrement] = [];
	    	$scope.newBestBooks[indexToIncrement][0] = tempBestBooks[i];
	    	$scope.newBestBooks[indexToIncrement][0].price = (20+Math.round(Math.random()*20 * 100) / 100).toFixed(2);
	    	$scope.newBestBooks[indexToIncrement][1] =tempBestBooks[i+1];
	    	$scope.newBestBooks[indexToIncrement][1].price = (20+Math.round(Math.random()*20 * 100) / 100).toFixed(2);
	    	$scope.newBestBooks[indexToIncrement][2] =tempBestBooks[i+2];
	    	$scope.newBestBooks[indexToIncrement][2].price = (20+Math.round(Math.random()*20 * 100) / 100-15).toFixed(2);
	    	$scope.newBestBooks[indexToIncrement][3] = tempBestBooks[i+3];
	    	$scope.newBestBooks[indexToIncrement][3].price = (20+Math.round(Math.random()*20 * 100) / 100).toFixed(2);

	    	console.log(indexToIncrement);
	    	indexToIncrement++;
	    }
    	console.log($scope.newBestBooks);
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.

	  });
	

  }]);
