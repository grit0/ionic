angular.module('MyContact')

// .controller('detailController',function ($scope,$state,$stateParams,$ionicPopup) {

//   console.log('DETAIL START.');
//   console.log($stateParams);

//   $scope.txtName = $stateParams.name;
//   $scope.txtNickName = $stateParams.nick;
//   $scope.txtSocial = $stateParams.social;
//   $scope.txtMobile = $stateParams.mobile;

//   $scope.btnBack = function () {
//     console.log('back pressed.');
//     $state.go('list');
//   }

//   $scope.btnCall = function () {
//     console.log('btn Calling.......');

//     var confirmPopup = $ionicPopup.confirm({
//       title: 'Call',
//       template: $stateParams.mobile
//     });

//     confirmPopup.then(function(res) {
//       if(res) {
//         console.log('OK');
//       } else {
//         console.log('Cancel');
//       }
//     });

//   }
// })
.controller('detailController',function ($scope,$state,$http,$stateParams,$ionicPopup) {
    console.log($stateParams.mac);
    $http.get('https://raw.githubusercontent.com/grit0/sta/master/'+$stateParams.mac).then(function(response){
      console.log("connect")
      console.log(response);
      $scope.data= response.data;
      // $scope.myDataArray = response.data;
       // $scope.data=response.data
    },function(error){
      console.log(error);
    });

  $scope.btnBack = function () {
    console.log('back pressed.');
    $state.go('list');
  }

  $scope.btnCall = function () {
    console.log('btn Calling.......');

    var confirmPopup = $ionicPopup.confirm({
      title: 'Thank you',
      template: $stateParams.mobile
    });

    confirmPopup.then(function(res) {
      if(res) {
        console.log('OK');
      } else {
        console.log('Cancel');
      }
    });
    }
})
