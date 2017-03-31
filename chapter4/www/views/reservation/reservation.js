angular.module('App').
controller('reservationController', function($scope){
	$scope.reservation = {
		checkin:new Date(),
		checkout:new Date(Date.now() + 100 * 60 * 60 * 24 * 7),
		room:156,
		rate:121,
		wifi:'resortwifi'
	};
});