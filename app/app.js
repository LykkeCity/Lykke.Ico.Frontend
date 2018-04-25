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
                        .then(resp => `/summary/${resp.data.authToken}`)
                        .catch(err => `/${err.status}`);
                }
            })
            .when("/summary/:authToken", { template: "<summary></summary>" })
            .when("/401", { templateUrl: "app/401.html" })
            .when("/404", { templateUrl: "app/404.html" })
            .otherwise({
                redirectTo: "/"
            });
    })
    .component("app", {
        templateUrl: "app/app.html"
    });