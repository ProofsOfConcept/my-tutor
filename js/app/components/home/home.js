function HomeController($scope, $mdSidenav, $log) {
    $scope.toggleLeft = function () {
        $mdSidenav('left')
            .toggle()
            .then(function () {
                $log.debug("toggle left is done");
            });
    };
}

angular.module("my-tutor").component('home', {
    templateUrl: 'views/components/home/home.html',
    controller: HomeController
});