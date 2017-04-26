var angular = require('/js/angular.min.js');

angular.module('app', ['ngRoute', 'ngResource'])
.factory('Medicos', ['$resource', function($resource){
    return $resource('/medicos/:_email', null, {
        'update': { method: 'PUT' }
    });
}])
.controller('RegisterController', ['$scope', 'Medicos', function($scope, Medicos){
    $scope.medicos = Medicos.query();

    // Email validation
    $("#email").keyup(function emailValidation() {
        var email = $("#email").val();
        var pwd = $('#contrasena');
        var cf = $('#confirmacion');
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regex.test(email)) {
            $('#emailAlert').html('Email válido.');
            $('#emailAlert').css('color', 'green');
        } else {
            $('#emailAlert').html('<strong>Error</strong>: Verifique que su correo electrónico esté escrito correctamente: ' + email);
            $('#emailAlert').css('color', 'red');
        }
    });

    // Password string length validation
    $('#contrasena').keyup(function passwordConforms() {
        
    });

    // Password match validation
    $('#confirmacion').keyup(function passwordValidation() {
        var pwd = $('#contrasena').val();
        console.log(pwd);
        var conf = $('#confirmacion').val();
        if(pwd===conf) {
            $('#passwordConfirmationAlert').html('Las contrase&ntilde;as coinciden.');
            $('#passwordConfirmationAlert').css('color', 'green');
        } else {
            $('#passwordConfirmationAlert').html('<strong>Error</strong>: Las contrase&ntilde;as no coinciden.');
            $('#passwordConfirmationAlert').css('color', 'red');
        }
    });

    // Save medico into database
    $scope.save = function(newMedico) {
        $scope.pwd = newMedico.contrasena;
        $scope.pwd_confirmation = newMedico.confirmacion;
        if(!$scope.newMedico || $scope.newMedico.length < 1) return;
        var medico = new Medicos({
            _id: newMedico.email, 
            contrasena: newMedico.contrasena,
            cedula: newMedico.cedula,
            nombre: newMedico.nombre,
            apellido_p: newMedico.apellido_p,
            apellido_m: newMedico.apellido_m
        });
        medico.$save(function(){
            $scope.medicos.push(medico);
            $scope.newMedico = '';
        });
    }
}])
.controller('LoginController', ['$scope', '$routeParams', 'Medico', '$location', function($scope, $routeParams, Medico, $location) {
    $scope.medico = Medicos.get({
        id: $routeParams.id
    });
    console.log('Here');
    $scope.find = function() {
        Medico.get({
            email: $scope.medico._email, 
            contrasena: $scope.medico.contrasena
        }, $scope.medico, function() {
            $location.url('/');
            console.log('searching user');
        });
    };
}])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/register', {
        templateUrl: '/register.html',
        controller: 'RegisterController'
    }).when('/', {
        templateUrl: '/login.html',
        controller: 'LoginController'
    });
}]);