/**
 * Created by Administrator on 2014/12/21.
 */
var omsApp = angular.module('omsApp',['ngRoute','ngAnimate']);
omsApp.config(['$routeProvider', '$locationProvider',function(routeProvider,$locationProvider){
    $routeProvider.when('/',{
        templateUrl:'',
        controller:''
    });
}]);