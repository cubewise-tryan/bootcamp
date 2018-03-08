app.controller('HomeCtrl', ['$scope', '$rootScope', '$interval', '$timeout', '$state', '$stateParams', '$http', 
                            	function($scope, $rootScope, $interval, $timeout, $state, $stateParams, $http) {
	
	$scope.page = {
		bestApp$rootScope: "",
		version$rootScope: "",
		bestApp$On: "",
		version$On: ""
	};

	if(!$rootScope.ui){
        $rootScope.ui = {
            showHeader: true
        }
    } else {
        $rootScope.ui.showHeader = true;
    }

	// MEMORY LEAK!!!
	var bestAppWatch = $rootScope.$watch("globals.bestApp", function(){
		if($rootScope.globals){
			$scope.page.bestApp$rootScope = $rootScope.globals.bestApp;
		}
	});

	// MEMORY LEAK!!!
	var versionWatch = $rootScope.$watch("globals.version", function(){
		if($rootScope.globals){
			$scope.page.version$rootScope = $rootScope.globals.version;
		}
	});

	// FIX MEMEORY LEAK
	$scope.$on("$destroy", function(){
		bestAppWatch();
		versionWatch();
	});
	
	$scope.$on("best-app-updated", function(evt, args){
		$scope.page.bestApp$On = args.bestApp;
	});

	$scope.$on("version-updated", function(evt, args){
		$scope.page.version$On = args.version;
	});



	//$scope.header = {};

	$scope.emitFromSubnm = function(){
		//$scope.$emit("version-emit", $scope.header);
	};

}]);
