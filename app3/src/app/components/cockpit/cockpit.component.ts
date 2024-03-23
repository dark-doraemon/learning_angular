import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrl: './cockpit.component.scss',
})
export class CockpitComponent {
    
    // newServerName = '';
    // newServerContent = '';


    @Output('svc') serverCreated = new EventEmitter<{ type: string, name: string, content: string }>();
    @Output('bpc') blueprintCreated= new EventEmitter<{ type: string, name: string, content: string }>();


    @ViewChild('inputServerName') serverNameInput : ElementRef ;
    onAddServer(inputServerName,inputServerContent) 
    {
        this.serverCreated.emit(
            {type : "server",
            name : this.serverNameInput.nativeElement.value,
            content : inputServerContent.value
        });
    }

    onAddBlueprint(inputServerName,inputServerContent) {
        this.serverCreated.emit(
            {type : "blueprint",
            name : inputServerName.
            value ,content : inputServerContent.value
        });
    }
}
