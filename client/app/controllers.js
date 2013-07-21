'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('AppCtrl',function ($scope, $http, $location) {

        $scope.menuItems = [
            {
                link: "/view1",
                title: "page 1"
            },
            {
                link: "/view2",
                title: "page 2"
            },
            {
                link: "/view3",
                title: "page 3"
            }
        ]

    }).
    controller('MyCtrl1',function ($scope) {
        // write Ctrl here

    }).
    controller('MyCtrl2', function ($scope) {
        // write Ctrl here

    });
