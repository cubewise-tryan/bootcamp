app.controller('asyncCtrl', ['$scope', '$rootScope', '$log', '$tm1Ui', function($scope, $rootScope, $log, $tm1Ui) {
    
    $scope.defaults = {};
    $scope.selections = {
        period: "",
        description: ""
    };
    $scope.lists = {
        sequence: []
    };
    $scope.values = {};

    if(!$rootScope.ui){
        $rootScope.ui = {
            showHeader: false
        }
    } else {
        $rootScope.ui.showHeader = false;
    }

    $scope.lists.sequence.push("Loading controller")

    $scope.loadValue = function(){
        $scope.lists.sequence.push("loadValue start");
        $scope.lists.sequence.push("Get string Calender Month");
        $tm1Ui.cellGet("dev", "System Info", "Calender Month", "String").then(function(result){
            $scope.lists.sequence.push("Calender Month string is: " + result.Value);
            $scope.selections.period = result.Value;
        });
        $scope.lists.sequence.push("loadValue complete");
    }

    $scope.loadDescription = function(){
        $scope.lists.sequence.push("Get description ");
        $tm1Ui.attributeGet("dev", "Period", $scope.selections.period, "Short Description").then(function(result){
            $scope.lists.sequence.push("Short Description is: " + result.Value);
            $scope.selections.description = result.Value;
        });
    };

    $scope.loadValue();

    $scope.$watch("selections.period", function(){
        $scope.loadDescription();
    });

    
}]);
