     angular.module('starter.service', [])

    .factory('City', function() {
      var city = [
        { name: 'London'},
        { name: 'Bangkok'},
        { name: 'New York'},
        { name: 'Tokyo'},
      ];
      return {
        all: function() {
          return city;
        }
      };
    })

    // เรียก Api รายละเอียดข้อมูลสภาพอากาศ โดยฟังก์ชัน GetDetail จะรับพารามิเตอร์เป็นชื่อเมือง
    .factory('WheaterService', function($http){
      var BASE_URL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22";
      var PARAM = "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
      var items = [];   
            return {
              GetDetail: function(id){
                return $http.get(BASE_URL+id+PARAM).then(function(response){
                  items = response.data.query.results;
                  return items;
                });
              }
            }
    });