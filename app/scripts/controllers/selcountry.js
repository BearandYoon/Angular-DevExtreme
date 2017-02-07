'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:SelcountryCtrl
 * @description
 * # SelcountryCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('SelcountryCtrl', function (OurService, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var BaseData = {};

    OurService.getBasicData(function(response) {
      console.log('getBasicData = ', response.data);
      BaseData = response.data;
      $scope.countries = _.keys(response.data);
      $scope.countries.sort();
      $scope.country = $scope.countries[1];

      $scope.ChangeCountry($scope.country);
    });

    var GetMatchedCities = function(country) {
      return BaseData[country];
    };

    $scope.ChangeCountry = function(country) {
      $scope.cities = GetMatchedCities(country);
      $scope.cities = eliminateDuplicates($scope.cities);
      $scope.city = $scope.cities[0];
    };

    $scope.Result = function() {
      OurService.SetSelectedCoutryandCity($scope.country, $scope.city);
    };

    function eliminateDuplicates(arr) {
      var i,
        len=arr.length,
        out=[],
        obj={};

      for (i=0;i<len;i++) {
        obj[arr[i]]=0;
      }
      for (i in obj) {
        out.push(i);
      }
      return out;
    }
  });
