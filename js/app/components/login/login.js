function LoginController ($scope, $mdToast, Users, $state) {
    $scope.password = "";
    $scope.login = "";
    $scope.progressLogin = false;
    $scope.logar = function () {
        $scope.progressLogin = true;
        var pass = $scope.password;
        var login = $scope.login;
        var valido = true;
        if(!pass) {
            valido = false;
        }
        if(!login) {
            valido = false;
        }
        if(!valido) {
            loginError();
        } else {
            var query = {'login': login, 'pass': pass};
            Users.query(query).then(function (users) {
                if (users.length > 0) {
                    $state.go('home');
                } else {
                    loginError();
                }
            });
        }
    };

    function loginError () {
        $scope.progressLogin = false;
        var mdLogin = document.getElementById('md-login');
        $mdToast.show(
            $mdToast.simple()
                .textContent('Login e/ou senha inválidos')
                .position('top right')
                .hideDelay(3000)
                .parent(mdLogin)
        );
    }

}

angular.module("my-tutor").component('login', {
    templateUrl: 'views/components/login/login.html',
    controller: LoginController
});