'use strict';

/**
 * @ngdoc function
 * @name yomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yomanApp
 */
angular.module('yomanApp')
  .controller('BookController', [ '$scope', '$http', function ($scope, $http) {
    $scope.book = {
    	"rank": 1,
    	"rank_last_week": 0,
    	"weeks_on_list": 0,
    	"asterisk": 0,
    	"dagger": 0,
    	"primary_isbn10": "0802124739",
    	"primary_isbn13": "9780802124739",
    	"publisher": "Grove\/Atlantic",
    	"description": "A grief-stricken British woman decides to raise a goshawk, a fierce bird that is notoriously difficult to tame.",
    	"price": 25,
    	"title": "H IS FOR HAWK",
    	"author": "Helen Macdonald",
    	"contributor": "by Helen Macdonald",
    	"contributor_note": "",
    	"book_image": "http:\/\/du.ec2.nytimes.com.s3.amazonaws.com\/prd\/books\/9780802123411.jpg",
    	"amazon_product_url": "http:\/\/www.amazon.com\/H-Is-Hawk-Helen-Macdonald\/dp\/0802123414?tag=thenewyorktim-20",
    	"age_group": "",
    	"book_review_link": "",
    	"first_chapter_link": "",
    	"sunday_review_link": "http:\/\/www.nytimes.com\/2015\/02\/22\/books\/review\/helen-macdonalds-h-is-for-hawk.html",
    	"article_chapter_link": "",
    	"isbns": [{
    		"isbn10": "0802123414",
    		"isbn13": "9780802123411"
    	}, {
    		"isbn10": "1448130727",
    		"isbn13": "9781448130726"
    	}, {
    		"isbn10": "1481530968",
    		"isbn13": "9781481530965"
    	}, {
    		"isbn10": "148153095X",
    		"isbn13": "9781481530958"
    	}, {
    		"isbn10": "1410483614",
    		"isbn13": "9781410483614"
    	}, {
    		"isbn10": "0802124739",
    		"isbn13": "9780802124739"
    	}]
    };

    $scope.loadBooks = function(category){
  		$scope.title = category;
  		console.log(category);
  		$http({
		  method: 'GET',
		  url: 'http://api.nytimes.com/svc/books/v3/lists/'+category+'.json?&api-key='+key
		}).then(function successCallback(response) {
		    // this callback will be called asynchronously
		    // when the response is available

		    var tempBestBooks = [];
		    tempBestBooks = angular.fromJson(response.data).results.books;
		    var indexToIncrement = 0;
		    $scope.category =[];
		    console.log(tempBestBooks);
		    console.log('http://api.nytimes.com/svc/books/v3/lists/'+category+'.json?&api-key='+key);
		    for (var i = 0; i<tempBestBooks.length; i = i+4) {
		    	$scope.category[indexToIncrement] = [];
		    	$scope.category[indexToIncrement][0] = tempBestBooks[i];
		    	$scope.category[indexToIncrement][0].price = 10 + Math.round(Math.random()* 20*  100) / 100;
		    	$scope.category[indexToIncrement][1] =tempBestBooks[i+1];
		    	if(tempBestBooks[i+1])
		    		$scope.category[indexToIncrement][1].price = 10 + Math.round(Math.random()* 20* 100) / 100;
		    	$scope.category[indexToIncrement][2] =tempBestBooks[i+2];
		    	if(tempBestBooks[i+2])
		    		$scope.category[indexToIncrement][2].price = 10 + Math.round(Math.random()* 20* 100) / 100;
		    	$scope.category[indexToIncrement][3] = tempBestBooks[i+3];
		    	if(tempBestBooks[i+3])
		    		$scope.category[indexToIncrement][3].price =10 +  Math.round(Math.random()*20*  100) / 100;

		    	console.log(indexToIncrement);
		    	indexToIncrement++;
		    }
	    	console.log($scope.category);
		  }, function errorCallback(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.

		  });

  	};


  }]);
