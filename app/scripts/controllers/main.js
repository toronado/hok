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

        // Fetch JSON data using get factory
        dataFactory.get().then(function (data) {
            $scope.products = data['products'];
        });

        // Triggered when any 'Add to Cart' button clicked. Use array index as id
        $scope.addToCart = function(id, product) {
            if (!cartItems[id]) {
                // Add new item to cartItems Object
                cartItems[id] = {
                    'product': product,
                    'total': 1
                };
            } else {
                //Increment chosen item total by 1
                cartItems[id]['total'] ++;
            }
            // Always increment total items in the cart and calculate total price
            $scope.totalItems ++;
            $scope.totalPrice += parseFloat(product['price']);
        }

        // Triggered when cart button clicked
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
