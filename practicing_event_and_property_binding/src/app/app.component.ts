import { Component, EnvironmentInjector } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'practicing_event_and_property_binding';

    oddNumbers : number[] =[];
    evenNumbers : number[] =[];
    getNumber(data : number)
    {
        if(data % 2 == 0)
        {
            console.log(data);   
            this.evenNumbers.push(data);
        }
        else 
        {
            console.log(data);
            this.oddNumbers.push(data);
        }
    }

}
