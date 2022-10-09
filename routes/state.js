myapp.config(function($stateProvider, $locationProvider, 
    $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');   
        $stateProvider 
        
        .state('home', {
            url: '/home',
            templateUrl: 'html/home.html',
            controller: 'mainController'
        })

});