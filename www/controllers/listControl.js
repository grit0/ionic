angular.module('MyContact')

.controller('listController',function ($scope,$state,$http) {

    $http.get('https://api.github.com/repos/grit0/sta/git/trees/master').then(function(response){
      console.log(response);
      $scope.myDataArray = response.data.tree;
      $scope.x = response.data.tree;
      // console.log(response.data.tree[path]);
      // $scope.myDataArray = response.data;
       // $scope.data=response.data
    },function(error){
      console.log(error);
    });
    

  // $scope.myDataArray = [
  //  {
  //    name:'Phongsak Thomthitchong',
  //    nick:'Bank',
  //    social:'fb.com/senchaboxdev',
  //    mobile:'086-979-7070'
  //  },
  //  {
  //    name:'Wichai Thomthitchong',
  //    nick:'Dad',
  //    social:'youtube.com/senchabox',
  //    mobile:'1234567890'
  //  },
  //  {
  //    name:'Nakrit Thomthitchong',
  //    nick:'Namo',
  //    social:'senchabox.com',
  //    mobile:'0987654321'
  //  }
  // ]

  $scope.btnDetail = function (data) {

    console.log('Pressed.');
    // $state.go('detail',{name:data.name,nick:data.nickname,social:data.social,mobile:data.mobile});
    $state.go('detail',{mac:data.path});

  }
})

