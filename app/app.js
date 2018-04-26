angular
    .module("app", ["ngRoute"])
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.caseInsensitiveMatch = true;
        $routeProvider
            .when("/", { template: "<home></home>" })
            .when("/registration", { template: "<registration></registration>" })
            .when("/registration/verify/:confirmationToken", {
                resolveRedirectTo: function($http, $route, urls) {
                    return $http.get(urls.getInvestorConfirmationUrl($route.current.params.confirmationToken))
                        .then(resp => `/dashboard/${resp.data.authToken}`)
                        .catch(err => `/${err.status}`);
                }
            })
            .when("/dashboard/:authToken", { template: "<dashboard></dashboard>" })
            .when("/401", { templateUrl: "app/401.html" })
            .when("/404", { templateUrl: "app/404.html" })
            .otherwise({
                redirectTo: "/"
            });
    })
    .component("app", {
        templateUrl: "app/app.html"
    });