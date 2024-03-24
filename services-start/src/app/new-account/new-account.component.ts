import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';

@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.css'],
    providers: [LoggingService,AccountService]//nó sẽ thông báo cho angular biết rằng component này cần được inject các dịch vụ này
})
export class NewAccountComponent {
    @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

    constructor(private loggingService: LoggingService,
                private accountService : AccountService) { }

    onCreateAccount(accountName: string, accountStatus: string) {
        this.accountService.onAccountAdded({name : accountName,status : accountStatus});
        
    }
}
