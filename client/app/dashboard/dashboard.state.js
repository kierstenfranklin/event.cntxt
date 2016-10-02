'use strict';
angular.module('app.dashboard')
.config(function($stateProvider){
    $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardCtrl',
      controllerAs: 'dashboardCtrl'
    })
    .state('dashboard.events',{
          url: '/dashboard/events',
          template: '<h1>Events</h1>',
          controller: 'DashboardCtrl',
          controllerAs: 'dashboardCtrl'
    })
    .state('dashboard.beacons',{
          url: '/dashboard/beacons',
          template: '<h1>Beacons</h1>',
          controller: 'DashboardCtrl',
          controllerAs: 'dashboardCtrl'
    })
})
