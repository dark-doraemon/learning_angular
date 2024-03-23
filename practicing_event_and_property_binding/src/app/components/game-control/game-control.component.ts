import { Component, EventEmitter, Output } from '@angular/core';
import { EvenComponent } from '../even/even.component';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrl: './game-control.component.scss'
})
export class GameControlComponent {
    
    @Output() numberEmitted  = new EventEmitter<number>();
    
    lastNumber = 0;
    counter ;
    onStart()
    {
        this.counter = setInterval(()=>{
            this.numberEmitted.emit(this.lastNumber++);
        },1000);
        
    }

    onStop()
    {
        clearInterval(this.counter);
    }

}
