angular.module('App')
.controller('detailController', function($scope, $stateParams, $state, Currencies){
	angular.forEach(Currencies, function(currency){
		if(currency.code === $stateParams.currency){
			$scope.currency = currency;
		}
	});

	if(angular.isUndefined($scope.currency.ticker)){
		$state.go('tabs.rates');

	}
});