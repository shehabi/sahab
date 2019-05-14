angular.module('resturant.services', ['ngResource'])
    .factory('resturants', function ($resource){
        return $resource('http://localhost:8001/resturants/:resturantId/:data');
    });