import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'app2';

    selectedTab: string = 'recipes';
    getSelectedTab(e : string)
    {
        this.selectedTab = e;
        console.log(e);
    }
}
