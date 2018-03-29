angular
    .module("app", ["ngRoute"])
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.caseInsensitiveMatch = true;
        $routeProvider
            .when("/", { template: "<landing></landing>" })
            .when("/registration", { template: "<registration></registration>" })
            .when("/registration/verify/:confirmationToken", { 
                resolveRedirectTo: function($http, $route, urls) {
                    return $http.get(urls.getInvestorConfirmationUrl($route.current.params.confirmationToken))
                        .then(resp => `/summary/${resp.data.authToken}`);
                }
            })
            .when("/summary/:authToken", { template: "<summary></summary>"})
            .otherwise({
                redirectTo: "/"
            });
    })
    .component("app", {
        templateUrl: "app/app.html"
    });