import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'app3';

    servers  = [
        {type:'server',name:'TestServer',content:'Just a test'}
    ];


    getServerCreated(e :{type : string,name : string,content:string})
    {
        this.servers.push(e);
    }
    getBlueprintCreated(e :{type : string,name : string,content:string})
    {
        this.servers.push(e);
    } 

    

    onChangeFirst()
    {
        this.servers[0].name = "Changed";
    }

    onDestroyFirst()
    {
        this.servers.splice(0,1);
    }
}
