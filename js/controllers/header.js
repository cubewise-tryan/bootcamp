app.controller('HeaderCtrl', ['$scope', '$rootScope', '$interval', '$timeout', '$state', '$stateParams', '$http', '$location',
                            	function($scope, $rootScope, $interval, $timeout, $state, $stateParams, $http, $location) {

    $scope.header = {};
    $scope.page = {};

    if($location.search().version){
        $scope.header.version = $location.search().version;
    }

    if($location.search()["best-app"]){
        $scope.header.bestApp = $location.search()["best-app"];
    }

    $scope.selections = {
        bestApp: "",
        version: ""
    };

    $scope.broadcastFromSelect = function(){
        $location.search("best-app", $scope.header.bestApp);
        // Need to use $parent to move Up to MainCtrl as the ui-view is a child of it
        $scope.$broadcast("bestApp-updated", $scope.header);
    };

    $scope.broadcastFromSubnm = function(){
        $location.search("version", $scope.header.version);
        // Can also also broadcast from $rootScope, this sends the message to ALL scopes
        $scope.$broadcast("version-updated", $scope.header);
    };

    $scope.$on("version-emit", function(evt, args){
		$scope.page.version = args.version;
	});
	
}]);