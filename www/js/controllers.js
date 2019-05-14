angular.module('resturant.controllers', [])
    .controller('resturantListCtrl', function ($scope, resturants) {

        $scope.searchKey = "";

        $scope.clearSearch = function () {
            $scope.searchKey = "";
            $scope.resturants = resturants.query();
        }

        $scope.search = function () {
            $scope.resturants = resturants.query({name: $scope.searchKey});
        }

        $scope.resturants = resturants.query();
    })

    .controller('resturantDetailCtrl', function($scope, $stateParams, resturants) {
        console.log('details');
        $scope.resturant = resturants.get({resturantId: $stateParams.resturantId});
    })

    .controller('resturantReportsCtrl', function ($scope, $stateParams, resturants) {
        console.log('reports');
        $scope.resturant = resturants.get({resturantId: $stateParams.resturantId, data: 'reports'});
    });