(function () {
  "use strict";

  var commonSrvc =  function () {


    return {

      getDetail: function (detail, id) {

        var len = detail.length;

        for (var i = 0; i < len; i += 1) {
          var result = detail[i];
          if (detail.id === id) {
            console.log("detail: " + result);
            return result;
          }
        }

      }
    }


  };

  angular.module('demoApp').factory('commonSrvc', commonSrvc);


}());
