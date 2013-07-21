'use strict';

/* Directives */

angular.module('myApp.directives', [])
    .directive('navigationItem', function ($location) {
        return {
            restrict: 'E',
            templateUrl: "templates/menu-item",
            replace: true,
            scope: {
                link: "@",
                title: "@"
            },
            link: function (scope, element, attrs) {
                scope.$watch(function () {
                    return $location.path()
                }, function () {
                    var link = $(element).find("a").attr("href")
                    if ($location.path().substr(0, link.length) == link) {
                        element.addClass("active")
                    } else {
                        element.removeClass("active")
                    }
                });

            }
        }
    });
