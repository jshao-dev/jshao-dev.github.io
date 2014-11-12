angular.module('helloWorldModule', [])
	.controller('helloWorldController', function(){
		this.welcomeMessage = 'Hello world!';
	})
	.controller('countryController', function(){
		this.areaCode = {value: '+1'};
	})
	.controller('stateController', function($scope){
		$scope.areaCode = '+12';
	})
	.controller('cityController', function($scope){
		$scope.areaCode = '+10014';
	});

angular.element(function(){
	angular.bootstrap(angular.element('*[ng-app="helloWorldModule"]'), ['helloWorldModule']);
});