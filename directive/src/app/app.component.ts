import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
    ngAfterViewInit(): void {
    }
    title = 'directive';

    onlyOdd : boolean = false;
    oddNumbers = [1,3,5,7,9];
    evenNumbers  =[2,4,6,8,10];

    value = 5;
    
}
