'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:ResultCtrl
 * @description
 * # ResultCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('ResultCtrl', function ($scope, OurService, $window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    OurService.GetSelectedCountryandCity(function(country, city) {
      $scope.country = country;
      $scope.city = city;
    });

    $scope.submit = function() {
      OurService.submit($scope.country, $scope.city, function() {
        $window.location.href = '#/';
      });
    };
  });
