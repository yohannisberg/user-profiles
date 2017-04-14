angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends

	$scope.$on('$viewContentLoaded', function() {
		var promise = friendService.getFriends()
		promise.then(function (response) {
			$scope.currentUser = response.data.currentUser[0]
			$scope.friends = response.data.friends
		})
});

// $scope.currentUser = friendService.data.name;
// $scope.friends = friendService.data.friends;
});
