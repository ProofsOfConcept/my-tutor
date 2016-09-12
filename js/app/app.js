angular.module("my-tutor", ['ui.router', 'ngMaterial', 'ngResource', 'mongolabResourceHttp'])
    .constant('MONGOLAB_CONFIG', {API_KEY: 'YXgR-q92vuVCKlSm-ji3nplDTE7rHIQh', DB_NAME: 'mpp'})
    .factory('Users',function($mongolabResourceHttp){
        return $mongolabResourceHttp('users');
    });