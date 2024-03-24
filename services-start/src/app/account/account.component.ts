import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';
@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
    providers : [LoggingService,AccountService] //nó sẽ thông báo cho angular biết rằng component này cần 
    //được inject loggingService
})
export class AccountComponent {
    @Input() account: { name: string, status: string };
    @Input() id: number;

    constructor(private loggingService: LoggingService,
                private accountService : AccountService) { }
    
    onSetTo(status: string) {
        this.accountService.onStatusChanged({id :this.id,newStatus : status});
        this.loggingService.logStatusChange(status);
    }
}
