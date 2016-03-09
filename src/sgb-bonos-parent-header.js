'use strict';

angular.module('sgb-bonos-parent-header', ['megazord'])
    .controller('sgb-bonos-parent-header-controller', ['$scope', '_router', '_screen', '_screenParams', '$ionicLoading',
        function ($scope, _router, _screen, _screenParams, $ionicLoading) {
        _screen.initialize($scope, _screenParams);

        $scope.$on('_dataLoadStarted', function(){
            $ionicLoading.show({
                template: '<ion-spinner icon="dots"></ion-spinner>',
                animation: 'fade-in',
                showBackdrop: true, 
                maxWidth: 500
            })
        });

        $scope.$on('_dataLoadFinished', function(){
            $ionicLoading.hide(); 
        });
    }]);