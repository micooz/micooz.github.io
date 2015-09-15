import angular from 'angular';
import controllers from './controllers';

controllers.controller('HomeController', ['$scope', '$http', ($scope, $http) => {
  $("#portrait").popover({ trigger: "hover" });
}]);
