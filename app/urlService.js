class UrlService {
    constructor() {
        this.baseApiUrl = "http://lykke-ico-api-platform.lykke-service.svc.cluster.local/api";
        //this.baseApiUrl = "http://localhost:5000/api";
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

    getQrUrl(string) {
        return `${this.baseApiUrl}/qr/${string}.png`;
    }
}

angular.module("app")
    .service("urls", UrlService);