'use strict';

/*
=== Globals ===
*/


/*
=== Controller: Main ===
*/
    hokApp.controller('MainCtrl', function ($scope, dataFactory) {

        $scope.total = 0;
        $scope.items = [];

        dataFactory.get().then(function (data) {
            $scope.products = data['products'];
        });

        $scope.addToCart = function(id, item) {
            //console.log(id);
            $scope.items.push(item);
            $scope.total += parseFloat(item['price']);
        }

    });



/*
=== Factory: Get Data ===
*/
    hokApp.factory('dataFactory', function ($http) {
        return {
            get : function() {
                return $http({
                        method: 'GET',
                        url: 'json/data.json',
                        cache: false
                    })
                    .then(function (response) {
                        return response.data;
                    });
            }
        };
    });
