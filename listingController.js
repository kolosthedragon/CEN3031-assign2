angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
      display listing

     */
    $scope.addListings =function(){
      $scope.listings.push({
			"code": $scope.code,
    		"name": $scope.name,
			"address": $scope.address
						/* "latitude": $scope.coordinates.latitude,
			"longitude": $scope.coordinates.longitude
			*/
		});

    };
	
	$scope.deleteListing = function (index) {
		$scope.listings.splice(index,1);
	};
	
    $scope.showDetails = function(index){
		$scope.details = index;
    };

}]);

