class DashboardController {
    constructor($http) {
        this.$http = $http;
        this.isTermsAndConditions = true;
        this.isAccepted = false;
        this.isSignedUp = false;
    }

    $onInit() {
    }

    acceptTermsAndConditions() {
        this.isTermsAndConditions = false;
        this.isAccepted = true;
    }

    signUp() {
        this.isAccepted = false;
        this.isSignedUp = true;
    }
}

angular.module("app")
    .component("registration", {
        templateUrl: "app/registration/registration.html",
        controller: DashboardController
    });