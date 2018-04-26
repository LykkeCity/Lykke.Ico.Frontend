class HomeController {
    constructor() {
        this.team = [
            { id: "andrey.krivoshapov", name: "Andrey Krivoshapov", description: "ICO platform developer" },
            { id: "yuriy.plotnikov", name: "Yuriy Plotnikov", description: "ICO platform developer" }
        ];
    }
}

angular.module("app")
    .component("home", {
        templateUrl: "app/home/home.html",
        controller: HomeController
    });