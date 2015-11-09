var app= angular.module('mango',['ngRoute']);

app.controller('loginCtrl', function($scope, $window){
		$scope.login = function(){
		var uname = $scope.username;
		var upass = $scope.password;
		if(upass == 'admin' && uname == 'admin@mango.com'){
			$window.location.href = "homepage.html";
			//$location.path('/homepage').replace();
		}
		else{
			alert('username o password errati');
		}
	}
});

app.controller('registrationCtrl', function($scope) {
  /*$http.get('path/to/json').then(function(data) {
    $scope.languages = data;
  });*/
  //inputting json directly for this example
$scope.errorSimbol="asterisk";
$scope.errorColor="warning";
$scope.errorMex="Campo Richiesto";

$scope.utenteRegistrazione={nome:"", cognome:"", password:"", email:"", email2:"", compleanno:"", dipartimento:""};

  $scope.registration = function() {
    /*$http.post('path/to/server/file/to/save/json', $scope.languages).then(function(data) {
      $scope.msg = 'Data saved';
    });*/
	$scope.msg = JSON.stringify($scope.utenteRegistrazione);
	if($scope.utenteRegistrazione.email==$scope.utenteRegistrazione.email2){
		$scope.errorColor="success";
		$scope.errorSimbol="ok";
		$scope.errorMex="Registrazione effettuata con successo";
	}
    else{
    	$scope.errorSimbol="remove";
    	$scope.errorColor="danger";
    	$scope.errorMex="Email diversa nella conferma";
    }

  };
});

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        // route for the index page
        .when('/index', {
            templateUrl: 'index.html',
            controller: 'loginCtrl'
        })
        // route for the home page
        .when('/homepage', {
            templateUrl: 'homepage.html'
        })
        .otherwise({
            redirectTo: '/index'
        });

    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
});