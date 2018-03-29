class RegistrationController {
    constructor($http, urls) {
        this.$http = $http;
        this.urls = urls;
        this.isAccepted = false;
        this.isSignedUp = false;
        this.data = { };
    }

    accept() {
        this.isAccepted = true;
    }

    signUp() {
        this.$http.post(this.urls.getInvestorRegistrationUrl(), this.data)
            .then(resp => {
                this.isSignedUp = true;
            });   
    }

    showTermsAndConditions() {
        return !this.isAccepted && !this.isSignedUp;
    }

    showForm() {
        return this.isAccepted && !this.isSignedUp;
    }

    showConfirmation() {
        return this.isSignedUp;
    }
}

angular.module("app")
    .component("registration", {
        templateUrl: "app/registration/registration.html",
        controller: RegistrationController
    });