class UrlService {
    constructor() {
        this.baseApiUrl = "http://lykke-ico-api-platform.lykke-service.svc.cluster.local/api"
    }

    getInvestorRegistrationUrl() {
        return `${this.baseApiUrl}/investor/register`;
    }

    getInvestorConfirmationUrl(confirmationToken) {
        return `${this.baseApiUrl}/investor/confirmation/${confirmationToken}`;
    }

    getInvestorUrl() {
        return `${this.baseApiUrl}/investor`;
    }
}

angular.module("app")
    .service("urls", UrlService);