myapp.controller("mainController",
    ["$scope", "$state", "$http",
        function($scope, $state, $http) {  

            $scope.selectedUsers = 2;

            $scope.getUsers = function () {
                $http({
                    url: 'https://thanos.users.challenge.dev.monospacelabs.com/users',
                    method: "GET",
                    data: {},
                    headers: {'Content-Type': 'application/json'},
                })
                .then(function(response) {
                    $scope.users = response.data;
                }, 
                function(response) { 
                        // failed
                        console.log("BAD REQUEST");
                }); 
            };
            
            $scope.switchFunc = function(id) {
                console.log(id);
                $scope.id = id;
                $http({
                    url: 'https://thanos.users.challenge.dev.monospacelabs.com/users/' +id,
                    method: "PUT",
                    data: {},
                    headers: {'Content-Type': 'application/json'},
                })
                .then(function(response) {
                    $scope.update = response.data;
                    $state.go('home');
                }, 
                function(response) { 
                        // failed
                        console.log("BAD REQUEST");
                }); 
                
            };


            $scope.getUsers();

            }]); 