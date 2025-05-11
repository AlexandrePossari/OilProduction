import { Component } from '@angular/core';

interface Well {
    wellOperatingCost: number;
    numberOfBarrelsYield: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

    roi: number = 0;
    wells: Well[] = [];
    oilDrillPrice: number = 0;
    oilBarrelPrice: number = 0;

    calculateROI() {
        let wellsCosts: number = 0;
        let wellsRevenue: number = 0;

        for(let well of this.wells) {
            wellsCosts += well.wellOperatingCost;
            wellsRevenue += well.numberOfBarrelsYield * this.oilBarrelPrice;
        }

        let cost: number = this.oilDrillPrice + wellsCosts;
        let revenue: number = wellsRevenue;
        this.roi = revenue/cost;
    }
}
