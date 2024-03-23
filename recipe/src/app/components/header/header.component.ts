import { Component, EventEmitter, Output } from "@angular/core";



@Component({
    selector : 'header',
    templateUrl : './header.component.html'
    
})
export class HeaderComponent{
    
    @Output() tabSelected : EventEmitter<string> = new EventEmitter<string>();

    select(s : string)
    {
        this.tabSelected.emit(s);
    }
}