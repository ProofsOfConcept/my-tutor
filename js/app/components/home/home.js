function HomeController($scope, $mdSidenav, $log, $mdDialog, $timeout) {
    $scope.lessons = [];
    $scope.loadingHome = false;
    $scope.fabBtn = {};

    $scope.toggleLeft = function () {
        $mdSidenav('left')
            .toggle()
            .then(function () {
                $log.debug("toggle left is done");
            });
    };

    $scope.$watch('fabBtn.isOpen', function(isOpen) {
        if (isOpen) {
            $timeout(function() {
                $scope.tooltipVisible = $scope.fabBtn.isOpen;
            }, 600);
        } else {
            $scope.tooltipVisible = $scope.fabBtn.isOpen;
        }
    });

    $scope.openDialog = function ($event, item) {
        // Show the dialog
        $mdDialog.show({
            clickOutsideToClose: true,
            controller: function ($mdDialog) {
                // Save the clicked item
                this.item = item;

                // Setup some handlers
                this.close = function () {
                    $mdDialog.cancel();
                };
                this.submit = function () {
                    $mdDialog.hide();
                };
            },
            controllerAs: 'dialog',
            templateUrl: 'dialog.html',
            targetEvent: $event
        });
    };

    $scope.initHome = function () {
        $scope.loadingHome = true;

        $scope.fabBtn = {
            isOpen: false,
            hidden: false,
            hover: false
        };

        var max = 50;
        for (var i = 0; i < max; i++) {
            var lesson = {
                "id": i,
                "avatar": "img/icons/svg/ic_person_24px.svg",
                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "subtitle": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "obs": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla" +
                "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt" +
                "mollit anim id est laborum."
            };
            $scope.lessons.push(lesson);
        }
        $scope.loadingHome = false;

    };
}

angular.module("my-tutor").component('home', {
    templateUrl: 'views/components/home/home.html',
    controller: HomeController
});