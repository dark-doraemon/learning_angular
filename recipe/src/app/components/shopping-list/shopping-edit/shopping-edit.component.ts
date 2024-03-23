import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrl: './shopping-edit.component.scss'
})
export class ShoppingEditComponent {
    @ViewChild('nameInput', { static: false }) name;
    @ViewChild('amountInput', { static: false }) amount;

    @Output() data = new EventEmitter<{ name: string, amount: number }>;
    Add() {
        const nameIngre = this.name.nativeElement.value;
        const amountIngre = this.amount.nativeElement.value;

        this.data.emit({name : nameIngre,amount : amountIngre});
        
    }
}
