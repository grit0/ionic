// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
    .state('home',{
      url:'/home',
      templateUrl:'templates/home.html',
      controller:'ctrl'
    })
        .state('about',{
      url:'/about',
      templateUrl:'templates/about.html',
      // controller:'DashCtrl'
    })
  $urlRouterProvider.otherwise('/home')

})
    .controller('ctrl', function($scope, City) {
      console.log("ccc");
      // $scope.city = City.all();
    })
// .controller('DashCtrl', function($scope, $http) {
//   console.log("s");

//   $scope.result = "";
//   $http.get('j')
//     .success(function(data, status, headers,config){
//       console.log('data success');
//       console.log(data); // for browser console
//       $scope.result = data; // for UI
//     })
//     .error(function(data, status, headers,config){
//       console.log('data error');
//     })
//     .then(function(result){
//       things = result.data;
//     });
// })

// .controller('DashCtrl', function($scope, $http) {
//     $http.get("http://graph.facebook.com/")
//     .then(function(response) {
//         $scope.myWelcome = response.data;
//     });
// });