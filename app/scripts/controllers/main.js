'use strict';

/*
=== Controller: Main ===
*/
    hokApp.controller('MainCtrl', function ($scope, dataFactory) {

        var cartItems = {};
        $scope.cartItems = cartItems;
        $scope.totalItems = 0;
        $scope.totalPrice = 0;
        $scope.modal = false;

        dataFactory.get().then(function (data) {
            $scope.products = data['products'];
        });

        $scope.addToCart = function(id, product) {
            //Use array position as id
            if (!cartItems[id]) {
                cartItems[id] = {
                    'product': product,
                    'total': 1
                };
            } else {
                cartItems[id]['total'] ++;
            }
            $scope.totalItems ++;
            $scope.totalPrice += parseFloat(product['price']);
        }

        $scope.showModal = function(bool) {
            $scope.modal = bool;
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
