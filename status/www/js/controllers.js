     angular.module('home')
    .controller('Ctrl', function($scope, City) {
      console.log("ccc");
      // $scope.city = City.all();
    })
    // .controller('DetailCtrl', function($scope, $stateParams, $http,WheaterService) {
    //   var id = $stateParams.Id;

    //   $scope.items = [];
      
    //   WheaterService.GetDetail(id).then(function(items){
    //     $scope.conditions = items;
    //     $scope.city = id;
    //   });
    // });