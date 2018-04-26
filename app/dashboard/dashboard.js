class DashboardController {
    constructor($http, $location, $route, urls) {
        this.$http = $http;
        this.$location = $location;
        this.$route = $route;
        this.urls = urls;
        this.data = { tokenAddress: "", refundEthAddress: "", refundBtcAddress: "" };
        this.investor = null;
        this.errorMessage = "";
        this.params = { headers: { authToken: $route.current.params.authToken } };
    }

    $onInit() {
        this.getInvestor()
            .catch(e => {
                this.$location.path(`/${e.status}`);
            });
    }

    getInvestor() {
        return this.$http.get(this.urls.getInvestorUrl(), this.params)
            .then(resp => {
                this.investor = resp.data;
            });
    }

    save() {
        this.errorMessage = "";
        this.$http
            .post(this.urls.getInvestorUrl(), this.data, this.params)
            .then(_ => this.getInvestor())
            .catch(e => {
                this.errorMessage = e.data || e.statusText;
            });
    }
}

angular.module("app")
    .component("dashboard", {
        templateUrl: "app/dashboard/dashboard.html",
        controller: DashboardController
    });