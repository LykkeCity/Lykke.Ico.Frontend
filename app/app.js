angular
    .module("app", ["ngRoute"])
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.caseInsensitiveMatch = true;
        $routeProvider
            .when("/", { template: "<landing></landing>" })
            .when("/registration", { template: "<registration></registration>" })
            .when("/summary", { template: "<summary></summary>" })        
            .otherwise({
                redirectTo: "/"
            });
    })
    .component("app", {
        templateUrl: "app/app.html"
    });