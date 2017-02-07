'use strict';

/**
 * @ngdoc service
 * @name testApp.OurService
 * @description
 * # OurService
 * Service in the testApp.
 */
angular.module('testApp')
  .service('OurService', function ($http, $window) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var selectedCountry = '';
    var selectedCity = '';

    var getBasicData = function(callback) {
      return $http({
        method: 'get',
        url: 'https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json'
      }).then(
        function successCallback(response) {
          callback(response);
        }, function errorCallback(response) {
          callback(response);
        }
      );
    };

    var SetSelectedCoutryandCity = function (country, city) {
      selectedCountry = country;
      selectedCity = city;
      $window.location.href = '#/result';
    };

    var GetSelectedCountryandCity = function(callback) {
      callback(selectedCountry, selectedCity);
    };

    var submit = function(country, city, callback) {
      return $http.post('https://www.send.com/api?user=1', country, city).then(
        function successCallback(response) {
          callback(response);
        }, function errorCallback(response) {
          callback(response);
        }
      );
    };

    var OurService = {
      getBasicData: getBasicData,
      SetSelectedCoutryandCity: SetSelectedCoutryandCity,
      GetSelectedCountryandCity: GetSelectedCountryandCity,
      submit: submit
    };

    return OurService;
  });
