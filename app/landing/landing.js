class LandingController {
    constructor() {
        this.team = [
            { id:"andrey.krivoshapov", name: "Andrey Krivoshapov", description: "ICO platform developer" },        
            { id:"yuriy.plotnikov", name: "Yuriy Plotnikov", description: "ICO platform developer" }
        ];
    }
}

angular.module("app")
    .component("landing", {
        templateUrl: "app/landing/landing.html",
        controller: LandingController
    });