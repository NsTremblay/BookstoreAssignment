'use strict';

/**
 * @ngdoc function
 * @name yomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yomanApp
 */
angular.module('yomanApp')
  .controller('CategoryController', [ '$scope', '$http', function ($scope, $http) {
    
  	$scope.categories = ['animals','business','celebreties','culture','education', 'espionage', 'family', 'fashion', 'health'];
  	


  	$scope.loadBooks = function(category){
  		$http({
		  method: 'GET',
		  url: 'http://api.nytimes.com/svc/books/v3/lists/{{category}}.json?&api-key='+key
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		    var tempBestBooks = [];
		    tempBestBooks = angular.fromJson(response.data).results.books;
		    var indexToIncrement = 0;
		    $scope.newBestBooks =[];
		    console.log(tempBestBooks);
		    for (var i = 0; i<tempBestBooks.length; i = i+4) {
		    	$scope[category][indexToIncrement] = [];
		    	$scope[category][indexToIncrement][0] = tempBestBooks[i];
		    	$scope[category][indexToIncrement][0].price = Math.round(Math.random()* 100) / 100;
		    	$scope[category][indexToIncrement][1] =tempBestBooks[i+1];
		    	$scope[category][indexToIncrement][1].price = Math.round(Math.random()*50 * 100) / 100;
		    	$scope[category][indexToIncrement][2] =tempBestBooks[i+2];
		    	$scope[category][indexToIncrement][2].price = Math.round(Math.random()*50 * 100) / 100;
		    	$scope[category][indexToIncrement][3] = tempBestBooks[i+3];
		    	$scope[category][indexToIncrement][3].price = Math.round(Math.random()*50 * 100) / 100;

		    	console.log(indexToIncrement);
		    	indexToIncrement++;
		    }
	    	console.log($scope[category]);
		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.

		  });

  	};

  }]);
