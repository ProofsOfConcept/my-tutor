angular.module('my-tutor').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('login', {
            url: '/',
            component: 'login'
        })
        .state('home', {
            url: '/home',
            component: 'home'
        });
});