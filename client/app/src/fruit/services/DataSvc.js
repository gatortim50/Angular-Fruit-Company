(function () {


  var dataSrvc =  function () {

    return {
      Color: '',
      Location: ''
    };

  };

  angular.module('demoApp').factory('dataSrvc', dataSrvc);


}());