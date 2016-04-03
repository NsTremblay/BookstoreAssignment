'use strict';

/**
 * @ngdoc function
 * @name yomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yomanApp
 */
angular.module('yomanApp')
  .controller('PaymentController', [ '$scope', '$http', function ($scope, $http) {

    //TODO find the definition of the method that removes the book from the list
    $scope.removeBook = function (name){
    	$scope.total = $scope.total-$scope.shoppingCart[name].price;
      $scope.shoppingCart.splice(name, 1);

    };

    $scope.shoppingCart = globalCart;

    $scope.up = function(bookIndex){
    	$scope.total = $scope.total + ($scope.shoppingCart[bookIndex].price)/$scope.shoppingCart[bookIndex].quantity;
    	$scope.shoppingCart[bookIndex].price = $scope.shoppingCart[bookIndex].price + $scope.shoppingCart[bookIndex].price/($scope.shoppingCart[bookIndex].quantity);
    	$scope.shoppingCart[bookIndex].quantity++;
    }

    $scope.down = function(bookIndex){
    	if($scope.shoppingCart[bookIndex].quantity>1){
    		$scope.total = $scope.total - ($scope.shoppingCart[bookIndex].price)/$scope.shoppingCart[bookIndex].quantity;
	    	$scope.shoppingCart[bookIndex].price = $scope.shoppingCart[bookIndex].price - $scope.shoppingCart[bookIndex].price/($scope.shoppingCart[bookIndex].quantity);
	    	$scope.shoppingCart[bookIndex].quantity--;
    	}
   	}


    $scope.total =101;
    $scope.books = [];
  	

  	$scope.shoppingCart = [{
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
	}],
	"quantity":1
}, {
	"rank": 2,
	"rank_last_week": 0,
	"weeks_on_list": 0,
	"asterisk": 0,
	"dagger": 0,
	"primary_isbn10": "1416583432",
	"primary_isbn13": "9781416583431",
	"publisher": "Scribner",
	"description": "What the world is like from a dog's point of view.",
	"price": 21,
	"title": "INSIDE OF A DOG",
	"author": "Alexandra Horowitz",
	"contributor": "by Alexandra Horowitz",
	"contributor_note": "",
	"book_image": "http:\/\/du.ec2.nytimes.com.s3.amazonaws.com\/prd\/books\/9781416583431.jpg",
	"amazon_product_url": "http:\/\/www.amazon.com\/Inside-Dog-What-Dogs-Smell\/dp\/1416583432?tag=thenewyorktim-20",
	"age_group": "",
	"book_review_link": "",
	"first_chapter_link": "",
	"sunday_review_link": "http:\/\/www.nytimes.com\/2009\/09\/13\/books\/review\/Schine-t.html",
	"article_chapter_link": "",
	"isbns": [{
		"isbn10": "1416583432",
		"isbn13": "9781416583431"
	}, {
		"isbn10": "1416588272",
		"isbn13": "9781416588276"
	}, {
		"isbn10": "1416583408",
		"isbn13": "9781416583400"
	}, {
		"isbn10": "1400112559",
		"isbn13": "9781400112555"
	}, {
		"isbn10": "148145093X",
		"isbn13": "9781481450935"
	}],
	"quantity":1
}, {
	"rank": 3,
	"rank_last_week": 0,
	"weeks_on_list": 0,
	"asterisk": 0,
	"dagger": 0,
	"primary_isbn10": "1451667329",
	"primary_isbn13": "9781451667325",
	"publisher": "Touchstone",
	"description": "Canine powers of scent detection and the hidden things dogs can sniff out with their noses: truffles, bedbugs, bombs, drugs, disease and death.",
	"price": 10,
	"title": "WHAT THE DOG KNOWS",
	"author": "Cat Warren",
	"contributor": "by Cat Warren",
	"contributor_note": "",
	"book_image": "http:\/\/du.ec2.nytimes.com.s3.amazonaws.com\/prd\/books\/9781451667325.jpg",
	"amazon_product_url": "http:\/\/www.amazon.com\/What-Dog-Knows-Science-Perceive\/dp\/1451667329?tag=thenewyorktim-20",
	"age_group": "",
	"book_review_link": "",
	"first_chapter_link": "",
	"sunday_review_link": "http:\/\/www.nytimes.com\/2013\/12\/08\/books\/review\/how-dogs-love-us-and-what-the-dog-knows.html",
	"article_chapter_link": "",
	"isbns": [{
		"isbn10": "1451667329",
		"isbn13": "9781451667325"
	}, {
		"isbn10": "1451667310",
		"isbn13": "9781451667318"
	}, {
		"isbn10": "1451667337",
		"isbn13": "9781451667332"
	}],
	"quantity":1
}, {
	"rank": 4,
	"rank_last_week": 0,
	"weeks_on_list": 0,
	"asterisk": 0,
	"dagger": 0,
	"primary_isbn10": "1492614076",
	"primary_isbn13": "9781492614074",
	"publisher": "Sourcebooks",
	"description": "The story of Greg Mahle, an Ohio man, and his travels around the country to find permanent homes for abandoned and abused dogs.",
	"price": 25,
	"title": "RESCUE ROAD",
	"author": "Peter Zheutlin",
	"contributor": "by Peter Zheutlin",
	"contributor_note": "",
	"book_image": "http:\/\/du.ec2.nytimes.com.s3.amazonaws.com\/prd\/books\/9781492614074.jpg",
	"amazon_product_url": "http:\/\/www.amazon.com\/Rescue-Road-Thousand-Million-Highway\/dp\/1492614076?tag=thenewyorktim-20",
	"age_group": "",
	"book_review_link": "",
	"first_chapter_link": "",
	"sunday_review_link": "",
	"article_chapter_link": "",
	"isbns": [{
		"isbn10": "1492614076",
		"isbn13": "9781492614074"
	}, {
		"isbn10": "1492614084",
		"isbn13": "9781492614081"
	}],
	"quantity":1
}, {
	"rank": 5,
	"rank_last_week": 0,
	"weeks_on_list": 0,
	"asterisk": 0,
	"dagger": 0,
	"primary_isbn10": "0812981650",
	"primary_isbn13": "9780812981650",
	"publisher": "Random House",
	"description": "A portrait of an Englishman known as Elephant Bill who supervised, and came to protect, the elephants employed by a teak company in Burma, and trained them to provide assistance during World War II.",
	"price": 20,
	"title": "ELEPHANT COMPANY",
	"author": "Vicki Constantine Croke",
	"contributor": "by Vicki Constantine Croke",
	"contributor_note": "",
	"book_image": "http:\/\/du.ec2.nytimes.com.s3.amazonaws.com\/prd\/books\/9780679603993.jpg",
	"amazon_product_url": "http:\/\/www.amazon.com\/Elephant-Company-Inspiring-Unlikely-Animals-ebook\/dp\/B00HXYLVU4?tag=thenewyorktim-20",
	"age_group": "",
	"book_review_link": "",
	"first_chapter_link": "",
	"sunday_review_link": "http:\/\/www.nytimes.com\/2014\/07\/13\/books\/review\/elephant-company-by-vicki-constantine-croke.html",
	"article_chapter_link": "",
	"isbns": [{
		"isbn10": "1400069335",
		"isbn13": "9781400069330"
	}, {
		"isbn10": "0812981650",
		"isbn13": "9780812981650"
	}],
	"quantity":1
}];

  }]);
