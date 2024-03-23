import { Component } from "@angular/core";



@Component({
    selector : 'server',
    // selector :'[server]',
    // selector : '.server',
    // template : `
    //     <h1>hello</h1>
    //     <div>{{text}}</div>
    // `,
    templateUrl : './server.component.html',
    styleUrl : './server.component.scss'
})


export class ServerComponent {
    click : boolean = false;
    i : number = 0;
    numArr : number[] = [];
    onClick()
    {
        this.i++;
        this.numArr.push(this.i);
        this.click = true;
    }
}
